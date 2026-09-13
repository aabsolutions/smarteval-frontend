import { Component, OnDestroy, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@core';
import { StudentWordCloudService } from '../../services/student-word-cloud.service';
import { WordCloudCanvasComponent } from '../../components/word-cloud-canvas/word-cloud-canvas.component';
import { buildWatermark, exportCloudAsJpg } from '../../engine/word-cloud-export';

/**
 * Pantalla del alumno, full-screen (sin sidebar): PIN → formulario → nube en vivo.
 * Solo consume payloads públicos; nunca ve explicaciones ajenas.
 */
@Component({
  selector: 'app-word-cloud-student',
  standalone: true,
  imports: [CommonModule, FormsModule, WordCloudCanvasComponent],
  templateUrl: './word-cloud-student.component.html',
  styleUrls: ['./word-cloud-student.component.css'],
})
export class WordCloudStudentComponent implements OnDestroy {
  @ViewChild(WordCloudCanvasComponent) canvas?: WordCloudCanvasComponent;

  private service = inject(StudentWordCloudService);
  private authService = inject(AuthService);
  private router = inject(Router);

  /** Una casilla por dígito, espejando el código que se ve en el proyector. */
  pinDigits: string[] = ['', '', '', '', '', ''];
  word = '';
  explanation = '';
  editing = false;
  downloading = false;
  downloadError: string | null = null;

  get pin(): string {
    return this.pinDigits.join('');
  }

  get pinComplete(): boolean {
    return /^\d{6}$/.test(this.pin);
  }

  /** Avanza sola al escribir y retrocede al borrar: se tipea sin mirar. */
  onPinInput(index: number, event: Event) {
    const input = event.target as HTMLInputElement;
    const digits = input.value.replace(/\D/g, '');

    if (digits.length > 1) {
      // Pegaron el PIN completo: lo repartimos entre las casillas
      digits
        .slice(0, 6 - index)
        .split('')
        .forEach((d, offset) => (this.pinDigits[index + offset] = d));
      input.value = this.pinDigits[index];
      this.focusDigit(Math.min(5, index + digits.length - 1));
      if (this.pinComplete) this.join();
      return;
    }

    this.pinDigits[index] = digits;
    input.value = digits;

    if (digits && index < 5) this.focusDigit(index + 1);
    if (this.pinComplete) this.join();
  }

  onPinKeydown(index: number, event: KeyboardEvent) {
    if (event.key === 'Backspace' && !this.pinDigits[index] && index > 0) {
      this.focusDigit(index - 1);
    }
    if (event.key === 'ArrowLeft' && index > 0) this.focusDigit(index - 1);
    if (event.key === 'ArrowRight' && index < 5) this.focusDigit(index + 1);
  }

  private focusDigit(index: number) {
    const el = document.getElementById(`wcs-digit-${index}`) as HTMLInputElement | null;
    el?.focus();
    el?.select();
  }

  get state() {
    return this.service.state();
  }

  get canEditNow(): boolean {
    return this.state.canSubmit;
  }

  /** Ya participó y no está editando: mostramos la nube, no el formulario. */
  get showForm(): boolean {
    return this.canEditNow && (!this.state.myEntry || this.editing);
  }

  get canDownload(): boolean {
    return !!this.state.cloud && this.state.cloud.words.length > 0;
  }

  join() {
    if (!this.pinComplete) return;
    this.service.join(this.pin);
  }

  submit() {
    const word = this.word.trim();
    if (!word) return;
    if (this.state.explanationRequired && !this.explanation.trim()) return;

    this.service.submit(word, this.explanation.trim());
    this.editing = false;
  }

  startEditing() {
    this.editing = true;
    this.word = this.state.myEntry?.displayText ?? '';
    this.explanation = this.state.myEntry?.explanation ?? '';
  }

  cancelEditing() {
    this.editing = false;
  }

  leave() {
    this.service.leave();
    this.router.navigate(['/student/dashboard']);
  }

  async download() {
    const state = this.state;
    if (!state.cloud || !state.appearance) return;

    this.downloading = true;
    this.downloadError = null;

    try {
      const user: any = this.authService.currentUserValue ?? {};
      const studentName = [user.firstName, user.lastName].filter(Boolean).join(' ') || user.name;

      await exportCloudAsJpg({
        words: state.cloud.words,
        maxCount: state.cloud.maxCount,
        layoutSeed: state.cloud.layoutSeed,
        appearance: state.appearance,
        watermark: buildWatermark({
          studentName,
          username: user.username,
          groupName: user.group?.name ?? user.groupName,
          prompt: state.prompt ?? '',
          // Del SERVIDOR, no de new Date(): el JPG del alumno y el del docente
          // tienen que decir exactamente lo mismo.
          finishedAtLabel: state.finishedAtLabel,
        }),
        fileName: `nube-${(state.title ?? 'palabras').replace(/\s+/g, '-').toLowerCase()}.jpg`,
      });
    } catch (err: any) {
      this.downloadError = err?.message ?? 'No se pudo generar la imagen';
    } finally {
      this.downloading = false;
    }
  }

  ngOnDestroy() {
    this.service.leave();
  }
}
