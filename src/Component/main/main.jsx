import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import {  Container, Stack, Typography } from '@mui/material';
import { Category, Videos } from '../';
import  { ApiService }  from '../../service/api.service'

const Main = () => {
    const [category, setCotegory] = useState('New');
    const [video, setVideo] = useState([]);
    const oncategoryHandle = category => setCotegory(category)
    
    useEffect(() => {
        const getData = async () => {
            const data = await  ApiService.fetching(`search?part=snippet&q=${category}`)
           setVideo(data.items)
        }
        getData()
    }, [category]);

    
    return (
        <Stack m={2}>
           <Category category={category} oncategoryHandle={oncategoryHandle}/>
           <Container sx={{margin: '10px auto'}}>
                <Typography variant='h4' fontWeight={'bold'}>
                    {category} <span style={{color: 'rgba(255, 0, 0, 0.7)', fontWeight: 'bold'}}>Videos </span>
                </Typography>
                <Videos  video={video}/>
           </Container>
        </Stack>
    );
}

export default Main;
