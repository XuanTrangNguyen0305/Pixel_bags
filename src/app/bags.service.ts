import { Injectable } from '@angular/core';
import { Bags } from './bags';

@Injectable({
  providedIn: 'root',
})
export class BagsService {
  protected bagsList: Bags[] = [
    {
      id: 1,
      name: 'Vintage Leather Backpack',
      photo: 'https://picsum.photos/seed/picsum/200/300',
      availability: true,
      description:
        'A stylish vintage leather backpack perfect for urban adventures.',
    },
    {
      id: 2,
      name: 'Eco-friendly Tote Bag',
      photo: 'https://picsum.photos/seed/picsum/200/300',
      availability: false,
      description:
        'A trendy, eco-friendly tote bag made from recycled materials.',
    },
    {
      id: 3,
      name: 'Classic Messenger Bag',
      photo: 'https://picsum.photos/seed/picsum/200/300',
      availability: true,
      description:
        'A classic messenger bag with ample space for your daily essentials.',
    },
    {
      id: 4,
      name: 'Designer Handbag',
      photo: 'https://picsum.photos/seed/picsum/200/300',
      availability: true,
      description:
        'A luxury designer handbag that elevates any outfit with its elegance.',
    },
    {
      id: 5,
      name: 'Minimalist Sling Bag',
      photo: 'https://picsum.photos/seed/picsum/200/300',
      availability: false,
      description: 'A sleek and minimalist sling bag ideal for quick outings.',
    },
    {
      id: 6,
      name: 'Sports Duffel Bag',
      photo: 'https://picsum.photos/seed/picsum/200/300',
      availability: true,
      description:
        'A spacious and durable duffel bag designed for sports and travel.',
    },
  ];

  constructor() {}

  getAllBags(): Bags[] {
    return this.bagsList;
  }

  getBagsbyId(id: number): Bags | undefined {
    return this.bagsList.find((bag) => bag.id === id);
  }
}
