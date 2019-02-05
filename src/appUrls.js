// The meal db urls handled here
const baseUrl = () => {
  return 'https://www.themealdb.com/api/json/v1/1';
};
export const searchByName = (name) => {
  return `${baseUrl()}/search.php?s=${name}`;
};
