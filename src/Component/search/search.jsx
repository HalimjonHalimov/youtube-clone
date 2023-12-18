import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import {  Container, Stack, Typography } from '@mui/material';
import {  Videos } from '../';
import  { ApiService }  from '../../service/api.service'


const Search = () => {
    const [video, setVideo] = useState([]);
    const { id } = useParams()

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await  ApiService.fetching(`search?part=snippet&q=${id}`)
               setVideo(data.items)
            } catch (error) {
                console.log(error);
            }
        }
        getData()
    }, [id]);
    return (
        <Stack m={2}>
        <Container sx={{margin: '10px auto'}}>
             <Typography variant='h4' fontWeight={'bold'} m={'10px 0'}>
                 Search results for <span style={{color: 'rgba(255, 0, 0, 0.7)', fontWeight: 'bold'}}>{id}</span>  Videos
             </Typography>
             <Videos  video={video}/>
        </Container>
     </Stack>
    );
}

export default Search;
