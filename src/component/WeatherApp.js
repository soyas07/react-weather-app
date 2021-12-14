import React, { useState } from 'react'
import Background from './Background'
import WeatherBg from './WeatherBg'
import Loading from './Loading'
import Forecast from './Forecast'
import useForecast from '../hooks/useForecast'

function WeatherApp() {

    const [submit, setSubmit] = useState(false)

    const { isLoading, error, info, refetch, callApi } = useForecast()

    const onSubmit = location => {
        setSubmit(true)
        callApi(location)
    }

    if(error)
        return <h1>{error}</h1>

    return (
        <div className='container-app'>
            { <Background info={info} />}
            { <WeatherBg info={info} />}
            {isLoading && <Loading />}
            {!isLoading && <Forecast submitLocation={onSubmit} submitted={submit} info={info} />}
        </div>
    )
}

export default WeatherApp
