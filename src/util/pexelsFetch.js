import { createClient } from 'pexels'
import weatherStockPic from '../images/weather-stock.jpg'

export const pexelsPhotoFetch = (cityName, setter) => {
    const client = createClient(process.env.REACT_APP_PEXELS_API_KEY)
    const query = cityName
    client.photos.search({ query, per_page: 5 })
    .then(photos => 
        setter(
            photos.photos[Math.floor(Math.random() * 5)]?.src?.original !== undefined ?
            photos.photos[Math.floor(Math.random() * 5)].src.original : 
            photos.photos[0]?.src?.original ?
            photos.photos[0].src.original :
            weatherStockPic))
    .catch(err => {
        console.log(err)
        setter(weatherStockPic)
    })
}
