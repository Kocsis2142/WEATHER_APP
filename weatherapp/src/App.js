import './App.css';
import { useState, useEffect } from 'react';
import { CitySearch } from './components/CitySearch';
import { CurrentCity } from './components/CurrentCity'
import { FavouriteCity } from './components/FavouriteCity';
import { getLocalIfExist, getLocalIfExistArray } from './util/getLocalIfExist'
import { defaults } from './util/defaultCities'

function App() {

  const [chosenCity, setChosenCity] = useState(getLocalIfExist('chosenCity', defaults.currentCity))
  const [favouriteCities, setFavouriteCities] = useState(getLocalIfExistArray('favouriteCities', defaults.favouriteCities))
  const [warnMsg, setWarnMsg] = useState("")
  const [warnClass, setWarnClass] = useState("")

    useEffect(() => {
      localStorage.setItem('chosenCity', chosenCity)
    }, [chosenCity])

    useEffect(() => {
      localStorage.setItem('favouriteCities', JSON.stringify(favouriteCities))
    }, [favouriteCities])

  return (
    <div className="App">
      <div className="warn-box"><p className={warnClass}>{warnMsg}</p></div>
      <CitySearch setChosenCity={setChosenCity}/>
      <CurrentCity chosenCity={chosenCity} favouriteCities={favouriteCities} setFavouriteCities={setFavouriteCities} setWarnMsg={setWarnMsg} setWarnClass={setWarnClass}/>
      <FavouriteCity favouriteCities={favouriteCities} setFavouriteCities={setFavouriteCities} setChosenCity={setChosenCity}/>
    </div>
  );
}

export default App;
