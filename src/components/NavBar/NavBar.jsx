import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" activeClassName="active" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/characters" activeClassName="active">
            Characters
          </NavLink>
        </li>
        <li>
          <NavLink to="/combat-tracker" activeClassName="active">
            Combat Tracker
          </NavLink>
        </li>
        <li>
          <span>Create</span>
          <ul>
            <li>
              <NavLink to="/create/character" activeClassName="active">
                Create Character
              </NavLink>
            </li>
            <li>
              <NavLink to="/create/monster" activeClassName="active">
                Create Monster
              </NavLink>
            </li>
            <li>
              <NavLink to="/create/npc" activeClassName="active">
                Create NPC
              </NavLink>
            </li>
            <li>
              <NavLink to="/create/armor" activeClassName="active">
                Create Armor
              </NavLink>
            </li>
            <li>
              <NavLink to="/create/weapon" activeClassName="active">
                Create Weapon
              </NavLink>
            </li>
            <li>
              <NavLink to="/create/spell" activeClassName="active">
                Create Spell
              </NavLink>
            </li>
            <li>
              <NavLink to="/create/item" activeClassName="active">
                Create Item
              </NavLink>
            </li>
            <li>
              <NavLink to="/create/quest" activeClassName="active">
                Create Quest
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <span>Edit</span>
          <ul>
            <li>
              <NavLink to="/edit/character" activeClassName="active">
                Edit Character
              </NavLink>
            </li>
            <li>
              <NavLink to="/edit/monster" activeClassName="active">
                Edit Monster
              </NavLink>
            </li>
            <li>
              <NavLink to="/edit/npc" activeClassName="active">
                Edit NPC
              </NavLink>
            </li>
            <li>
              <NavLink to="/edit/armor" activeClassName="active">
                Edit Armor
              </NavLink>
            </li>
            <li>
              <NavLink to="/edit/weapon" activeClassName="active">
                Edit Weapon
              </NavLink>
            </li>
            <li>
              <NavLink to="/edit/spell" activeClassName="active">
                Edit Spell
              </NavLink>
            </li>
            <li>
              <NavLink to="/edit/item" activeClassName="active">
                Edit Item
              </NavLink>
            </li>
            <li>
              <NavLink to="/edit/quest" activeClassName="active">
                Edit Quest
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink to="/dice-roller" activeClassName="active">
            Dice Roller
          </NavLink>
        </li>
        <li>
          <NavLink to="/initiative-tracker" activeClassName="active">
            Initiative Tracker
          </NavLink>
        </li>
        <li>
          <NavLink to="/npc-generator" activeClassName="active">
            NPC Generator
          </NavLink>
        </li>
        <li>
          <NavLink to="/search" activeClassName="active">
            Search
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" activeClassName="active">
            Login
          </NavLink>
        </li>
        <li>
            <button>Sign In</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
