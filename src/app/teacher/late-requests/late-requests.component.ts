import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { LateRequestsService, LateRequest } from 'app/services/late-requests.service';
import Swal from 'sweetalert2';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-late-requests',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, MatIconModule, MatChipsModule, BreadcrumbComponent],
  templateUrl: './late-requests.component.html',
  styleUrls: ['./late-requests.component.scss']
})
export class LateRequestsComponent implements OnInit {
  requests: LateRequest[] = [];
  displayedColumns: string[] = ['student', 'assessment', 'status', 'createdAt', 'actions'];

  breadscrums = [
    { title: 'Solicitudes Atrasadas', items: ['Profesor'], active: 'Bandeja' }
  ];

  constructor(private lateRequestsService: LateRequestsService) {}

  ngOnInit(): void {
    this.loadRequests();
  }

  loadRequests() {
    this.lateRequestsService.getTeacherRequests().subscribe(data => {
      this.requests = data;
    });
  }

  viewDetails(req: LateRequest) {
    let imagesHtml = '';
    if (req.imageUrls && req.imageUrls.length > 0) {
      imagesHtml = '<div class="d-flex flex-wrap gap-2 justify-content-center mt-3">';
      req.imageUrls.forEach(url => {
        imagesHtml += `<a href="${url}" target="_blank"><img src="${url}" style="max-height: 100px; border-radius: 4px;" /></a>`;
      });
      imagesHtml += '</div>';
    }

    Swal.fire({
      title: 'Detalles de la Solicitud',
      html: `
        <div class="text-start">
          <p><strong>Estudiante:</strong> ${req.studentId?.name || 'Desconocido'}</p>
          <p><strong>Examen:</strong> ${req.assessmentId?.title || 'Desconocido'}</p>
          <p><strong>Motivo:</strong><br/> ${req.reason}</p>
          ${req.teacherComment ? `<p><strong>Tu comentario:</strong> ${req.teacherComment}</p>` : ''}
        </div>
        ${imagesHtml}
        <div class="mt-4 d-flex justify-content-around">
           <button id="btn-aprobar" class="btn btn-success">Aprobar</button>
           <button id="btn-devolver" class="btn btn-warning">Devolver</button>
           <button id="btn-rechazar" class="btn btn-danger">Rechazar</button>
        </div>
      `,
      showConfirmButton: false,
      showCancelButton: true,
      cancelButtonText: 'Cerrar',
      didOpen: () => {
         document.getElementById('btn-aprobar')!.onclick = () => { Swal.close(); this.updateStatus(req._id, 'APROBADA'); };
         document.getElementById('btn-devolver')!.onclick = () => { Swal.close(); this.updateStatus(req._id, 'DEVUELTA'); };
         document.getElementById('btn-rechazar')!.onclick = () => { Swal.close(); this.updateStatus(req._id, 'RECHAZADA'); };
      }
    });
  }

  updateStatus(id: string, status: string) {
    if (status === 'APROBADA') {
      Swal.fire({
        title: 'Aprobar Solicitud',
        html: `
          <p>Selecciona hasta cuándo tendrá límite el estudiante para rendir el examen:</p>
          <input type="datetime-local" id="extension-date" class="form-control" />
          <textarea id="approval-comment" class="form-control mt-3" placeholder="Comentario (Opcional)"></textarea>
        `,
        showCancelButton: true,
        confirmButtonText: 'Confirmar Aprobación',
        preConfirm: () => {
          const dateVal = (document.getElementById('extension-date') as HTMLInputElement).value;
          const commentVal = (document.getElementById('approval-comment') as HTMLTextAreaElement).value;
          if (!dateVal) {
            Swal.showValidationMessage('Debes seleccionar una fecha y hora límite');
            return false;
          }
          return { extensionUntil: new Date(dateVal).toISOString(), teacherComment: commentVal };
        }
      }).then(res => {
        if (res.isConfirmed && res.value) {
          this.lateRequestsService.updateStatus(id, status, res.value.teacherComment, res.value.extensionUntil).subscribe(() => {
            Swal.fire('Aprobada', 'La solicitud fue aprobada y se extendió el plazo', 'success');
            this.loadRequests();
          });
        }
      });
    } else {
      Swal.fire({
        title: status === 'DEVUELTA' ? 'Devolver Solicitud' : 'Rechazar Solicitud',
        input: 'textarea',
        inputPlaceholder: 'Escribe un comentario (Obligatorio para devolver)',
        showCancelButton: true,
        confirmButtonText: 'Confirmar',
        preConfirm: (val) => {
          if (status === 'DEVUELTA' && !val) {
            Swal.showValidationMessage('Debes incluir un comentario indicando qué debe modificar el estudiante');
            return false;
          }
          return val;
        }
      }).then(res => {
        if (res.isConfirmed) {
          const comment = res.value || undefined;
          this.lateRequestsService.updateStatus(id, status, comment).subscribe(() => {
            Swal.fire('Actualizado', `La solicitud ha sido ${status}`, 'success');
            this.loadRequests();
          });
        }
      });
    }
  }
}
