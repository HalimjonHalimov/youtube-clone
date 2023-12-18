import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';


const ChanelCard = ({video}) => {
    return (
        <Card sx={{
            width: '100%', 
            height: 'auto', 
            display: 'flex', 
            justifyContent: 'space-around', 
            alignItems: 'center', 
            flexDirection: 'column'}}>
        <CardMedia 
         image={video?.snippet?.thumbnails?.high?.url}
         alt={video?.snippet?.title}
         sx={{
            width: '200px',
            height: '200px',
            borderRadius: '50%',
           
         }}
        />
        <CardContent>
            <Typography variant='subtitle1' sx={{
                marginBottom: '10px',
                lineHeight: '18px',
                fontSize: '14px',
                fontWeight: '600',
            }}>{video?.snippet?.title} <CheckCircle  sx={{color: 'grey', fontSize: '12px', marginLeft: '4px'}}/></Typography>
                {video?.statistics?.subscriberCount && (
                <Typography>{parseInt(video?.statistics?.subscriberCount).toLocaleString('en-US')} </Typography>
                )}
        </CardContent>

   </Card>
    );
}

export default ChanelCard;
