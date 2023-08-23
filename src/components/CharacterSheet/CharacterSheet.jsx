import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCharacterById } from '../../supabase';
import { calculateModifier } from '../../utils/utils';

const CharacterSheet = () => {
  const { characterId } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacterData = async () => {
      try {
        const characterData = await fetchCharacterById(characterId);
        setCharacter(characterData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching character:', error);
        setLoading(false);
      }
    };

    fetchCharacterData();
  }, [characterId]);

  if (loading) {
    return <div>Loading character data...</div>;
  }

  if (!character) {
    return <div>Error fetching character data</div>;
  }

  return (
    <div className='character-sheet-container'>
      {console.log(character)}
      {/* Render the character sheet UI using the character data */}
      {/* Example: */}
      <div className='character-sheet__title'>
      <h1>Character Sheet</h1>
      </div>
      <div className='character-sheet__information'>
        <h2>{character.name}</h2>
        <p>Level: {character.level}</p>
        <p>Class: {character.classType}</p>
        <p>Race: {character.race}</p>
        <p>Hit Points: {character.hitPoints}</p>
      </div>
      <div className='character-sheet__stats'>
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
      </div>

      {/* Display other character information */}
    </div>
  );
};

export default CharacterSheet;
