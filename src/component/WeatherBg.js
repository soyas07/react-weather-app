import React from 'react'

function WeatherBg( {info} ) {
    if (info.weather==='Rain') return <div className='container-weather-bg rain'></div>
    if (info.weather==='Clear') return <div className='container-weather-bg sunny'></div>
    if (info.weather==='Thunderstorm') return <div className='container-weather-bg storm'></div>
    if (info.weather==='Clouds') return <div className='container-weather-bg mist'></div>
    return (
        <div className='container-weather-bg dash'></div>
    )
}

export default WeatherBg
