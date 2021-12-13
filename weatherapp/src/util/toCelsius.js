export const toCelsius = (kelvin) => {
    let celsius = (kelvin-273.15).toFixed(2)
    return celsius + " °C"
}