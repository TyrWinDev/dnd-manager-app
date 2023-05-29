import React from 'react';
import CharacterForm from '../../CharacterForm/CharacterForm';

const CreateCharacter = () => {
  return (
    <div className="max-w-md mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Create Character</h1>
      <CharacterForm />
    </div>
  );
};

export default CreateCharacter;
