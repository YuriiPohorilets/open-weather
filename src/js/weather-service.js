import axios from 'axios';

const API_KEY = 'cd588cc9b954ae3b161e12badd46f354';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export default class WeatherApiService {
  constructor() {
    // this.searchQuery = '';
  }

  async fetchWeather() {
    const searchParams = new URLSearchParams({
      // q: this.searchQuery,
      lat: '50.434341',
      lon: '30.527756',
      exclude: 'current',
      appid: API_KEY,
      units: 'metric',
      cnt: 40,
    });

    const url = `${BASE_URL}?${searchParams}`;
    const response = await axios.get(url);
    const data = response.data;

    return data;
  }
}
