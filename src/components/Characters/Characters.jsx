import React, { useEffect, useState } from 'react';
import { fetchCharacters } from '../../supabase';


const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function fetchCharactersData() {
      const charactersData = await fetchCharacters();
      if (charactersData) {
        setCharacters(charactersData);
      }
    }
    fetchCharactersData();
  }, []);

  return (
    <div>
      <h2>Characters</h2>
      {characters.map((character) => (
        <div key={character.id}>
          <h3>{character.name}</h3>
          <p>Race: {character.race}</p>
          <p>Class: {character.class}</p>
          {/* Add more character details as needed */}
        </div>
      ))}
    </div>
  );
}

export default Characters