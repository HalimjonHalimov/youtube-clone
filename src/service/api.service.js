import axios from "axios";

const BASIC_API = 'https://youtube-v31.p.rapidapi.com';
// const API_KEY = process.env;

const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '4e203e4ac0mshee5efbea03e9df4p19032ajsndd0e6a6b1975',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};
export const ApiService = {
  async fetching(url) {
    const response = await axios.get(`${BASIC_API}/${url}`,options)
    return response.data
  }
}