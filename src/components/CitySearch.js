import '../components-styles/CitySearch.css'
import { useState, useEffect } from 'react'
import cityList from '../city-list/city.list.json'

export const CitySearch = ({setChosenCity}) => {

    const [searchInput, setSearchInput] = useState("")
    const [resultCities, setResultCities] = useState([])

        useEffect(() => {
            setResultCities(searchAllElement(cityList))
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [searchInput])

        const searchAllElement = cityList => {
            if (searchInput.length >= 3) {
                let keywords = searchInput.toLowerCase().split(" ")
                    return cityList.filter(city => keywords.every(keyword => city.name.toLowerCase().includes(keyword)))
            }
            else 
                    return []
        }

        const inputChangeHandler = input => setSearchInput(input.target.value)

        const inputShortCut = event => {
            setSearchInput("")
            setChosenCity(event.target.innerText)
        }
            
    

    return (
        <div className="CitySearch">
            <div className="CitySearch-input">
                <input value={searchInput} placeholder="Search City" onChange={inputChangeHandler}/>
            </div>
            <div className="CitySearch-result">
                <ul>
                    {resultCities.map((resultCity, i) => 
                        <li key={i} onClick={inputShortCut}>
                            {resultCity.name}
                        </li>)}
                </ul>
            </div>
        </div>
    )
}
