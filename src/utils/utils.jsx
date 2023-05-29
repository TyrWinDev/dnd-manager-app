export const calculateModifier = (value) => {
    if (!value) {
      return '';
    }

    const modifier = Math.floor((value - 10) / 2);
    return modifier >= 0 ? `+${modifier}` : modifier;
  };
