import WeatherService from './js/weather-service';

const refs = {
  city: document.querySelector('.location'),
  time: document.querySelector('.time'),
  date: document.querySelector('.date'),
  temp: document.querySelector('.temp'),
  tempWeath: document.querySelector('.temp__weath'),
  tempMin: document.querySelector('.temp__min'),
  tempMax: document.querySelector('.temp__max'),
};
const weatherService = new WeatherService();
const date = new Date();

async function renderWeather() {
  const data = await weatherService.fetchWeather();

  refs.city.textContent = `${data.name}, ${data.sys.country}`;
  refs.date.textContent = date.toDateString();
  refs.temp.textContent = Math.floor(data.main.temp);
  refs.tempWeath.textContent = data.weather[0].description;
  refs.tempMin.textContent = Math.floor(data.main.temp_min);
  refs.tempMax.textContent = Math.floor(data.main.temp_max);

  // const template = await list.map(day => renderTemplateWeek(day)).join('');

  // refs.week.innerHTML = template;

  console.log(data);
  // console.log(list);
}

renderWeather();
