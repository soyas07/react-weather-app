import React from 'react'

function Background( {info} ) {

    if (info.weather==='Rain') return <div className='background rain'></div>
    if (info.weather==='Clear') return <div className='background sunny'></div>
    if (info.weather==='Thunderstorm') return <div className='background storm'></div>
    if (info.weather==='Clouds' || info.weather==='Fog') return <div className='background mist'></div>
    return <div className="background dash"></div>

}

export default Background
