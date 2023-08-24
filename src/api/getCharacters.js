import axios from "axios";
const getCharacters = async ({url= "https://rickandmortyapi.com/api/character?page=1"}) => {
  try {
    const response = await axios.get(
        url
    );
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export default getCharacters;
