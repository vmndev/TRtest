export const getSearchResults = async (queryTerm) => {
  const result = await fetch(
    `https://trautocomplete.azurewebsites.net/api/Autocomplete/GetAutocomplete?name=${queryTerm}`
  );
  return result.json();
};
