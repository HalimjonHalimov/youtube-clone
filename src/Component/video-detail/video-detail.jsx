import { Box, Container, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player'
import { ApiService } from '../../service/api.service';


const VideoDetail = () => {
    const [video, setVideo] = useState([]);
    console.log(video);
    const { id } = useParams();
    const url = `https://www.youtube.com/watch?v=${id}`;
    useEffect(() => {
        const getData = async() => {
            try {
                const data = await ApiService.fetching(`videos?part=snippet,statistics&id=${id}`)
                setVideo(data.items[0])
            } catch (error) {
                console.log(error);
            }
        }
        getData()
     
    }, [id]);
    
    return (
        <Container maxWidth={'90%'} sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            border: '1px solid red'}}>
            <Stack width={'70%'} sx={{
                border: '1px solid grey'}}>
               <ReactPlayer url={url} controls />
            </Stack>
            <Box width={'25%'} sx={{
                border: '1px solid grey'}}>
                Suggested video 
            </Box>
        </Container>
    );
}

export default VideoDetail;
