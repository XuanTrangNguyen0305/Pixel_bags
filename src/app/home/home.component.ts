// home.component.ts
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BagsComponent } from '../bags/bags.component';
import { DetailsComponent } from '../details/details.component';
import { Bags } from '../bags';
import { BagsService } from '../bags.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, BagsComponent, DetailsComponent],
  template: `
    <section>
      <form>
        <input placeholder="filter" />
        <button>Search</button>
      </form>
    </section>
    <section>
      <app-bags *ngFor="let bag of bagsList" [bags]="bag"></app-bags>
    </section>
  `,
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  bagsList: Bags[] = [];
  bagsService = inject(BagsService); // Inject the BagsService

  constructor() {
    // Fetch the bags list from the service
    this.bagsList = this.bagsService.getAllBags();
  }
}
