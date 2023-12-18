import { Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { Main, Chanel, VideoDetail, Search, Navbar, Playlist } from '../';


const App = () => {
    return (
        <Box>
            <Navbar />
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/channel/:id' element={<Chanel />} />
                <Route path='/video/:id' element={<VideoDetail />} />
                <Route path='/search/:id' element={<Search />} />
                <Route path='/playlist/:id' element={<Playlist />} />
            </Routes>
        </Box>
    );
}

export default App;
