import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import supabase from '../../../supabase';
import StatInput from '../../StatInput/StatInput';

const EditCharacter = () => {
  const { id } = useParams();

  const [character, setCharacter] = useState(null);
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
  const [apiClass, setApiClass] = useState([]);
  const [apiRace, setApiRace] = useState([]);
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedRace, setSelectedRace] = useState(null);


  useEffect(() => {
    async function fetchCharacterData() {
      // Fetch the character data based on the provided ID
      const { data, error } = await supabase
        .from('characters')
        .select()
        .eq('id', id)
        .single();

      if (error) {
        console.error('Failed to fetch character:', error);
      } else {
        setCharacter(data);
        setName(data.name);
        setClassType(data.classType);
        setRace(data.race);
        setLevel(data.level);
        setHitPoints(data.hitPoints);
        setStrength(data.strength);
        setDexterity(data.dexterity);
        setConstitution(data.constitution);
        setIntelligence(data.intelligence);
        setWisdom(data.wisdom);
        setCharisma(data.charisma);
      }
    }

    fetchCharacterData();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Update the character object with the modified values
    const updatedCharacter = {
      id: character.id,
      createdAt: character.createdAt,
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
      // Send a PATCH request to the Supabase API to update the character
      const { data, error } = await supabase
        .from('characters')
        .upsert([updatedCharacter]);

      if (error) {
        console.error('Failed to update character:', error);
      } else {
        console.log('Character updated:', data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {

    //Classes
    fetch('https://api.open5e.com/classes/')
    .then(response => response.json())
    .then(data => {
      const apiClasses = data.results.map(classItem => ({
        id: classItem.slug,
        name: classItem.name,
        description: classItem.desc,
        hitDice: classItem.hit_dice,
        hpAtFirstLevel: classItem.hp_at_1st_level,
        hpAtHigherLevels: classItem.hp_at_higher_levels,
        profArmor: classItem.prof_armor,
        profWeapons: classItem.prof_weapons,
        profTools: classItem.prof_tools,
        profSavingThrows: classItem.prof_saving_throws,
        profSkills: classItem.prof_skills,
        equipment: classItem.equipment,
        //Archetypes to be added in the future
      }));
      setApiClass(apiClasses);
    })
    .catch(error => {
      console.error('Failed to fetch class types:', error);
    });

    //Races
    fetch('https://api.open5e.com/races/')
    .then(response => response.json())
    .then(data => {
      const apiRaces = data.results.map(raceItem => ({
        id: raceItem.slug,
        name: raceItem.name,
        description: raceItem.desc,
        asiDescription: raceItem.asi_desc,
        age: raceItem.age,
        alignment: raceItem.alignment,
        size: raceItem.size,
        speed: raceItem.speed_desc,
        languages: raceItem.languages,
        vision: raceItem.vision,
        //Subraces to be added in the future
      }));
      setApiRace(apiRaces);
    })
    .catch(error => {
      console.error('Failed to fetch races:', error);
    });
  }, []);

  const handleClassChange = (event) => {
    const selectedClass = event.target.value;
    setClassType(selectedClass);
  };

const handleRaceChange = (event) => {
    const selectedRace = event.target.value;
    setRace(selectedRace);
 }

 useEffect(() => {
   const selectedClass = apiClass.find((classItem) => classItem.id === classType);
   setSelectedClass(selectedClass);
 }, [apiClass, classType]);
 

 useEffect(() => {
    const selectedRace = apiRace.find((raceItem) => raceItem.id === race);
    setSelectedRace(selectedRace);
 }, [apiRace, race]);

  return (
    <div>
      {character ? (
        <form onSubmit={handleSubmit}>
          {/* Render the form inputs */}
          <label className="block mb-2">
          Name:
          <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="border border-gray-300 p-2 w-full mt-1"
        />
        </label>
        <br />
        <label>
        Class:
        <select value={classType} onChange={handleClassChange}>
            <option value="">Select Class</option>
            {Array.isArray(apiClass) &&
            apiClass.map((classItem, index) => (
                <option key={index} value={classItem.id}>
                {classItem.name}
                </option>
            ))}
        </select>
        </label>
        {selectedClass && 
        <div>
            <label>Class Description</label>
            <p>{selectedClass.description}</p>
            <ul>
                <li>Hit dice: {selectedClass.hitDice}</li>
                <li>HP at 1st level: {selectedClass.hpAtFirstLevel}</li>
                <li>HP at higher levels: {selectedClass.hpAtHigherLevels}</li>
                <li>Armor proficiency: {selectedClass.profArmor}</li>
                <li>Weapon proficiency: {selectedClass.profWeapons}</li>
                <li>Tools proficiency: {selectedClass.profTools}</li>
                <li>Saving Throws proficiency: {selectedClass.profSavingThrows}</li>
                <li>Skills proficiency: {selectedClass.profSkills}</li>
                <li>Equipment: {selectedClass.equipment}</li>
            </ul>
        </div>
        }
        <br />
        <label>
          Race:
          <select value={race} onChange={handleRaceChange}>
            <option value="">Select Race</option>
            {Array.isArray(apiRace) &&
                apiRace.map((raceItem) => (
                <option key={raceItem.id} value={raceItem.id}>
                    {raceItem.name}
                </option>
                ))}
            </select>

        </label>
        {selectedRace && 
        <div>
            <label>Race Description</label>
            <p>{selectedRace.description}</p>
            <ul>
                <li>{selectedRace.asiDescription}</li>
                <li>{selectedRace.age}</li>
                <li>{selectedRace.alignment}</li>
                <li>{selectedRace.size}</li>
                <li>{selectedRace.speed}</li>
                <li>{selectedRace.languages}</li>
                <li>{selectedRace.vision}</li>
            </ul>
        </div>
        }
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
        <div className='stats-container'>
            <StatInput
            label="Strength"
            value={strength}
            onChange={setStrength}
            />
        <br />
            <StatInput
            label="Dexterity"
            value={dexterity}
            onChange={setDexterity}
            />
        <br />
             <StatInput
            label="Constitution"
            value={constitution}
            onChange={setConstitution}
            />
        <br />
            <StatInput
            label="Intelligence"
            value={intelligence}
            onChange={setIntelligence}
            />
        <br />
           <StatInput
            label="Wisdom"
            value={wisdom}
            onChange={setWisdom}
            />
        <br />
          <StatInput
            label="Charisma"
            value={charisma}
            onChange={setCharisma}
            />
        </div>
        
        <br />
          <button type="submit">Update Character</button>
        </form>
      ) : (
        <p>Loading character...</p>
      )}
    </div>
  );
};

export default EditCharacter;
