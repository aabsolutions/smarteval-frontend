import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
import { Group, GroupsService } from '../../../../admin/groups/groups.service';
import { WordCloudApiService } from '../../services/word-cloud-api.service';
import { AppearanceOptions, CreateWordCloudPayload } from '../../models/word-cloud.model';

/** Alta y edición. Va dentro del layout con sidebar. */
@Component({
  selector: 'app-word-cloud-creator',
  standalone: true,
  imports: [CommonModule, FormsModule, BreadcrumbComponent],
  templateUrl: './word-cloud-creator.component.html',
  styleUrls: ['./word-cloud-creator.component.css'],
})
export class WordCloudCreatorComponent implements OnInit {
  private api = inject(WordCloudApiService);
  private groupsService = inject(GroupsService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  editingId: string | null = null;
  saving = false;
  error: string | null = null;

  groups: Group[] = [];
  selectedGroupIds = new Set<string>();
  options: AppearanceOptions | null = null;

  model: CreateWordCloudPayload = {
    title: '',
    prompt: '',
    description: '',
    explanationRequired: false,
    maxWords: 150,
    appearance: {
      backgroundType: 'color',
      backgroundColor: '#F3F2FF',
      backgroundDim: 0,
      fontFamily: 'Poppins',
      baseFontSize: 44,
      paletteKey: 'aula',
    },
  };

  ngOnInit() {
    this.groupsService.getAllGroups().subscribe({
      next: (groups) => (this.groups = groups),
      error: () => (this.groups = []),
    });

    this.api.getAppearanceOptions().subscribe({
      next: (options) => (this.options = options),
      error: () => (this.options = null),
    });

    const id = this.route.snapshot.queryParamMap.get('id');
    if (id) this.loadExisting(id);
  }

  private loadExisting(id: string) {
    this.api.getSession(id).subscribe({
      next: (session) => {
        this.editingId = id;
        this.model = {
          title: session.title,
          prompt: session.prompt,
          description: session.description ?? '',
          explanationRequired: session.explanationRequired,
          maxWords: session.maxWords,
          appearance: { ...session.appearance },
        };
        this.selectedGroupIds = new Set(
          (session.groupIds ?? []).map((g: any) => (typeof g === 'string' ? g : g._id)),
        );
      },
      error: () => (this.error = 'No se pudo cargar la nube'),
    });
  }

  toggleGroup(groupId: string) {
    if (this.selectedGroupIds.has(groupId)) this.selectedGroupIds.delete(groupId);
    else this.selectedGroupIds.add(groupId);
  }

  isGroupSelected(groupId: string): boolean {
    return this.selectedGroupIds.has(groupId);
  }

  get isValid(): boolean {
    return this.model.title.trim().length > 0 && this.model.prompt.trim().length > 0;
  }

  save() {
    if (!this.isValid || this.saving) return;

    this.saving = true;
    this.error = null;

    const payload: CreateWordCloudPayload = {
      ...this.model,
      title: this.model.title.trim(),
      prompt: this.model.prompt.trim(),
      groupIds: [...this.selectedGroupIds],
    };

    const request = this.editingId
      ? this.api.update(this.editingId, payload)
      : this.api.create(payload);

    request.subscribe({
      next: () => {
        this.saving = false;
        this.router.navigate(['/teacher/word-clouds']);
      },
      error: (err) => {
        this.saving = false;
        this.error = err?.error?.message ?? 'No se pudo guardar la nube';
      },
    });
  }

  cancel() {
    this.router.navigate(['/teacher/word-clouds']);
  }
}
