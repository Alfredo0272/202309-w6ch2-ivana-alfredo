import { useCallback, useEffect, useMemo, useState } from 'react';
import { Character } from '../../models/characters';
import { Card } from '../card/card';
import { ApiRepo } from '../../services/api.repo';

export function List() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const repo = useMemo(() => new ApiRepo(), []);

  const loadCharacters = useCallback(async () => {
    const loadedCharacters: Character[] = await repo.getCharacters();
    setCharacters(loadedCharacters);
  }, [repo]);

  useEffect(() => {
    loadCharacters();
  }, [loadCharacters]);

  return (
    <>
      {characters.length > 0 && (
        <ul className="characters-list row list-unstyled">
          {characters.map((item) => (
            <Card info={item} key={item.id}></Card>
          ))}
        </ul>
      )}
    </>
  );
}
