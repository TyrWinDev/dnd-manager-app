import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;;

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

// Fetch all characters
export const fetchCharacters = async () => {
  const { data, error } = await supabase.from('characters').select('*');
  if (error) {
    console.error(error);
    return null;
  }
  return data;
};

// Fetch a character by ID
export const fetchCharacterById = async (id) => {
  const { data, error } = await supabase
    .from('characters')
    .select('*')
    .eq('id', id)
    .single();
  if (error) {
    console.error(error);
    return null;
  }
  return data;
};

// Fetch all spells
export const fetchSpells = async () => {
  const { data, error } = await supabase.from('spells').select('*');
  if (error) {
    console.error(error);
    return null;
  }
  return data;
};

// Fetch all weapons
export const fetchWeapons = async () => {
  const { data, error } = await supabase.from('weapons').select('*');
  if (error) {
    console.error(error);
    return null;
  }
  return data;
};

// Fetch all armor
export const fetchArmor = async () => {
  const { data, error } = await supabase.from('armor').select('*');
  if (error) {
    console.error(error);
    return null;
  }
  return data;
};

// Fetch all items
export const fetchItems = async () => {
  const { data, error } = await supabase.from('items').select('*');
  if (error) {
    console.error(error);
    return null;
  }
  return data;
};

// Fetch all NPCs
export const fetchNPCs = async () => {
  const { data, error } = await supabase.from('npcs').select('*');
  if (error) {
    console.error(error);
    return null;
  }
  return data;
};


