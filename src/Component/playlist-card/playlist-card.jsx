import { CheckCircle } from '@mui/icons-material';

import { Avatar,  Card, CardContent, CardMedia, Stack, Typography } from '@mui/material';

const VideoCard = ({ video }) => {
    return (
       <Card sx={{width: '100%', height: '100%'}}>
            <CardMedia 
             image={video?.snippet?.thumbnails?.high?.url}
             alt={video?.snippet?.title}
             sx={{
                width: '100%',
                height: '180px'
             }}
            />
            {/* {moment(video.snippet.publishTime).fromNow()} */}
            <CardContent>
                <Typography variant='subtitle2' mb={1} fontWeight={400} fontSize={'12px'}></Typography>
                <Typography variant='subtitle1' sx={{
                    marginBottom: '10px',
                    lineHeight: '18px',
                    fontSize: '14px',
                    fontWeight: '600',
                }}> Playlist:  {video?.snippet?.title.slice(0, 100)}</Typography>
                 <Typography variant='subtitle2' mt={2}>{video.snippet.description.slice(0, 100)}</Typography>
                <Stack direction={'row'} justifyContent={'flex-start'} alignItems={'center'} mt={2}>
                    <Avatar src={video?.snippet?.thumbnails?.high?.url} alt={video.snippet.title}/>
                    <Typography variant='subtitle2' ml={2} sx={{opacity: '0.7', lineHeight: '18px'}}>{video.snippet.channelTitle}</Typography>
                    <CheckCircle  sx={{color: 'grey', fontSize: '12px', marginLeft: '4px'}}/>
                </Stack>
            </CardContent>

       </Card>
    );
}

export default VideoCard;
