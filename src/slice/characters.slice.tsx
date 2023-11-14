import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Character } from '../models/characters';

type CharacterState = {
  characters: Character[];
};

const initialState: CharacterState = {
  characters: [],
};

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    load: (state: CharacterState, action: PayloadAction<Character[]>) => {
      state.characters = action.payload;
      return state;
    },
    erase: (state: CharacterState, action: PayloadAction<Character['id']>) => {
      const erasecharacter = state.characters.findIndex(
        (item) => item.id === action.payload
      );
      state.characters.splice(erasecharacter), 1;
      return;
    },
  },
});

export default charactersSlice.reducer;
export const { load, erase } = charactersSlice.actions;
