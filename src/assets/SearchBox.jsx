import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
export default function SearchBox({info}) {
    let [city, setCity] = useState("");
    const API_URL = "https://api.openweathermap.org/data/2.5/weather"
    const API_KEY = "560879895a2872fff6c1d81acb759065"

    let getWeatherInfo = async () => {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
        let jsonResponse = await response.json();
        console.log(jsonResponse)
        let result ={
            city:jsonResponse.name,  
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidty: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,

        };
        console.log(result);
        return result;

    };

    let handleChange = (evt) => {
        setCity(evt.target.value)

    };

    let handleSubmit =  async (evt) => {
        evt.preventDefault();
        console.log(city);
        setCity("");
        let newinfo= await getWeatherInfo();
        info(newinfo);
    }
    return (
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required
                    value={city}
                    onChange={handleChange} />
                <br></br><br></br>
                <Button variant="contained" type="submit" >Search</Button>
            </form>
        </div>
    );
}

