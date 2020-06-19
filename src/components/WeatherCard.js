import React from 'react'
import {Card,ListGroup} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


const WeatherCard=({locationWeather})=>
{
  const weatherdata = {
    ...locationWeather,
    main:{
        ...locationWeather.main
    },
    sys:{
        ...locationWeather.sys
    },
    wind:{
        ...locationWeather.wind
    }
};


  
    return(
    <Card style={{ width: '18rem', margin:'20px'}}>
  <Card.Header>{locationWeather.name}</Card.Header>
  <ListGroup variant="flush">
    
    
    <ListGroup.Item>Température:{weatherdata.main.temp} F</ListGroup.Item>
    <ListGroup.Item >Ressentie: {weatherdata.main.feels_like} F</ListGroup.Item>
  </ListGroup>
</Card>
)}

export default WeatherCard