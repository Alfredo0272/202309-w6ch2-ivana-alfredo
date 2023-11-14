import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './../store/store';
import { ApiRepo } from '../services/api.repo';
import * as ac from '../slice/characters.slice';
import { useMemo, useCallback } from 'react';

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

  // const eraseCharacters = useCallback(async (id: Character['id']) => {
  //   try {
  //      await repo.eraseCharacters();
  //     dispatch(ac.erase(loadedCharacters.filter((item) => item.id === id )));
  //   } catch (error) {
  //     console.error((error as Error).message);
  //   }
  // }, [dispatch, repo]);
  return {
    loadCharacters,
    // eraseCharacters,
    characters,
  };
}
