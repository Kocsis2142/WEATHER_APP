import { useEffect, useState } from 'react'
import { toCelsius } from '../util/toCelsius'
import { pexelsPhotoFetch } from '../util/pexelsFetch'
import weatherStockPic from '../images/weather-stock.jpg'

export const FavCityCard = ({favouriteCity, favouriteCities, setFavouriteCities, setChosenCity}) => {

    const deleteFavBtnHandler = () => {
        setFavouriteCities(favouriteCities.filter(favCity => favCity !== favouriteCity.data.name))
    }

    const setToCurrentCity = () => {
        setChosenCity(favouriteCity.data.name)
    }

    const [cityPicture, setCityPicture] = useState(weatherStockPic)

        useEffect(() => {
            pexelsPhotoFetch(favouriteCity?.data?.name, setCityPicture)
        }, [favouriteCity])

    return (
        <div style={{backgroundImage: `url(${cityPicture})`}}>
            <div className="FavouriteCities-inner-card">
                <h2>{favouriteCity?.data?.name}</h2>
                <div>
                    <h3>{toCelsius(favouriteCity?.data?.main.temp)}</h3>
                    <button className="Styled-Button" onClick={setToCurrentCity}>Weather ☁</button>
                    <button className="Styled-Button" onClick={deleteFavBtnHandler}>Remove ⌫</button>
                </div>
            </div>
        </div>  
    )
}
