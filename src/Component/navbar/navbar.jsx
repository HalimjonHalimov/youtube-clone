import { Box, Stack, Typography } from '@mui/material';
import logo from '../../images/youtube-transparent-youtube-icon-29.png'
import { SearchBar } from '../';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
       <Stack sx={{
        position: 'sticky',
        width: '100%',
        height: 'auto',
        top: '0',
        left: '0',
        backgroundColor: '#f9f9f9',
        borderBottom: '2px solid #f1f1f1',
        overflow: 'hidden',
        zIndex: '999'
       }}>
            <Box sx={{
                 display: 'flex',
                 justifyContent: 'space-around',
                 alignItems: 'center'
            }}>
                <Link to={'/'}>
                    <img src={logo} alt=" You Tobe API" className='logo'/>
                </Link>
                <SearchBar />
                <Box>
                    <Typography variant='h6'>
                        You Tube Official
                    </Typography>
                </Box>
            </Box>
       </Stack>
    );
}

export default Navbar;
