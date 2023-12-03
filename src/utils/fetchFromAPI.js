import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";
// 'X-RapidAPI-Key': '16612acf58mshfcf648c150d07b7p1e8935jsna3486227bc85'

const options = {
  params: {
    maxResults: "50"
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com"
  }
};

export const fetchFromAPI = async (url) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/${url}`, options);
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error; // Rethrow the error to propagate it further
    }
  };