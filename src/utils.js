export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const setObjectKeysToValue = (object, value) => {
  return Object.keys(object).reduce((curr, key) => {
    return {
      ...curr,
      [key]: value,
    };
  }, {});
};
