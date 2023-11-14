import { Character } from '../models/characters';

export class ApiRepo {
  apiUrl = 'http://localhost:3000/characters';

  async getCharacters(): Promise<Character> {
    const response = await fetch(this.apiUrl);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    return response.json();
  }
}
