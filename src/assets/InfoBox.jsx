import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './InfoBox.css'

export default function InfoBox({info}) {
    const INIT_URL ="https://cdn.pixabay.com/photo/2018/05/30/00/24/thunderstorm-3440450_640.jpg"
    
    return (
        <div className="InfoBox">
            <h1>WeatherInfo - {InfoBox.weather}</h1>
            <div className='cardcontent'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={INIT_URL}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                       <p>Temperature = {info.temp}</p>
                       <p>Humidity = {info.humidty}</p>
                       <p>Min Temp = {info.tempMin}&deg;C</p>
                       <p>Max Temp= {info.tempMax}&deg;C</p>
                       The weather can be described as ${info.weather} and feels like {info.feelsLike}&deg;C
                    </Typography>
                </CardContent> 
            </Card>
            </div>
        </div>
    );
}