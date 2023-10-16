import React from 'react'
import './contentbottomcomponent.css'
import images from '../../constants/images'
const ContentBottomComponent = ({weatherData}) => {
  return (
    <div className='contentbottomcomponent-main'>
      <div className='humidity-container'>
        <img src={images.humidity} alt="clear" />
      <div className='humidity-content'>
        <h4>{weatherData.humidity}</h4>
        <h2>Humidty</h2>
      </div>
      </div>
      <div className='wind-container'>
      <img src={images.wind} alt="clear" />
      <div className='wind-content'>
        <h4>{weatherData.wind}</h4>
        <h2>Wind Speed</h2>
      </div>    
      </div>
    </div>
  )
}

export default ContentBottomComponent