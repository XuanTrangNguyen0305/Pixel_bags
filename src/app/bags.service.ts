import { Injectable } from '@angular/core';
import { Bags } from './bags';

@Injectable({
  providedIn: 'root',
})
export class BagsService {
  url = 'http://localhost:3000/bags';

  constructor() {}

  async getAllBags(): Promise<Bags[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  async getBagsbyId(id: number): Promise<Bags | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? [];
  }
}
