import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    url: BASE_URL,
    params: {maxResults: '50'},
    headers: {
      'X-RapidAPI-Key': 'a90c26455cmsh235d4e12ec1b898p1c000bjsn0c2dba03f83a',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
  }