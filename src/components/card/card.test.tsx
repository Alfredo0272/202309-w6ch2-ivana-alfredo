import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Character } from '../../model/characters';
import { Card } from './card';

describe('Given Card component', () => {
  describe('When we instantiate', () => {
    const person: Character = {
      id: 1,
      isAlive: true,
      message: "You're all to die!",
      name: 'joffrey',
      family: 'Baratheon',
      age: 18,
      reignYears: 1,
      category: 'king',
      weapon: null,
      skillLevel: null,
      serveLevel: 0,
      adviseTo: null,
      servesTo: null,
    };

    beforeEach(() => {
      render(<Card info={person}></Card>);
    });

    test('Then it should be in the document', () => {
      const element = screen.getByRole('heading');
      expect(element).toBeInTheDocument();
    });

    test('Then it should render the card', () => {
      const element = screen.getByText('joffrey Baratheon');
      expect(element).toBeInTheDocument();
    });
  });
});
