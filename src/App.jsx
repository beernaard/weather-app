import React, { useState } from 'react'
import './App.css'
import axios from 'axios'
import { ContentBottomComponent, ContentMiddleComponent, SearchComponent } from './Components'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import images from './constants/images'
const App = () => {
  const [inputName, setInputName] = useState("")
  const [weatherUI, setWetherUI] = useState(false)
  const [weatherIMG, setWetherIMG] = useState()
  const [weatherData, setWeatherData] = useState({
    cityname:"",
    weatherdesc:"",
    temp:"",
    humidity:"",
    wind:"",
    weathermain:"",
  })
  const inputText = (e)=>{
    const data = e.target.value
    console.log(data)
    setInputName(data)
  }
  const getWeatherAPI = async()=>{
    await axios.get(`${import.meta.env.VITE_API_URL}${inputName}&appid=${import.meta.env.VITE_API_KEY}`)
    .then((res)=>{
      setInputName("")
      !weatherUI? setWetherUI((prevdata)=>!prevdata) : setWetherUI((prevdata)=>prevdata)
      const data=res.data
      // console.log(data)
      // console.log(data.name)
      // console.log(Math.round(data.main.temp) +"°C")
      // console.log(data.main.humidity+"%")
      // console.log(data.wind.speed+" km/h")
      // console.log(data.weather[0].description)
      // console.log(data.weather[0].main)
      setWeatherData({
        cityname:data.name,
        weatherdesc:data.weather[0].description,
        temp:`${Math.round(data.main.temp)}°C`,
        humidity:`${data.main.humidity}%`,
        wind:`${data.wind.speed} km/h`,
        weathermain:data.weather[0].main,
      })
      if(data.weather[0].main === "Clouds"){ 
        setWetherIMG(images.clouds)
      }
      else if(data.weather[0].main === "Clear"){
        setWetherIMG(images.clear)
      }
      else if(data.weather[0].main === "Rain"){
        setWetherIMG(images.rain)
      }
      else if(data.weather[0].main === "Drizzle"){
        setWetherIMG(images.drizzle)
      }
      else if(data.weather[0].main === "Mist"){
        setWetherIMG(images.mist)
      }
    })
    .catch((err)=>{
      console.log(err)
      toast.error("Input Error", {
        position: toast.POSITION.TOP_RIGHT
    })
    })
  }
  return (
    <>
    <ToastContainer/>
    <div className='main-container'>
      <SearchComponent inputName={inputName} inputText={inputText} getWeatherAPI={getWeatherAPI}/>
      {weatherUI && <ContentMiddleComponent weatherIMG={weatherIMG} weatherData={weatherData} /> }
      {weatherUI && <ContentBottomComponent  weatherData={weatherData}/>}
    </div>
    </>
    
  )
}

export default App