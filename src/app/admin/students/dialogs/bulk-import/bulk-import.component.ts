import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { StudentsService } from '../../students.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-bulk-import-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatTableModule, MatIconModule, MatSelectModule, FormsModule],
  templateUrl: './bulk-import.component.html'
})
export class BulkImportDialogComponent {
  parsedData: any[] = [];
  displayedColumns: string[] = ['status', 'name', 'identifier', 'email', 'password'];
  isProcessing = false;
  hasErrors = false;

  selectedGroupId: string = '';

  constructor(
    public dialogRef: MatDialogRef<BulkImportDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { groups: any[] },
    private studentsService: StudentsService
  ) {}

  downloadTemplate() {
    const ws_data = [
      ['Nombre (Requerido)', 'Cédula/Código (Requerido)', 'Correo Electrónico', 'Contraseña (Opcional)'],
      ['Juan Pérez', '123456789', 'juan@ejemplo.com', 'secreta123'],
      ['María Gómez', '987654321', 'maria@ejemplo.com', ''],
      ['Carlos López', '456789123', '', 'pwd123']
    ];
    const ws = XLSX.utils.aoa_to_sheet(ws_data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Plantilla");
    XLSX.writeFile(wb, "Plantilla_Estudiantes.xlsx");
  }

  onFileChange(evt: any) {
    if (!this.selectedGroupId) {
      alert('Debes seleccionar un grupo/curso antes de subir el archivo');
      return;
    }
    const target: DataTransfer = <DataTransfer>(evt.target);
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_json(ws, { header: 1 });
      this.processExcelData(data);
    };
    reader.readAsBinaryString(target.files[0]);
  }

  processExcelData(data: any[]) {
    const rows = data.slice(1).filter(row => row.length > 0 && (row[0] || row[1]));
    this.hasErrors = false;

    this.parsedData = rows.map((row, index) => {
      const name = row[0]?.toString().trim() || '';
      const identifier = row[1]?.toString().trim() || '';
      const email = row[2]?.toString().trim() || '';
      const password = row[3]?.toString().trim() || '';

      const isValid = this.validateRow(name, identifier);
      if (!isValid) this.hasErrors = true;

      const student: any = {
        name,
        identifier,
        groupId: this.selectedGroupId,
        isValid
      };

      if (email) student.email = email;
      if (password) student.password = password;

      return student;
    });
  }

  validateRow(name: string, identifier: string): boolean {
    if (!name || name.trim() === '') return false;
    if (!identifier || identifier.trim() === '') return false;
    return true;
  }

  importStudents() {
    if (this.hasErrors || this.parsedData.length === 0) return;
    
    this.isProcessing = true;
    const studentsToImport = this.parsedData.map(d => {
      const s = { ...d };
      delete s.isValid;
      return s;
    });

    this.studentsService.createBulkStudents(studentsToImport).subscribe({
      next: () => {
        this.isProcessing = false;
        this.dialogRef.close(true);
      },
      error: (err) => {
        this.isProcessing = false;
        alert(err.error?.message || 'Error al importar estudiantes');
      }
    });
  }
}
