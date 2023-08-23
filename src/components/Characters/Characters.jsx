import React, { useEffect, useState } from 'react';
import supabase, { fetchCharacters } from '../../supabase';
import { calculateModifier } from '../../utils/utils';
import { Link, useNavigate } from 'react-router-dom';

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();
  const [deleteCharacterId, setDeleteCharacterId] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);


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
    navigate('/create/character');
  };

  const handleEditCharacter = (character) => {
    navigate(`/edit/character/${character.id}`);
    console.log(character);
  };

  const handleDelete = (id) => {
    setDeleteCharacterId(id);
    setShowDeleteModal(true); // Show the delete modal
  };

  const confirmDelete = async () => {
    try {
      // Send a DELETE request to the Supabase API to delete the character
      const { error } = await supabase.from('characters').delete().eq('id', deleteCharacterId);
  
      if (error) {
        console.error('Failed to delete character:', error);
      } else {
        console.log('Character deleted successfully');
        // Update the characters state after deletion
        setCharacters(characters.filter((character) => character.id !== deleteCharacterId));
        setShowDeleteModal(false); // Hide the delete modal
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  const handleCharacterClick = (character) => {
    navigate(`/characters/${character.id}`);
  };

  return (
    <div>
      <h2>Characters</h2>
      <button onClick={handleCreateCharacter}>Create New Character</button>
      {characters.map((character) => (
        <div key={character.id}>
          <Link to={`/characters/${character.id}`} onClick={() => handleCharacterClick(character)}>
            <h3>{character.name}</h3>
          </Link>
          <p>Race: {character.race}</p>
          <p>Class: {character.classType}</p>
          <p>Level: {character.level}</p>
          <p>Hit Points: {character.hitPoints}</p>
          <p>
            Strength: {character.strength}(
            {calculateModifier(character.strength)})
          </p>
          <p>
            Dexterity: {character.dexterity}(
            {calculateModifier(character.dexterity)})
          </p>
          <p>
            Constitution: {character.constitution}(
            {calculateModifier(character.constitution)})
          </p>
          <p>
            Intelligence: {character.intelligence}(
            {calculateModifier(character.intelligence)})
          </p>
          <p>
            Wisdom: {character.wisdom}({calculateModifier(character.wisdom)})
          </p>
          <p>
            Charisma: {character.charisma}(
            {calculateModifier(character.charisma)})
          </p>
          <button onClick={() => handleEditCharacter(character)}>
            Edit Character
          </button>
          <button onClick={() => handleDelete(character.id)}>
            Delete Character
          </button>
        </div>
      ))}
     {/* Delete Modal */}
     {showDeleteModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Confirm Deletion</h3>
            <p>Are you sure you want to delete this character?</p>
            <div>
              <button onClick={confirmDelete}>Yes</button>
              <button onClick={() => setShowDeleteModal(false)}>No</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Characters;
