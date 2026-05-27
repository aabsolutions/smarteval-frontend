import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
import { AssessmentsService } from '../assessments.service';

@Component({
  selector: 'app-assessment-results',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatCardModule,
    MatProgressBarModule,
    MatTabsModule,
    BreadcrumbComponent
  ],
  templateUrl: './assessment-results.component.html',
  styleUrls: ['./assessment-results.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed, void', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
      transition('expanded <=> void', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ]),
  ],
})
export class AssessmentResultsComponent implements OnInit {
  breadscrums = [
    {
      title: 'Resultados',
      items: ['Exámenes'],
      active: 'Consolidado',
    },
  ];

  assessmentId: string = '';
  resultsData: any = null;
  analyticsData: any[] = [];
  
  displayedColumns: string[] = ['studentName', 'identifier', 'score', 'percentage', 'duration', 'status', 'warnings'];
  columnsToDisplayWithExpand = [...this.displayedColumns, 'expand'];
  expandedElement: any | null = null;
  dataSource = new MatTableDataSource<any>([]);

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private assessmentsService = inject(AssessmentsService);

  ngOnInit(): void {
    this.assessmentId = this.route.snapshot.paramMap.get('id') || '';
    if (this.assessmentId) {
      this.loadData();
    }
  }

  loadData() {
    this.assessmentsService.getResults(this.assessmentId).subscribe({
      next: (data) => {
        this.resultsData = data;
        this.dataSource.data = data.results;

        if (this.resultsData.assessment.isSimulator) {
          this.displayedColumns = ['studentName', 'identifier', 'email', 'attemptsCount'];
          this.columnsToDisplayWithExpand = [...this.displayedColumns];
        } else {
          this.assessmentsService.getAnalytics(this.assessmentId).subscribe({
            next: (analytics) => {
              this.analyticsData = analytics;
            },
            error: (err) => console.error('Error fetching analytics', err)
          });
        }
      },
      error: (err) => console.error('Error fetching results', err)
    });
  }

  exportExcel() {
    this.assessmentsService.exportExcel(this.assessmentId).subscribe({
      next: (blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `resultados_${this.assessmentId}.xlsx`;
        link.click();
        window.URL.revokeObjectURL(url);
      },
      error: (err) => console.error('Error downloading Excel', err)
    });
  }

  goBack() {
    this.router.navigate(['/teacher/assessments']);
  }

  getProgressBarColor(percentage: number): string {
    if (percentage >= 70) return 'primary'; // Verde/Azul
    if (percentage >= 40) return 'accent';  // Amarillo
    return 'warn';                          // Rojo
  }

  hasWarnings(element: any): boolean {
    if (element.outOfTime || element.isTimeout) return true;
    if (!element.antiCheatLog) return false;
    
    const log = element.antiCheatLog;
    return (log.tabSwitches > 0 || log.fullscreenExits > 0 || log.copyPasteAttempts > 0 || log.devtoolsAttempts > 0);
  }

  getWarningsTooltip(element: any): string {
    let msgs = [];
    if (element.outOfTime) msgs.push('Se excedió del tiempo límite.');
    if (element.isTimeout) msgs.push('Cierre automático por tiempo.');
    
    if (element.antiCheatLog) {
      const log = element.antiCheatLog;
      if (log.tabSwitches > 0) msgs.push(`${log.tabSwitches} cambios de pestaña.`);
      if (log.fullscreenExits > 0) msgs.push(`${log.fullscreenExits} salidas de fullscreen.`);
      if (log.copyPasteAttempts > 0) msgs.push(`${log.copyPasteAttempts} intentos de copiar/pegar.`);
      if (log.devtoolsAttempts > 0) msgs.push(`Intento de abrir devtools.`);
    }
    return msgs.join('\n');
  }
}
