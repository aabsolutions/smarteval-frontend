import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
import { FeatherIconsComponent } from '@shared/components/feather-icons/feather-icons.component';
import { TableShowHideColumnComponent } from '@shared/components/table-show-hide-column/table-show-hide-column.component';
import { QuestionsService, Question } from './questions.service';
import { TopicsService, Topic } from '../topics/topics.service';
import { QuestionFormDialogComponent } from './dialogs/question-form/question-form.component';
import { BulkImportDialogComponent } from './dialogs/bulk-import/bulk-import.component';
import { MatInputModule } from '@angular/material/input';
import { AlertService } from '@core/services/alert.service';
import { SelectionModel } from '@angular/cdk/collections';
import { MatCheckboxModule } from '@angular/material/checkbox';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    BreadcrumbComponent,
    FeatherIconsComponent,
    MatInputModule,
    MatPaginatorModule,
    TableShowHideColumnComponent,
    MatCheckboxModule
  ],
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent implements OnInit {
  breadscrums = [
    {
      title: 'Banco de Preguntas',
      items: ['Profesor'],
      active: 'Preguntas',
    },
  ];

  columnDefinitions = [
    { def: 'select', label: 'Seleccionar', visible: true },
    { def: 'statement', label: 'Enunciado', visible: true },
    { def: 'type', label: 'Tipo', visible: true },
    { def: 'difficulty', label: 'Dificultad', visible: true },
    { def: 'topic', label: 'Tema', visible: true },
    { def: 'points', label: 'Puntos', visible: true },
    { def: 'actions', label: 'Acciones', visible: true }
  ];

  get displayedColumns(): string[] {
    return this.columnDefinitions.filter(cd => cd.visible).map(cd => cd.def);
  }

  dataSource = new MatTableDataSource<Question>([]);
  selection = new SelectionModel<Question>(true, []);
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  topics: Topic[] = [];
  selectedTopicId: string = '';
  
  private questionsService = inject(QuestionsService);
  private topicsService = inject(TopicsService);
  public dialog = inject(MatDialog);
  private alertService = inject(AlertService);

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows && numRows > 0;
  }

  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }
    this.selection.select(...this.dataSource.data);
  }

  ngOnInit(): void {
    this.dataSource.filterPredicate = (data: Question, filter: string) => {
      const dataStr = Object.keys(data).reduce((currentTerm: string, key: string) => {
        const val = data[key as keyof Question];
        if (key === 'topicId' && val && typeof val === 'object') {
          return currentTerm + (val as any).name + '◬';
        }
        return currentTerm + val + '◬';
      }, '').toLowerCase();
      
      const transformedFilter = filter.trim().toLowerCase();
      return dataStr.indexOf(transformedFilter) != -1;
    };
    
    this.dataSource.paginator = this.paginator;
    
    this.loadTopics();
    this.loadQuestions();
  }

  loadTopics() {
    this.topicsService.getAllTopics().subscribe({
      next: (data) => this.topics = data,
      error: (err) => console.error(err)
    });
  }

  loadQuestions() {
    this.questionsService.getAllQuestions(this.selectedTopicId || undefined).subscribe({
      next: (data) => {
        this.dataSource.data = data;
      },
      error: (error) => {
        console.error('Error fetching questions:', error);
      },
    });
  }

  onTopicChange() {
    this.loadQuestions();
  }

  openQuestionDialog(question?: Question) {
    const dialogRef = this.dialog.open(QuestionFormDialogComponent, {
      width: '700px',
      data: { 
        question, 
        topicId: question ? question.topicId._id || question.topicId : this.selectedTopicId,
        topics: this.topics
      },
      panelClass: 'custom-dialog-container',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadQuestions();
      }
    });
  }

  openImportDialog() {
    const selectedTopic = this.topics.find(t => t._id === this.selectedTopicId);

    const dialogRef = this.dialog.open(BulkImportDialogComponent, {
      width: '900px',
      data: { topic: selectedTopic, topics: this.topics },
      disableClose: true
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadQuestions();
      }
    });
  }

  deleteQuestion(question: Question) {
    this.alertService.confirmDelete(`la pregunta`).then((confirmed: boolean) => {
      if (confirmed) {
        this.questionsService.deleteQuestion(question._id).subscribe({
          next: () => {
            this.alertService.successToast('Pregunta eliminada con éxito');
            this.loadQuestions();
            this.selection.clear();
          },
          error: (err: any) => this.alertService.errorAlert('Error', err.error?.message || 'Error al eliminar'),
        });
      }
    });
  }

  deleteSelected() {
    if (this.selection.selected.length === 0) return;
    this.alertService.confirmDelete(`${this.selection.selected.length} preguntas seleccionadas`).then((confirmed: boolean) => {
      if (confirmed) {
        const ids = this.selection.selected.map(q => q._id);
        this.questionsService.deleteBulk(ids).subscribe({
          next: () => {
            this.alertService.successToast('Preguntas eliminadas con éxito');
            this.selection.clear();
            this.loadQuestions();
          },
          error: (err: any) => this.alertService.errorAlert('Error', err.error?.message || 'Error al eliminar'),
        });
      }
    });
  }

  async updatePointsSelected() {
    if (this.selection.selected.length === 0) return;
    const { value: points } = await Swal.fire({
      title: 'Actualizar Puntaje',
      input: 'number',
      inputLabel: 'Nuevo puntaje para las preguntas seleccionadas',
      inputPlaceholder: 'Ej. 5',
      showCancelButton: true,
      confirmButtonText: 'Actualizar',
      cancelButtonText: 'Cancelar',
      inputValidator: (value) => {
        if (!value || isNaN(Number(value)) || Number(value) < 0) {
          return 'Debes ingresar un número válido';
        }
        return null;
      }
    });

    if (points) {
      const ids = this.selection.selected.map(q => q._id);
      this.questionsService.updateBulkPoints(ids, Number(points)).subscribe({
        next: () => {
          this.alertService.successToast('Puntajes actualizados con éxito');
          this.selection.clear();
          this.loadQuestions();
        },
        error: (err: any) => this.alertService.errorAlert('Error', err.error?.message || 'Error al actualizar puntajes'),
      });
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
