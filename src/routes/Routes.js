// Routes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Auth from '../components/Auth/Auth';
import Login from '../components/Auth/Login/Login';
import Characters from '../components/Characters/Characters.jsx';
import CharacterSheet from '../components/CharacterSheet/CharacterSheet';
import CombatTracker from '../components/CombatTracker/CombatTracker';
import DiceRoller from '../components/DiceRoller/DiceRoller';
import Home from '../components/Home/Home';
import InitiativeTracker from '../components/InitiativeTracker/InitiativeTracker';
import NPCGenerator from '../components/NpcGenerator/NPCGenerator';
import Search from '../components/Search/Search';

import { CreateCharacter, CreateArmor, CreateItem, CreateMonster, CreateNPC, CreateQuest, CreateSpell, CreateWeapon } from '../components/Create';

import { EditArmor, EditCharacter, EditItem, EditMonster, EditNPC, EditQuest, EditSpell, EditWeapon } from '../components/Edit';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/login" element={<Login />} />
      <Route path="/characters" element={<Characters />} />
      <Route path="/character-sheet/:id" element={<CharacterSheet />} />
      <Route path="/combat-tracker" element={<CombatTracker />} />
      <Route path="/create/*" element={<CreateRoutes />} />
      <Route path="/dice-roller" element={<DiceRoller />} />
      <Route path="/edit/*" element={<EditRoutes />} />
      <Route path="/initiative-tracker" element={<InitiativeTracker />} />
      <Route path="/npc-generator" element={<NPCGenerator />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
};

const CreateRoutes = () => {
    return (
      <Routes>
        <Route path="/character" element={<CreateCharacter />} />
        <Route path="/monster" element={<CreateMonster />} />
        <Route path="/spell" element={<CreateSpell />} />
        <Route path="/armor" element={<CreateArmor />} />
        <Route path="/weapon" element={<CreateWeapon />} />
        <Route path="/item" element={<CreateItem />} />
        <Route path="/npc" element={<CreateNPC />} />
        <Route path="/quest" element={<CreateQuest />} />
      </Routes>
    );
  }
  
  const EditRoutes = () => {
    return (
      <Routes>
        <Route path="/character" element={<EditCharacter />} />
        <Route path="/monster" element={<EditMonster />} />
        <Route path="/spell" element={<EditSpell />} />
        <Route path="/armor" element={<EditArmor />} />
        <Route path="/weapon" element={<EditWeapon />} />
        <Route path="/item" element={<EditItem />} />
        <Route path="/npc" element={<EditNPC />} />
        <Route path="/quest" element={<EditQuest />} />
      </Routes>
    );
  }
  

export default AppRoutes;
