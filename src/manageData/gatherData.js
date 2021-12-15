import React from 'react'

export const gatherData = (weatherData, locName)  => [
    {
        city: locName,
        weather: weatherData.weather.main,
        currentTemp: weatherData.main.temp
    }
]
