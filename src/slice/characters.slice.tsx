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
    update: (state: CharacterState, { payload }: PayloadAction<Character>) => {
      state.characters[
        state.characters.findIndex((item) => item.id === payload.id)
      ] = payload;
      return state;
    },
  },
});

export default charactersSlice.reducer;
export const { load, update } = charactersSlice.actions;
