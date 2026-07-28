import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentAssessmentsService } from '../services/student-assessments.service';

interface Flashcard {
  questionId: string;
  statement: string;
  options?: string[];
  correctAnswers: string[];
  imageUrl?: string;
  type: string;
  colorIndex?: number;
  matchingRightOptions?: string[];
}

@Component({
  selector: 'app-flashcards-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flashcards-player.component.html',
  styleUrls: ['./flashcards-player.component.scss']
})
export class FlashcardsPlayerComponent implements OnInit, OnDestroy {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private assessmentsService = inject(StudentAssessmentsService);

  assessmentId: string | null = null;
  cards: Flashcard[] = [];
  isFlipped = false;
  isLoading = true;
  isFinished = false;
  timeIsUp = false;
  timeRemaining = '';
  private timerInterval: any;
  private sessionStartTime: number = 0;
  private timeReported: boolean = false;

  ngOnInit() {
    this.sessionStartTime = Date.now();
    this.assessmentId = this.route.snapshot.paramMap.get('id');
    if (this.assessmentId) {
      this.loadFlashcards(this.assessmentId);
    }
  }

  ngOnDestroy() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
    this.reportTime();
  }

  private reportTime() {
    if (this.timeReported || !this.assessmentId || this.sessionStartTime === 0) return;
    this.timeReported = true;
    const seconds = Math.floor((Date.now() - this.sessionStartTime) / 1000);
    if (seconds > 0) {
      this.assessmentsService.trackFlashcardTime(this.assessmentId, seconds).subscribe({
        error: (err) => console.error('Error reporting flashcard time', err)
      });
    }
  }

  loadFlashcards(id: string) {
    this.isLoading = true;
    this.assessmentsService.getFlashcards(id).subscribe({
      next: (data) => {
        this.cards = (data.questions || []).map((q: any, idx: number) => {
          q.colorIndex = idx % 5;
          if (q.type === 'matching') {
            q.matchingRightOptions = [...(q.correctAnswers || [])].sort(() => 0.5 - Math.random());
          }
          return q;
        });
        this.isLoading = false;
        if (this.cards.length === 0) {
          this.isFinished = true;
        } else if (data.flashcardsTimeLimitMinutes > 0) {
          this.startTimer(data.flashcardsTimeLimitMinutes);
        }
      },
      error: (err) => {
        console.error('Error fetching flashcards', err);
        this.router.navigate(['/student/assessments']);
      }
    });
  }

  startTimer(minutes: number) {
    const endTime = Date.now() + minutes * 60000;
    this.updateTimerDisplay(endTime);

    this.timerInterval = setInterval(() => {
      this.updateTimerDisplay(endTime);
    }, 1000);
  }

  updateTimerDisplay(endTime: number) {
    const diff = endTime - Date.now();
    if (diff <= 0) {
      clearInterval(this.timerInterval);
      this.timeRemaining = '00:00';
      this.timeIsUp = true;
      this.isFinished = true;
      return;
    }

    const totalSeconds = Math.floor(diff / 1000);
    const m = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
    const s = (totalSeconds % 60).toString().padStart(2, '0');
    this.timeRemaining = `${m}:${s}`;
  }

  animatingOut: 'left' | 'right' | null = null;

  flipCard() {
    if (this.animatingOut || this.timeIsUp) return;
    this.isFlipped = !this.isFlipped;
  }

  markKnown() {
    if (this.cards.length > 0 && !this.animatingOut && !this.timeIsUp) {
      this.animatingOut = 'right';
      setTimeout(() => {
        this.cards.shift();
        this.nextCard();
        this.animatingOut = null;
      }, 400);
    }
  }

  markUnknown() {
    if (this.cards.length > 0 && !this.animatingOut && !this.timeIsUp) {
      this.animatingOut = 'left';
      setTimeout(() => {
        const current = this.cards.shift()!;
        this.cards.push(current);
        this.nextCard();
        this.animatingOut = null;
      }, 400);
    }
  }

  private nextCard() {
    this.isFlipped = false;
    if (this.cards.length === 0) {
      this.isFinished = true;
    }
  }

  returnToList() {
    this.router.navigate(['/student/assessments']);
  }
}
