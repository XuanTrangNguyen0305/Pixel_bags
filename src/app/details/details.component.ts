import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BagsService } from '../bags.service';
import { Bags } from '../bags';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article>
      <section>
        <h1>{{ Bags?.name }}</h1>
        <img [src]="Bags?.photo" />
        <section>
          <p>{{ Bags?.description }}</p>
        </section>
        <button>In Cart</button>
      </section>
    </article>
  `,
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  BagsService = inject(BagsService);
  Bags: Bags | undefined;
  constructor() {
    const bagsId = Number(this.route.snapshot.params['id']);
    this.Bags = this.BagsService.getBagsbyId(bagsId);
  }
}
