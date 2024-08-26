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
      photo:
        'https://i.pinimg.com/564x/48/66/b1/4866b1fa67d1ca97de59f56f2fe15b2e.jpg',
      availability: true,
      description:
        'A stylish vintage leather backpack perfect for urban adventures.',
    },
    {
      id: 2,
      name: 'Eco-friendly Tote Bag',
      photo:
        'https://i.etsystatic.com/33699266/r/il/a47266/5256816007/il_794xN.5256816007_mscn.jpg',
      availability: false,
      description:
        'A trendy, eco-friendly tote bag made from recycled materials.',
    },
    {
      id: 3,
      name: 'Classic Messenger Bag',
      photo:
        'https://i.pinimg.com/564x/df/25/6a/df256a40c0f5bdced030825ea10117b5.jpg',
      availability: true,
      description:
        'A classic messenger bag with ample space for your daily essentials.',
    },
    {
      id: 4,
      name: 'Designer Handbag',
      photo:
        'https://i.pinimg.com/736x/16/4d/53/164d53fe85dbc000f938ffd5e89ac9af.jpg',
      availability: true,
      description:
        'A luxury designer handbag that elevates any outfit with its elegance.',
    },
    {
      id: 5,
      name: 'Minimalist Sling Bag',
      photo:
        'https://cartzz.com/cdn/shop/files/16322932071_1195068029.jpg?v=1718544197&width=823',
      availability: false,
      description: 'A sleek and minimalist sling bag ideal for quick outings.',
    },
    {
      id: 6,
      name: 'Sports Duffel Bag',
      photo:
        'https://i.pinimg.com/564x/af/f2/40/aff24076bf71aa20382d097c965acc7c.jpg',
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
