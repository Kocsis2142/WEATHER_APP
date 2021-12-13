import '../components-styles/CurrentCity.css'
import { useEffect, useState } from 'react'
import { fetchCityWeather } from '../util/axiosFetch'
import { toCelsius } from '../util/toCelsius'
import { pexelsPhotoFetch } from '../util/pexelsFetch'
import weatherStockPic from '../images/weather-stock.jpg'

export const CurrentCity = ({chosenCity, favouriteCities, setFavouriteCities, setWarnMsg, setWarnClass}) => {

    const [weatherData, setWeatherData] = useState([])
    const [cityPicture, setCityPicture] = useState(weatherStockPic)

        useEffect(()=>{
            fetchCityWeather(chosenCity, setWeatherData)
            pexelsPhotoFetch(chosenCity, setCityPicture)
        },[chosenCity])

    const addToFavBtnHandler = () => {
        if (!favouriteCities.includes(weatherData.data.name)) {
            if(favouriteCities.length < 5) {
                setFavouriteCities([...favouriteCities, weatherData.data.name])
            } else {
                setWarnMsg(" ⚠  Cannot add more than 5 city to the favourite list!")
                setWarnClass("warning-msg")
                setTimeout(() => {
                    setWarnMsg("")
                    setWarnClass("")
                }, 5000);
            }
        } else {
            setWarnMsg(" ⚠  Cannot add the same city more than once!")
            setWarnClass("warning-msg")
            setTimeout(() => {
                setWarnMsg("")
                setWarnClass("")
            }, 5000);
        }
    }

    return (
        <div className="CurrentCity-card" style={{backgroundImage: `url(${cityPicture})`}}>
            <div className="CurrentCity-inner-card">
                <h1>{weatherData?.data?.name}</h1>
                <h2>{toCelsius(weatherData?.data?.main.temp)}</h2>
                <h3>{weatherData?.data?.weather[0].main}</h3>
                <h3>{"Feels like: " + toCelsius(weatherData?.data?.main.feels_like)}</h3>
                <button className="Styled-Button" onClick={addToFavBtnHandler}>Favourite ❤</button>
            </div>
        </div>
    )
}
