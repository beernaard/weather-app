import React from 'react'
import './contentmiddlecomponent.css'
const ContentMiddleComponent = ({weatherIMG,weatherData}) => {
  return (
    <div className='contentmiddlecomponent-main'>
      <img src={weatherIMG} alt="weather image" />
      <h4>{weatherData.weatherdesc}</h4>
      <h2>{weatherData.temp}</h2>
      <h1>{weatherData.cityname}</h1>
    </div>
  )
}

export default ContentMiddleComponent