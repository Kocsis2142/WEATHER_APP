import axios from 'axios'

export const fetchCityWeather = async (cityName, setter) => {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_API_KEY}`);
        setter(response);
      } catch (error) {
        console.error(error);
      }
  }

  export const fetchFavouriteCitiesWeather = async (favCities, setter) => {
      let favList = []
        for (let favCity of favCities) {
            try {
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${favCity}&appid=${process.env.REACT_APP_API_KEY}`);
                favList.push(response)
              } catch (error) {
                console.error(error);
              }
          }
    setter(favList)
  }

  