import { Stack } from '@mui/system';
import { categoryItems } from '../constants'

const Category = ({oncategoryHandle, category}) => {
    return (
        <Stack  direction="row" sx={{
            overflowX: 'scroll',
            padding: '10px 0'
        }}>
            {categoryItems.map(item => (
                <button key={item.name} className={`${category === item.name ? 'category-item active-category' : 'category-item'}`} onClick={() => oncategoryHandle(item.name)}>
                    <span style={{margin: '0 10px'}}>{item.icon}</span>
                    <span>{item.name}</span>
                </button>
            ))}
        </Stack>
    );
}

export default Category;
