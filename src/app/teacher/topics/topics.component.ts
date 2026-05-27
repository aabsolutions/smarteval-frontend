import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
import { FeatherIconsComponent } from '@shared/components/feather-icons/feather-icons.component';
import { TopicsService, Topic } from './topics.service';
import { TopicFormDialogComponent } from './dialogs/topic-form/topic-form.component';
import { MatInputModule } from '@angular/material/input';
import { AlertService } from '@core/services/alert.service';

@Component({
  selector: 'app-topics',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    BreadcrumbComponent,
    FeatherIconsComponent,
    MatInputModule
  ],
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss'],
})
export class TopicsComponent implements OnInit {
  breadscrums = [
    {
      title: 'Gestión de Temas',
      items: ['Profesor'],
      active: 'Temas',
    },
  ];

  displayedColumns: string[] = ['name', 'description', 'actions'];
  dataSource = new MatTableDataSource<Topic>([]);
  
  private topicsService = inject(TopicsService);
  public dialog = inject(MatDialog);
  private alertService = inject(AlertService);

  ngOnInit(): void {
    this.loadTopics();
  }

  loadTopics() {
    this.topicsService.getAllTopics().subscribe({
      next: (data) => {
        this.dataSource.data = data;
      },
      error: (error) => {
        console.error('Error fetching topics:', error);
      },
    });
  }

  openTopicDialog(topic?: Topic) {
    const dialogRef = this.dialog.open(TopicFormDialogComponent, {
      width: '600px',
      data: { topic },
      panelClass: 'custom-dialog-container',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadTopics();
      }
    });
  }

  deleteTopic(topic: Topic) {
    this.alertService.confirmDelete(`el tema ${topic.name}`).then((confirmed: boolean) => {
      if (confirmed) {
        this.topicsService.deleteTopic(topic._id).subscribe({
          next: () => {
            this.alertService.successToast('Tema eliminado con éxito');
            this.loadTopics();
          },
          error: (err: any) => this.alertService.errorAlert('Error', err.error?.message || 'Error al eliminar tema'),
        });
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
