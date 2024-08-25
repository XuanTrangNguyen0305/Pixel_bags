import { Component, Input } from '@angular/core';
import { Bags } from '../bags';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-bags',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section *ngIf="bags">
      <h1>{{ bags.name }}</h1>
      <img [src]="bags.photo" alt="{{ bags.name }}" />
      <a [routerLink]="['/details', bags.id]">Details</a>
    </section>
  `,
  styleUrls: ['./bags.component.scss'],
})
export class BagsComponent {
  @Input() bags!: Bags;
}
