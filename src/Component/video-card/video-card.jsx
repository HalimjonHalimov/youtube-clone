import { CheckCircle } from '@mui/icons-material';
import Moment from 'react-moment';
import { Avatar,  Card, CardContent, CardMedia, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const VideoCard = ({ video }) => {

    return (
       <Card sx={{width: '100%', height: '100%'}}>
            <Link to={`/video/${video.id.videoId}`}>
                <CardMedia 
                image={video?.snippet?.thumbnails?.high?.url}
                alt={video?.snippet?.title}
                sx={{
                    width: '100%',
                    height: '180px'
                }}
                />
            </Link>
            <CardContent>
                <Typography variant='subtitle2' mb={1} fontWeight={400} fontSize={'12px'}> <Moment fromNow>{video.snippet.publishTime}</Moment></Typography>
                <Typography variant='subtitle1' sx={{
                    marginBottom: '10px',
                    lineHeight: '18px',
                    fontSize: '14px',
                    fontWeight: '600',
                }}>{video?.snippet?.title.slice(0, 50)}</Typography>
                 <Typography variant='subtitle2' mt={2}>{video.snippet.description.slice(0, 100)}</Typography>
                <Stack direction={'row'} justifyContent={'flex-start'} alignItems={'center'} mt={2}>
                    <Avatar src={video?.snippet?.thumbnails?.high?.url} alt={video.snippet.title}/>
                    <Typography variant='subtitle2' ml={2} sx={{opacity: '0.7', lineHeight: '18px'}}>{video.snippet.channelTitle.slice(0, 12, )}</Typography>
                    <CheckCircle  sx={{color: 'grey', fontSize: '12px', marginLeft: '4px'}}/>
                </Stack>
            </CardContent>

       </Card>
    );
}

export default VideoCard;
