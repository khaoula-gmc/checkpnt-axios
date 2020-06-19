import React from 'react';
import {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';
import WeatherCard from './components/WeatherCard';



function App() {
  const [tunisWeather,setTunisWeather]=useState({})
  const [bizerteWeather,setBizerteWeather]=useState({})
  const [sousseWeather,setSousseWeather]=useState({})
  const [jendoubaWeather,setJendoubaWeather]=useState({})


 

  const getTunisWeather = async () => {
    try {
      const res = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=Tunis&appid=b195bf621e614841d320e666110f5fcd');
      setTunisWeather(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getBizerteWeather = async () => {
    try {
      const res = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=Bizerte&appid=b195bf621e614841d320e666110f5fcd');
      setBizerteWeather(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getSousseWeather = async () => {
    try {
      const res = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=Sousse&appid=b195bf621e614841d320e666110f5fcd');
      setSousseWeather(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getJendoubaWeather = async () => {
    try {
      const res = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=Jendouba&appid=b195bf621e614841d320e666110f5fcd');
      setJendoubaWeather(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  

  useEffect(() => {
    getTunisWeather();
    getBizerteWeather();
    getSousseWeather();
    getJendoubaWeather();
   
  }, []);

 
  return (
    <div className="App" style={{display:'flex', flexWrap:'wrap'}}>
     <WeatherCard locationWeather={tunisWeather}/>
     <WeatherCard locationWeather={bizerteWeather}/>
     <WeatherCard locationWeather={sousseWeather}/>
     <WeatherCard locationWeather={jendoubaWeather}/>
    </div>
  );
}

export default App;
