import { Search } from '@mui/icons-material';
import { Paper, IconButton } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {
    const [value, setValue] = useState('');
    const navigate = useNavigate()

    const onSearchHandle = (e) => {
        e.preventDefault()
        if(value) {
            navigate(`/search/${value}`)
        }
        setValue('')
    }
    return (
        <Paper  component={'form'} className="search-bar" sx={{boxShadow: 'none'}} onSubmit={onSearchHandle}>
            <input 
                type="text" 
                placeholder='Searching...'
                value={value} 
                onChange={(e) => setValue(e.target.value)}/>
            <IconButton onClick={onSearchHandle}>
                <Search />
            </IconButton>
        </Paper>
    );
}

export default SearchBar;
