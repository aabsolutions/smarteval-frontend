import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgScrollbarModule } from 'ngx-scrollbar';

export interface Student {
  id: number | string;
  name: string;
  avatar?: string;
  score: number;
  rank: number;
  subject: string;
  improvement?: number;
  badges?: string[];
}

@Component({
  selector: 'app-top-students-card',
  templateUrl: './top-students-card.component.html',
  styleUrls: ['./top-students-card.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatTooltipModule,
    NgScrollbarModule,
  ],
})
export class TopStudentsCardComponent implements OnInit {
  @Input() title = 'Top Performing Students';
  @Input() students: Student[] = [];
  @Input() maxStudents = 5;
  @Input() scoreSuffix = '%';
  @Input() scoreFormat = '1.2-2';

  displayedColumns: string[] = [
    'rank',
    'student',
    'subject',
    'score',
    'badges',
  ];

  constructor() {}

  ngOnInit(): void {
    // Limit the number of students displayed
    this.students = (this.students || []).slice(0, this.maxStudents);
  }

  getBadgeTooltip(badge: string): string {
    const tooltips: { [key: string]: string } = {
      star: 'Outstanding Performance',
      trending_up: 'Significant Improvement',
      emoji_events: 'Top Achiever',
      military_tech: 'Excellence Award',
      workspace_premium: 'Premium Student',
      psychology: 'Critical Thinker',
      lightbulb: 'Creative Thinker',
      groups: 'Team Player',
      public: 'Community Contributor',
    };

    return tooltips[badge] || 'Achievement Badge';
  }

  getBadgeColor(badge: string): string {
    const colors: { [key: string]: string } = {
      star: 'gold',
      trending_up: 'green',
      emoji_events: 'purple',
      military_tech: 'blue',
      workspace_premium: 'teal',
      psychology: 'orange',
      lightbulb: 'amber',
      groups: 'indigo',
      public: 'brown',
    };

    return colors[badge] || 'primary';
  }

  getImprovementIcon(improvement: number | undefined): string {
    if (improvement === undefined) return '';
    if (improvement > 5) return 'trending_up';
    if (improvement > 0) return 'arrow_upward';
    if (improvement < 0) return 'arrow_downward';
    return 'remove';
  }

  getImprovementColor(improvement: number | undefined): string {
    if (improvement === undefined) return '';
    if (improvement > 0) return 'positive';
    if (improvement < 0) return 'negative';
    return '';
  }
}
