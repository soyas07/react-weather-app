import axios from 'axios'
import { useState, useEffect } from 'react'
import {gatherData} from '../manageData/gatherData'

function useForecast() {
    const URL = 'https://api.openweathermap.org/data/2.5/weather?q=Sydney&appid=b17c52ecf93e5a256de3bf62785ce96f'

    const [isLoading, setLoading] = useState(false)
    const [error, setError] = useState()
    const [info, setInfo] = useState()

    const callApi = async (city) => {
        setLoading(true)
        await axios.get(URL)
        .then(res => {setInfo(res.data)})
        .catch(err => setError(err))
        .finally(() => {setLoading(false)
            gatherData(info, city)})
        
    }

    const refetch = () => {
        console.log('refetching')
        setLoading(true)
        axios.get(URL)
        .then(res => setInfo(res.data))
        .catch(err => setError(err))
        .finally(() => setLoading(false))
    }

    return { isLoading, error, info, refetch, callApi }
}

export default useForecast