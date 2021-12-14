import React, {useState} from 'react'

function Forecast( { submitLocation, submitted, info} ) {

    const [location, setLocation] = useState()

    const onSubmit = e => {
        e.preventDefault()
        if (location === null) return
        submitLocation(location)
    }

    return (
        <div className='container-forecast'>
            <h1 className={submitted ? "hide-title" : null}>Weather <span>App</span></h1>
            <form className='forecast-form' onSubmit={onSubmit}>
                <input type="text" placeholder='Search City' onChange={e => setLocation(e.target.value)} value={location} />
            </form>
            <div className={submitted ? "display-forecast" : "hide-forecast"}>
                <h1 className="forecast-title">WEATHER</h1>
                <h4>Sydney, Australia</h4>
                <div className="forecast forecast-rain">
                </div>
                <h1 className="forecast-title">23<sup>oC</sup></h1>
                <p>RAIN</p>
                <p>01:34 PM, 12 DEC SUN</p>
            </div>        
        </div>
    )
}

export default Forecast
