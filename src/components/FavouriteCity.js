import '../components-styles/FavouriteCity.css'
import { useEffect, useState } from 'react'
import { fetchFavouriteCitiesWeather } from '../util/axiosFetch'
import { FavCityCard } from './FavCityCard'

export const FavouriteCity = ({favouriteCities, setFavouriteCities, setChosenCity}) => {

    const [favouriteCitiesObjList, setFavouriteCitiesObjList] = useState([])
    
        useEffect(()=>{
            fetchFavouriteCitiesWeather(favouriteCities, setFavouriteCitiesObjList)
        },[favouriteCities])

    return (
        <div className="FavouriteCities-card">
            <ul className="FavouriteCities-list">
                {favouriteCitiesObjList.map((favouriteCity, i) => 
                    <li key={i}>
                        <FavCityCard favouriteCity={favouriteCity} favouriteCities={favouriteCities} setFavouriteCities={setFavouriteCities} setChosenCity={setChosenCity}/>
                    </li>
                )}
            </ul>
        </div>
    )
}
