import { createClient } from 'pexels'
import weatherStockPic from '../images/weather-stock.jpg'

export const pexelsPhotoFetch = (cityName, setter) => {
    const client = createClient(process.env.REACT_APP_PEXELS_API_KEY)
    const query = cityName
    client.photos.search({ query, per_page: 5 })
    .then(photos => 
        setter(
            photos.photos[Math.floor(Math.random() * 5)]?.src?.large !== undefined ?
            photos.photos[Math.floor(Math.random() * 5)].src.large : 
            photos.photos[0]?.src?.large ?
            photos.photos[0].src.large :
            weatherStockPic))
    .catch(err => {
        console.log(err)
        setter(weatherStockPic)
    })
}
