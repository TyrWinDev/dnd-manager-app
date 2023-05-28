import React, { useState } from 'react'
import supabase from '../../supabase';
import { v4 as uuidv4 } from 'uuid';

const CharacterForm = () => {
    const [name, setName] = useState('');
    const [classType, setClassType] = useState('');
    const [race, setRace] = useState('');
    const [level, setLevel] = useState(1);
    const [hitPoints, setHitPoints] = useState(0);
    const [strength, setStrength] = useState(0);
    const [dexterity, setDexterity] = useState(0);
    const [constitution, setConstitution] = useState(0);
    const [intelligence, setIntelligence] = useState(0);
    const [wisdom, setWisdom] = useState(0);
    const [charisma, setCharisma] = useState(0);
  
    const handleSubmit = async (event) => {
      event.preventDefault();

  // Create the "created at" timestamp
  const createdAt = new Date().toISOString();

  // Generate a unique ID for the character
  const characterId = uuidv4();
console.log(characterId); // Check the generated UUID value in the console


  // Create the character object
  const character = {
    id: characterId,
    createdAt,
    name,
    classType,
    race,
    level,
    hitPoints,
    strength,
    dexterity,
    constitution,
    intelligence,
    wisdom,
    charisma,
  };
  

      try {
        // Send a POST request to the Supabase API to create the character
        const { data, error } = await supabase.from('characters').insert([character]);
  
        if (error) {
          // Handle error response
          console.error('Failed to create character:', error);
        } else {
          // Character created successfully
          console.log('Character created:', data);
          // Reset the form
          setName('');
          setClassType('');
          setRace('');
          setLevel(1);
          setHitPoints(0);
          setStrength(0);
          setDexterity(0);
          setConstitution(0);
          setIntelligence(0);
          setWisdom(0);
          setCharisma(0);
        }
      } catch (error) {
        // Handle network or other errors
        console.error('Error:', error);
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <br />
        <label>
          Class:
          <input
            type="text"
            value={classType}
            onChange={(event) => setClassType(event.target.value)}
          />
        </label>
        <br />
        <label>
          Race:
          <input
            type="text"
            value={race}
            onChange={(event) => setRace(event.target.value)}
          />
        </label>
        <br />
        <label>
          Level:
          <input
            type="number"
            value={level}
            onChange={(event) => setLevel(parseInt(event.target.value))}
          />
        </label>
        <br />
        <label>
          Hit Points:
          <input
            type="number"
            value={hitPoints}
            onChange={(event) => setHitPoints(parseInt(event.target.value))}
          />
        </label>
        <br />
        <label>
          Strength:
          <input
            type="number"
            value={strength}
            onChange={(event) => setStrength(parseInt(event.target.value))}
          />
        </label>
        <br />
        <label>
          Dexterity:
          <input
            type="number"
            value={dexterity}
            onChange={(event) => setDexterity(parseInt(event.target.value))}
          />
        </label>
        <br />
        <label>
          Constitution:
          <input
            type="number"
            value={constitution}
            onChange={(event) => setConstitution(parseInt(event.target.value))}
          />
        </label>
        <br />
        <label>
          Intelligence:
          <input
            type="number"
            value={intelligence}
            onChange={(event) => setIntelligence(parseInt(event.target.value))}
          />
        </label>
        <br />
        <label>
          Wisdom:
          <input
            type="number"
            value={wisdom}
            onChange={(event) => setWisdom(parseInt(event.target.value))}
          />
        </label>
        <br />
        <label>
          Charisma:
          <input
            type="number"
            value={charisma}
            onChange={(event) => setCharisma(parseInt(event.target.value))}
          />
        </label>
        <br />
        <button type="submit">Create Character</button>
      </form>
    );
}

export default CharacterForm
