import React, {useState} from 'react'

function Forecast( { submitLocation, submitted, info} ) {

    const [location, setLocation] = useState()

    const onSubmit = e => {
        e.preventDefault()
        if (location === null) return
        submitLocation(location)
    }

    const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Sep', 'Oct', 'Nov', 'Dec']
    const currentTime = ['am', 'pm']

    const dateTime = new Date()

    return (
        <div className='container-forecast'>
            <h1 className={submitted ? "hide-title" : null}>Weather <span>App</span></h1>
            <form className='forecast-form' onSubmit={onSubmit}>
                <input type="text" placeholder='Search City' onChange={e => setLocation(e.target.value)} value={location} required />
            </form>
            <div className={submitted ? "display-forecast" : "hide-forecast"}>
                <h1 className="forecast-title">WEATHER</h1>
                <h4>{info.city}</h4>
                <div className="forecast forecast-rain">
                </div>
                <h1 className="forecast-title">{info.currentTemp}<sup>oC</sup></h1>
                <p>{info.weather}</p>
                <p>{dateTime.toLocaleString('en-us', {hour: 'numeric', minute: 'numeric', hour12: true, timezone: info.timezone })}</p>
            </div>        
        </div>
    )
}

export default Forecast
