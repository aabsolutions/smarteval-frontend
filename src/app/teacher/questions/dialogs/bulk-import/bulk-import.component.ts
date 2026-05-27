import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { QuestionsService } from '../../questions.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-bulk-import-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatTableModule, MatIconModule, MatSelectModule, FormsModule],
  templateUrl: './bulk-import.component.html'
})
export class BulkImportDialogComponent {
  parsedData: any[] = [];
  displayedColumns: string[] = ['status', 'statement', 'type', 'difficulty', 'options', 'correctAnswers'];
  isProcessing = false;
  hasErrors = false;

  selectedTopicId: string = '';

  constructor(
    public dialogRef: MatDialogRef<BulkImportDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { topic: any, topics: any[] },
    private questionsService: QuestionsService
  ) {
    if (this.data.topic) {
      this.selectedTopicId = this.data.topic._id;
    }
  }

  downloadTemplate() {
    const ws_data = [
      ['Enunciado (Requerido)', 'Tipo (single-choice, multiple-choice, true-false, fill-blank)', 'Dificultad (easy, medium, hard)', 'Puntos (Número)', 'Opciones (Separadas por |)', 'Respuestas Correctas (Separadas por |)'],
      ['¿Cuál es la capital de Francia?', 'single-choice', 'easy', 1, 'Madrid|París|Berlín|Londres', 'París'],
      ['Seleccione los lenguajes frontend', 'multiple-choice', 'medium', 2, 'HTML|Python|CSS|Java', 'HTML|CSS'],
      ['El sol gira alrededor de la tierra', 'true-false', 'easy', 1, '', 'Falso'],
      ['El lenguaje oficial de Android es', 'fill-blank', 'medium', 1, '', 'Kotlin|Java']
    ];
    const ws = XLSX.utils.aoa_to_sheet(ws_data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Plantilla");
    XLSX.writeFile(wb, "Plantilla_Preguntas.xlsx");
  }

  onFileChange(evt: any) {
    if (!this.selectedTopicId) {
      alert('Debes seleccionar un tema antes de subir el archivo');
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
    const rows = data.slice(1).filter(row => row.length > 0 && row[0]);
    this.hasErrors = false;

    this.parsedData = rows.map((row, index) => {
      const statement = row[0]?.toString() || '';
      const type = row[1]?.toString() || 'single-choice';
      const difficulty = row[2]?.toString() || 'medium';
      const points = parseInt(row[3]) || 1;
      const optionsRaw = row[4]?.toString() || '';
      const correctAnswersRaw = row[5]?.toString() || '';

      const options = optionsRaw ? optionsRaw.split('|').map((o: string) => o.trim()) : [];
      const correctAnswers = correctAnswersRaw ? correctAnswersRaw.split('|').map((o: string) => o.trim()) : [];

      const isValid = this.validateRow(statement, type, difficulty, options, correctAnswers);
      if (!isValid) this.hasErrors = true;

      return {
        statement,
        type,
        difficulty,
        points,
        options,
        correctAnswers,
        topicId: this.selectedTopicId,
        isValid
      };
    });
  }

  validateRow(statement: string, type: string, difficulty: string, options: string[], correctAnswers: string[]): boolean {
    if (!statement) return false;
    if (!['single-choice', 'multiple-choice', 'true-false', 'fill-blank'].includes(type)) return false;
    if (!['easy', 'medium', 'hard'].includes(difficulty)) return false;
    if ((type === 'single-choice' || type === 'multiple-choice') && options.length < 2) return false;
    if (correctAnswers.length === 0) return false;
    return true;
  }

  importQuestions() {
    if (this.hasErrors || this.parsedData.length === 0) return;
    
    this.isProcessing = true;
    const questionsToImport = this.parsedData.map(d => {
      const q = { ...d };
      delete q.isValid;
      return q;
    });

    this.questionsService.createBulkQuestions(questionsToImport).subscribe({
      next: () => {
        this.isProcessing = false;
        this.dialogRef.close(true);
      },
      error: (err) => {
        this.isProcessing = false;
        alert(err.error?.message || 'Error al importar preguntas');
      }
    });
  }
}
