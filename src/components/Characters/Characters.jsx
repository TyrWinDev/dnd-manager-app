import React, { useEffect, useState } from 'react';
import { fetchCharacters } from '../../supabase';
import { calculateModifier } from '../../utils/utils';
import {useNavigate} from 'react-router-dom';


const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchCharactersData() {
      const charactersData = await fetchCharacters();
      if (charactersData) {
        setCharacters(charactersData);
      }
    }
    fetchCharactersData();
  }, []);

  const handleCreateCharacter = () => { 
    navigate('/create-character')
  }

  const handleEditCharacter = () => { 
    console.log('Edit Character')
  }

  return (
    <div>
      <h2>Characters</h2>
      <button onClick={handleCreateCharacter}>Create New Character</button>
      {characters.map((character) => (
        <div key={character.id}>
          <h3>{character.name}</h3>
          <p>Race: {character.race}</p>
          <p>Class: {character.classType}</p>
          <p>Level: {character.level}</p>
          <p>Hit Points: {character.hitPoints}</p>
          <p>Strength: {character.strength}
          ({calculateModifier(character.strength)})
          </p>
          <p>Dexterity: {character.dexterity}
          ({calculateModifier(character.dexterity)})
          </p>
          <p>Constitution: {character.constitution}
          ({calculateModifier(character.constitution)})
          </p>
          <p>Intelligence: {character.intelligence}
          ({calculateModifier(character.intelligence)})
          </p>
          <p>Wisdom: {character.wisdom}
          ({calculateModifier(character.wisdom)})
          </p>
          <p>Charisma: {character.charisma}
          ({calculateModifier(character.charisma)})
          </p>
          <button onClick={handleEditCharacter}>Edit Character</button>
        </div>
      ))}
    </div>
  );
}

export default Characters