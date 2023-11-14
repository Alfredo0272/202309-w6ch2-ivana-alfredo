import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './../store/store';
import { ApiRepo } from '../services/api.repo';
import * as ac from '../slice/characters.slice';
import { useMemo, useCallback } from 'react';
import { Character } from '../models/characters';

export function useCharacters() {
  const dispatch = useDispatch();
  const repo = useMemo(() => new ApiRepo(), []);
  const { characters } = useSelector(
    (state: RootState) => state.charactersState
  );

  const loadCharacters = useCallback(async () => {
    try {
      const loadedCharacters = await repo.getCharacters();
      dispatch(ac.load(loadedCharacters));
    } catch (error) {
      console.error((error as Error).message);
    }
  }, [dispatch, repo]);

  const updateCharacter = async (
    id: Character['id'],
    character: Partial<Character>
  ) => {
    try {
      const updatedNote = await repo.setCharacter(id, character);
      dispatch(ac.update(updatedNote));
    } catch (error) {
      console.log((error as Error).message);
    }
  };
  return {
    loadCharacters,
    updateCharacter,
    characters,
  };
}
