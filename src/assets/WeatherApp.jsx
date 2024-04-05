import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function Weather() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "wonderland",
        feelsLike: 295.6,
        humidty: 40,
        temp: 296.2,
        tempMax: 296.2,
        tempMin: 296.2,
        weather: "haze", 

    });

    let updateInfo =(newinfo) => {
        setWeatherInfo({...newinfo});
        
    }

    return(
        <div style ={{textAlign:"center"}}>
        <h2>Weather App by Jitesh</h2>
        <SearchBox  info={updateInfo} />
        <InfoBox info={weatherInfo}/>
        </div>
    );
}   