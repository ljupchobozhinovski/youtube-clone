import axios from "axios";

export const BASE_URL = "https://youtube-v311.p.rapidapi.com/";

const options = {
  params: {
    maxResults: "50"
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v311.p.rapidapi.com"
  }
};

console.log("API Key:", process.env.REACT_APP_RAPID_API_KEY);

axios.defaults.baseURL = BASE_URL;

export const fetchFromAPI = async (url) => {
  console.log("Request URL:", url);

  try {
    const response = await axios.get(url, options);
    console.log("Response Data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
