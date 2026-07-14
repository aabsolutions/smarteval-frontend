import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-select-students-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatCheckboxModule, FormsModule],
  template: `
    <h2 mat-dialog-title>Seleccionar Estudiantes</h2>
    <mat-dialog-content>
      <p class="mb-3">Selecciona a los estudiantes para los que deseas generar exámenes impresos (ignorando a los que ya tienen un intento activo):</p>
      
      <div class="d-flex flex-column gap-2" style="max-height: 400px; overflow-y: auto;">
        <mat-checkbox 
          color="primary"
          [checked]="allSelected"
          [indeterminate]="someSelected()"
          (change)="toggleAll($event.checked)">
          <strong>Seleccionar Todos</strong>
        </mat-checkbox>
        
        <hr class="my-1">

        <mat-checkbox 
          color="primary"
          *ngFor="let s of students" 
          [(ngModel)]="s.selected"
          (ngModelChange)="updateAllComplete()">
          {{ s.name }} ({{ s.username }})
        </mat-checkbox>
      </div>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button (click)="onCancel()">Cancelar</button>
      <button mat-raised-button color="primary" (click)="onConfirm()" [disabled]="getSelectedCount() === 0">
        Generar ({{ getSelectedCount() }})
      </button>
    </mat-dialog-actions>
  `,
  styles: [`
    mat-dialog-content { padding-top: 10px; }
  `]
})
export class SelectStudentsDialogComponent implements OnInit {
  students: any[] = [];
  allSelected: boolean = true;

  constructor(
    public dialogRef: MatDialogRef<SelectStudentsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { assessment: any, students: any[] }
  ) {}

  ngOnInit() {
    this.students = this.data.students.map(s => ({ ...s, selected: true }));
  }

  updateAllComplete() {
    this.allSelected = this.students.every(t => t.selected);
  }

  someSelected(): boolean {
    return this.students.filter(t => t.selected).length > 0 && !this.allSelected;
  }

  toggleAll(completed: boolean) {
    this.allSelected = completed;
    this.students.forEach(t => (t.selected = completed));
  }

  getSelectedCount() {
    return this.students.filter(s => s.selected).length;
  }

  onConfirm(): void {
    const selectedIds = this.students.filter(s => s.selected).map(s => s._id);
    this.dialogRef.close(selectedIds);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
