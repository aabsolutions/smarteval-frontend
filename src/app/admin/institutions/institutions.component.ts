import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
import { FeatherIconsComponent } from '@shared/components/feather-icons/feather-icons.component';
import { InstitutionsService, Institution } from './institutions.service';
import { InstitutionFormDialogComponent } from './dialogs/institution-form/institution-form.component';

@Component({
  selector: 'app-institutions',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    BreadcrumbComponent,
    FeatherIconsComponent
  ],
  templateUrl: './institutions.component.html',
  styleUrls: ['./institutions.component.scss'],
})
export class InstitutionsComponent implements OnInit {
  breadscrums = [
    {
      title: 'Gestión de Instituciones',
      items: ['Administración'],
      active: 'Instituciones',
    },
  ];

  displayedColumns: string[] = ['name', 'actions'];
  dataSource = new MatTableDataSource<Institution>([]);
  
  private institutionsService = inject(InstitutionsService);
  public dialog = inject(MatDialog);

  ngOnInit(): void {
    this.loadInstitutions();
  }

  loadInstitutions() {
    this.institutionsService.getAllInstitutions().subscribe({
      next: (data) => {
        this.dataSource.data = data;
      },
      error: (error) => {
        console.error('Error fetching institutions:', error);
      },
    });
  }

  openInstitutionDialog(institution?: Institution) {
    const dialogRef = this.dialog.open(InstitutionFormDialogComponent, {
      width: '400px',
      data: { institution },
      panelClass: 'custom-dialog-container',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadInstitutions();
      }
    });
  }

  deleteInstitution(inst: Institution) {
    if (confirm(`¿Eliminar la institución ${inst.name}?`)) {
      this.institutionsService.deleteInstitution(inst._id).subscribe({
        next: () => this.loadInstitutions(),
        error: (err) => console.error(err)
      });
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
