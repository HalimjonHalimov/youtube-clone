import { Box } from '@mui/system';
import { Link, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';


const Chanel = () => {
    const params = useParams()
    return (
        <Box>
            <Link to={'/'}>
                <Button> Home Page</Button>
            </Link>
            Channel
        </Box>
    );
}

export default Chanel;
