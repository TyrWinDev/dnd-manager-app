import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Login from './components/Auth/Login/Login';
import Characters from './components/Characters/Characters.jsx';
import CharacterSheet from './components/CharacterSheet/CharacterSheet';
import CombatTracker from './components/CombatTracker/CombatTracker';
import CreateCharacter from './components/CreateCharacter/CreateCharacter';
import DiceRoller from './components/DiceRoller/DiceRoller';
import EditCharacter from './components/EditCharacter/EditCharacter';
import Home from './components/Home/Home';
import InitiativeTracker from './components/InitiativeTracker/InitiativeTracker';
import NPCGenerator from './components/NpcGenerator/NPCGenerator';
import Search from './components/Search/Search';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/login" element={<Login />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/character-sheet/:id" element={<CharacterSheet />} />
        <Route path="/combat-tracker" element={<CombatTracker />} />
        <Route path="/create-character" element={<CreateCharacter />} />
        <Route path="/dice-roller" element={<DiceRoller />} />
        <Route path="/edit-character/:id" element={<EditCharacter />} />
        <Route path="/initiative-tracker" element={<InitiativeTracker />} />
        <Route path="/npc-generator" element={<NPCGenerator />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;
