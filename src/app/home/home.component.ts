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
        <input
          placeholder="filter"
          #filter
          (keydown.enter)="filterResults($event, filter.value)"
        />
        <button type="button" (click)="filterResults(null, filter.value)">
          Search
        </button>
      </form>
    </section>
    <section>
      <app-bags *ngFor="let bag of filteredbagsList" [bags]="bag"></app-bags>
    </section>
  `,
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  bagsList: Bags[] = [];
  filteredbagsList: Bags[] = [];
  bagsService = inject(BagsService); // Inject the BagsService

  constructor() {
    // Fetch the bags list from the service
    this.bagsService.getAllBags().then((bagsList: Bags[]) => {
      this.bagsList = bagsList;
      this.filteredbagsList = bagsList;
    });
  }

  filterResults(event: Event | null, text: string) {
    if (event) {
      event.preventDefault();
    }
    if (!text) {
      this.filteredbagsList = this.bagsList;
    } else {
      this.filteredbagsList = this.bagsList.filter((bags) =>
        bags.name.toLowerCase().includes(text.toLowerCase())
      );
    }
  }
}
