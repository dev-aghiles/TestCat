import axios from "axios";

const API = "https://catfact.ninja/";
const APIIMAGE = "https://api.thecatapi.com/v1/images/search?breed_ids=";
export const fetcataData = async () => {
  let url = API + "breeds/";
  try {
    const response = await axios.get(url);
    const data = response.data;
    return data.data;
  } catch (error) {
    console.log("failed to fetch cats breeds");
    throw Error(error);
  }
};
export const fetchCatfact = async () => {
  let url = API + "fact/";
  try {
    const response = await axios.get(url);
    const data = response.data.fact;
    return data;
  } catch (error) {
    console.log("failed to fetch fact");
    throw Error(error);
  }
};

export const fetchCatImage = async (breed) => {
  function hasWhiteSpace(breed) {
    return /\s/g.test(breed);
  }
  let hasWhiteSpaceBool = hasWhiteSpace(breed);
  let breedCategory = hasWhiteSpaceBool
    ? breed.substr(0, 1) + breed.substr(breed.indexOf(" ") + 1, 3)
    : breed.substr(0, 4);
  let url = `${APIIMAGE}${breedCategory}`;
  try {
    const response = await axios.get(url);
    const data = response.data[0].url;
    return data;
  } catch (err) {
    console.log(err);
    return `https://cdn2.thecatapi.com/images/104.jpg`;
  }
};
