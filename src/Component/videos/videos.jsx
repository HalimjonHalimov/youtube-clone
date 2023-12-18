import { VideoCard, ChanelCard, PlaylistCard } from '../'
import { Box } from '@mui/material';
import { Stack } from '@mui/system';


const Videos = ({ video }) => {

    return (
        <Stack 
          sx={{
            width: '100%',
            height: 'auto',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'stretch',
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}
            >
            {video.map(item => (
                <Box  key={item.id.videoId} sx={{
                    width: '25%',
                    height: 'auto',
                    padding: '10px',      
                }}>
                    {item?.id?.videoId && <VideoCard video={item} />}
                    {item?.id?.channelId &&  <ChanelCard video={item}/>}
                    {item?.id?.playlistId &&  <PlaylistCard video={item}/>}
                </Box>
            ))}
        </Stack>
    );
}

export default Videos;
