import React, {useState} from 'react'
import { motion } from 'framer-motion/dist/framer-motion'

function Forecast( { submitLocation, submitted, info} ) {

    const [location, setLocation] = useState()

    const onSubmit = e => {
        e.preventDefault()
        if (location === null) return
        submitLocation(location)
    }

    const dateTime = new Date()

    return (
        <div className='container-forecast'>
            <h1 className={submitted ? "hide-title" : null}>Weather <span>App</span></h1>
            <form className='forecast-form' onSubmit={onSubmit}>
                <input type="text" placeholder='Search City' onChange={e => setLocation(e.target.value)} value={location} required />
            </form>
            <div className={submitted ? "display-forecast" : "hide-forecast"}>
                <motion.div transition={{ease: "easeOut", duration: 0.4}} initial={{y:"-50%", opacity: 0}} animate={{y:0, opacity: 1}} exit={{ opacity: 0}}><h1 className="forecast-title">WEATHER</h1></motion.div>
                <h4>{info.city}</h4>
                <motion.div transition={{ease: "easeOut", duration: 0.4}} initial={{y:"-50%", opacity: 0}} animate={{y:0, opacity: 1}} exit={{ opacity: 0}}>{(info.weather==='Rain') && <div className="forecast forecast-rain"></div>}</motion.div>
                <motion.div transition={{ease: "easeOut", duration: 0.4}} initial={{y:"-50%", opacity: 0}} animate={{y:0, opacity: 1}} exit={{ opacity: 0}}>{(info.weather==='Clear') && <div className="forecast forecast-sunny"></div>}</motion.div>
                <motion.div transition={{ease: "easeOut", duration: 0.4}} initial={{y:"-50%", opacity: 0}} animate={{y:0, opacity: 1}} exit={{ opacity: 0}}>{(info.weather==='Thunderstorm') && <div className="forecast forecast-storm"></div>}</motion.div>
                <motion.div transition={{ease: "easeOut", duration: 0.4}} initial={{y:"-50%", opacity: 0}} animate={{y:0, opacity: 1}} exit={{ opacity: 0}}>{(info.weather==='Clouds' || info.weather==='Fog' || info.weather==='Mist') && <div className="forecast forecast-mist"></div>}</motion.div>
                <motion.div transition={{ease: "easeOut", duration: 0.4}} initial={{y:"-50%", opacity: 0}} animate={{y:0, opacity: 1}} exit={{ opacity: 0}}><h1 className="forecast-title">{info.currentTemp}<sup>oC</sup></h1></motion.div>
                <motion.div transition={{ease: "easeOut", duration: 0.4}} initial={{y:"-50%", opacity: 0}} animate={{y:0, opacity: 1}} exit={{ opacity: 0}}><p>{info.weather}</p></motion.div>
                <motion.div transition={{ease: "easeOut", duration: 0.4}} initial={{y:"-50%", opacity: 0}} animate={{y:0, opacity: 1}} exit={{ opacity: 0}}><p>{dateTime.toLocaleString('en-us', {hour: 'numeric', minute: 'numeric', hour12: true, timezone: 'utc' })}</p></motion.div>
            </div>        
        </div>
    )
}

export default Forecast
