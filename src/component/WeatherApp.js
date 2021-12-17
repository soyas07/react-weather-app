import React, { useState } from 'react'
import Background from './Background'
import WeatherBg from './WeatherBg'
import Loading from './Loading'
import Forecast from './Forecast'
import useForecast from '../hooks/useForecast'
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'

function WeatherApp() {

    const [submit, setSubmit] = useState(false)

    const { isLoading, info, error, callApi } = useForecast()

    const onSubmit = location => {
        callApi(location)
        if(!error)
            setSubmit(true)
    }

    return (
        <AnimatePresence exitBeforeEnter>
            <div className='container-app'>
                { <motion.div initial={{ opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}> 
                    <Background info={info} />
                </motion.div>}
                { <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
                    <WeatherBg info={info} />
                </motion.div>}
                {isLoading && <Loading />}
                {!isLoading && <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
                    <Forecast submitLocation={onSubmit} submitted={submit} info={info} />
                </motion.div>}
            </div>
        </AnimatePresence>
    )
}

export default WeatherApp
