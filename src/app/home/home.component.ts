import { Component } from '@angular/core';
import { BagsComponent } from '../bags/bags.component';
import { CommonModule } from '@angular/common';
import { Bags } from '../bags';
import { DetailsComponent } from '../details/details.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, BagsComponent, DetailsComponent],
  template: `<section>
      <form>
        <input placeholder="filter" />
        <button>Search</button>
      </form>
    </section>
    <section>
      <app-bags *ngFor="let bags of bagsList" [bags]="bags"></app-bags>
    </section>`,
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  bagsList: Bags[] = [
    {
      id: 1,
      name: 'Explorer Backpack',
      photo: 'https://picsum.photos/seed/explorer-backpack/200/300',
      availability: true,
      description:
        'A rugged backpack designed for outdoor adventures, featuring multiple compartments and water-resistant material.',
    },
    {
      id: 2,
      name: 'Classic Leather Tote',
      photo: 'https://picsum.photos/seed/classic-leather-tote/200/300',
      availability: false,
      description:
        'A timeless leather tote bag with a spacious interior, perfect for everyday use or work.',
    },
    {
      id: 3,
      name: 'Urban Sling Bag',
      photo: 'https://picsum.photos/seed/urban-sling-bag/200/300',
      availability: true,
      description:
        'A compact sling bag ideal for city life, equipped with anti-theft features and an ergonomic design.',
    },
    {
      id: 4,
      name: 'Convertible Duffel',
      photo: 'https://picsum.photos/seed/convertible-duffel/200/300',
      availability: true,
      description:
        'A versatile duffel bag that can be carried as a backpack or a shoulder bag, with plenty of storage space.',
    },
    {
      id: 5,
      name: 'Eco-Friendly Shopper',
      photo: 'https://picsum.photos/seed/eco-friendly-shopper/200/300',
      availability: true,
      description:
        'An environmentally conscious shopping bag made from recycled materials, durable and stylish.',
    },
    {
      id: 6,
      name: 'Luxury Weekender',
      photo: 'https://picsum.photos/seed/luxury-weekender/200/300',
      availability: false,
      description:
        'A premium leather weekender bag with exquisite craftsmanship, perfect for short getaways.',
    },
    {
      id: 7,
      name: 'Tech Organizer Pouch',
      photo: 'https://picsum.photos/seed/tech-organizer-pouch/200/300',
      availability: true,
      description:
        'A compact pouch designed to keep your tech accessories organized, with multiple pockets and a sleek design.',
    },
  ];
}
