import axios from 'axios'
import { useState } from 'react'

function useForecast() {

    const [isLoading, setLoading] = useState(false)
    const [error, setError] = useState()
    const [info, setInfo] = useState([])

    const callApi = async (city) => {
        setLoading(true)
        await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b17c52ecf93e5a256de3bf62785ce96f`)
        .then(res => {setInfo({
            city: res.data.name,
            currentTemp: Math.round(res.data.main.temp - 273.15),
            weather: res.data.weather[0].main,
            timezone: res.data.timezone
        })})
        .catch(err => setError(err))
        .finally(() => setLoading(false))
    }

    return { isLoading, info, error, callApi }
}

export default useForecast