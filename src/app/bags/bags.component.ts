import { Component, Input } from '@angular/core';
import { Bags } from '../bags';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bags',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section *ngIf="bags">
      <h1>{{ bags.name }}</h1>
      <img [src]="bags.photo" alt="{{ bags.name }}" />
    </section>
  `,
  styleUrls: ['./bags.component.scss'],
})
export class BagsComponent {
  @Input() bags!: Bags;
}
