import React from 'react'
import './searchcomponent.css'
import {BsSearch} from 'react-icons/bs'
const SearchComponent = ({inputName,inputText,getWeatherAPI}) => {
  return (
    <div className='searchcomponent-main'>
      <input type="text" placeholder='Input City name...'
      value={inputName} onChange={inputText}/>
      <button onClick={getWeatherAPI}><BsSearch/></button>
    </div>
  )
}

export default SearchComponent