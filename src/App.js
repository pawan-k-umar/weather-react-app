import './App.css';
import React, {useState} from 'react';
import Sidebar from './components/Sidebar';

function App() {

    const [name, setName] = useState('');
    const [tem, setTemp] = useState('0');
    const [condi, setcondi] = useState('');
    const [iconUrl, setIconUrl] = useState();
    const [cityName, setCityName] = useState('london');
    const [humidity, sethumidity] = useState();
    const [speed, setSpeed] = useState();
    const [minTemp, setMinTemp] = useState();
    const [maxTemp, setMaxTemp] = useState();
    const [sunset, setSunset] = useState();
    const [sunrise, setSunrise] = useState();
    const [err, setErr] = useState();
    const[lastUpdated,setLatUpdated] = useState();
    const[time,setTime] = useState();
    const [countryName, setcountryName]=useState();
    const [region, setRegion]=useState();
    


    // const APIKEY = '5d3e1ba6775c5a97031d5f4705beeaad';
    const APIKEY = '32fc58c655934bc59ac60022210205';
    // const url = 'https://api.openweathermap.org/data/2.5/weather?q='+cityName+'&units=metric&APPID='+APIKEY+'';
    const url = 'https://api.weatherapi.com/v1/forecast.json?key='+APIKEY+'&q='+cityName+'&days=1&aqi=no&alerts=no';
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        sethumidity(data.current.humidity)
        setTemp(data.current.temp_c)
        setSpeed(data.current.wind_kph)
        setcondi(data.current.condition.text)
        setIconUrl(data.current.condition.icon)
        setLatUpdated(data.current.last_updated)
        setSunrise(data.forecast.forecastday[0].astro.sunrise)
        setSunset(data.forecast.forecastday[0].astro.sunset)
        setMinTemp(data.forecast.forecastday[0].day.mintemp_c)
        setMaxTemp(data.forecast.forecastday[0].day.maxtemp_c)
        setTime(data.location.localtime)
        setcountryName(data.location.country)
        setRegion(data.location.region)
        
      })
      .catch(err => {
        setErr(err.message);
     });


    function getData(val){
      setName(val.target.value);
    }
    function onSubmit(){
      setCityName(name);
    }
  


  return (
    <>
    <div className="App container">
      <h1 className='logo text-danger'>Weather App</h1>
      <div>
        <input className='text-danger' id="inputId" type='text' placeholder='Enter your city' onChange={getData}/>
        <button onClick={onSubmit} id="searchbtn">search</button>
        <p className="err text-danger">{err}</p>
      </div>
      <div id="main">
      <div id="left">
        <Sidebar 
          name1={['Last Updated : ']}
          props1={lastUpdated} 
          name2={['Humidity : ']} 
          props2={humidity}
          name3={['Speed : ']}
          props3={speed}
          name4={[' km/h']}
          name5={['Sunrise : ']}
          props4 = {sunrise}
        />
        </div>

        <div id="details" className='container bg-light col-12 mt-5'>
          <h2 id="cityName">{cityName}</h2>
          <h4>{countryName}</h4>
          <p className="text-muted">{region}</p>
          <h1 id="temp">{Math.floor(tem)} &#176;C</h1>
          <img id ='icon' src={iconUrl}/>
          <p>{condi}</p>
        </div>

        <div id="right">
        <Sidebar 
          name1={['Time : ']}
          // props1={new Date().toLocaleTimeString()} 
          props1={time} 
          name2={['Min : ']}
          props2={Math.floor(minTemp)}
          unit={' \u00b0C'}
          name3={['Max : ']}
          props3={Math.floor(maxTemp)}
          name6={['Sunset : ']}
          props5 = {sunset}
        />
        </div>
        </div>
    </div>
    <div className='footer container p-3 bg-dark text-light'>
          <p className="text-center">copyrights<span>&#169;</span>2021  <span>created by Pawan Kumar</span></p>
        </div>
        </>
  );
}

export default App;
