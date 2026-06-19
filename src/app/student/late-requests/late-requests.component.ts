import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatChipsModule } from '@angular/material/chips';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
import { LateRequestsService, LateRequest } from 'app/services/late-requests.service';
import Swal from 'sweetalert2';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { StudentAssessmentsService } from '../services/student-assessments.service';

@Component({
  selector: 'app-late-requests',
  standalone: true,
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, 
    MatTableModule, MatButtonModule, MatIconModule, 
    MatDialogModule, MatChipsModule,
    BreadcrumbComponent
  ],
  templateUrl: './late-requests.component.html',
  styleUrls: ['./late-requests.component.scss']
})
export class LateRequestsComponent implements OnInit {
  requests: LateRequest[] = [];
  displayedColumns: string[] = ['assessment', 'teacher', 'status', 'createdAt', 'actions'];

  breadscrums = [
    { title: 'Solicitudes Atrasadas', items: ['Estudiante'], active: 'Historial' }
  ];

  assessments: any[] = [];
  teachers: any[] = [];

  showForm = false;
  selectedAssessmentId = '';
  selectedTeacherId = '';
  reason = '';
  selectedFiles: File[] = [];
  existingImageUrls: string[] = [];
  editRequestId: string | null = null;

  constructor(
    private lateRequestsService: LateRequestsService,
    private http: HttpClient,
    private studentAssessmentsService: StudentAssessmentsService
  ) {}

  ngOnInit(): void {
    this.loadRequests();
    this.loadAssessments();
    this.loadTeachers();
  }

  loadRequests() {
    this.lateRequestsService.getStudentRequests().subscribe((data) => {
      this.requests = data;
    });
  }

  loadAssessments() {
    this.http.get<any[]>(`/api/assessments/student`).subscribe(data => {
      const now = new Date();
      // Filtrar solo los que ya pasaron de la fecha de cierre
      const closedAssessments = data.filter(a => new Date(a.endTime) <= now);
      
      this.assessments = [];
      closedAssessments.forEach(a => {
        // Validar que NO lo haya rendido (intentos == 0)
        this.studentAssessmentsService.getAttemptStatus(a._id).subscribe(status => {
          if (status.attemptsCount === 0) {
            this.assessments.push(a);
          }
        });
      });
    });
  }

  loadTeachers() {
    this.http.get<any[]>(`/api/assessments/student`).subscribe(data => {
       const tMap = new Map();
       data.forEach(a => {
         if (a.teacherId) {
           tMap.set(a.teacherId._id, a.teacherId);
         }
       });
       this.teachers = Array.from(tMap.values());
    });
  }

  onFileChange(event: any) {
    if (event.target.files.length > 5) {
      Swal.fire('Error', 'Máximo 5 archivos permitidos', 'error');
      event.target.value = '';
      return;
    }
    this.selectedFiles = Array.from(event.target.files);
  }

  autoSelectTeacher() {
    const selected = this.assessments.find(a => a._id === this.selectedAssessmentId);
    if (selected && selected.teacherId) {
      this.selectedTeacherId = selected.teacherId._id || selected.teacherId;
    }
  }

  submitRequest() {
    if (!this.selectedAssessmentId || !this.selectedTeacherId || !this.reason) {
      Swal.fire('Error', 'Completa todos los campos obligatorios', 'warning');
      return;
    }

    const formData = new FormData();
    formData.append('assessmentId', this.selectedAssessmentId);
    formData.append('teacherId', this.selectedTeacherId);
    formData.append('reason', this.reason);
    this.selectedFiles.forEach(f => formData.append('files', f));

    Swal.fire({ title: 'Enviando...', allowOutsideClick: false, didOpen: () => Swal.showLoading() });

    if (this.editRequestId) {
      this.lateRequestsService.updateRequest(this.editRequestId, formData).subscribe({
        next: () => {
          Swal.fire('Actualizado', 'La solicitud ha sido modificada y devuelta al docente', 'success');
          this.showForm = false;
          this.loadRequests();
          this.resetForm();
        },
        error: (err) => {
          const msg = err.error?.message || err.message || 'Error al actualizar';
          Swal.fire('Error', msg, 'error');
        }
      });
    } else {
      this.lateRequestsService.createRequest(formData).subscribe({
        next: () => {
          Swal.fire('Enviado', 'Solicitud enviada al docente', 'success');
          this.showForm = false;
          this.loadRequests();
          this.resetForm();
        },
        error: (err) => {
          const msg = err.error?.message || err.message || 'Error al enviar';
          Swal.fire('Error', msg, 'error');
        }
      });
    }
  }

  editRequest(req: LateRequest) {
    if (req.teacherComment) {
      Swal.fire({
        title: 'Comentario del Docente',
        text: req.teacherComment,
        icon: 'info'
      });
    }
    
    this.editRequestId = req._id;
    this.selectedAssessmentId = req.assessmentId?._id || req.assessmentId;
    this.selectedTeacherId = req.teacherId?._id || req.teacherId;
    this.reason = req.reason;
    this.existingImageUrls = req.imageUrls || [];
    this.showForm = true;
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
      title: 'Detalles de tu Solicitud',
      html: `
        <div class="text-start">
          <p><strong>Examen:</strong> ${req.assessmentId?.title || 'Desconocido'}</p>
          <p><strong>Motivo enviado:</strong><br/> ${req.reason}</p>
          ${req.teacherComment ? `<p><strong>Comentario del Docente:</strong> <span class="text-danger">${req.teacherComment}</span></p>` : ''}
        </div>
        ${imagesHtml}
      `,
      confirmButtonText: 'Cerrar'
    });
  }

  resetForm() {
    this.editRequestId = null;
    this.selectedAssessmentId = '';
    this.selectedTeacherId = '';
    this.reason = '';
    this.selectedFiles = [];
    this.existingImageUrls = [];
  }

  cancelRequest(id: string) {
    Swal.fire({
      title: '¿Anular solicitud?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, anular',
    }).then(result => {
      if (result.isConfirmed) {
        this.lateRequestsService.cancelRequest(id).subscribe(() => {
          Swal.fire('Anulada', 'La solicitud fue anulada', 'success');
          this.loadRequests();
        });
      }
    });
  }
}
