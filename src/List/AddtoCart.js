import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { clearItems } from '../utils/cartSlice';


const AddtoCart = ({ cartItems }) => {
    const dispatch = useDispatch()
    const itemCards = useSelector(store => store.cart.items)
    const clearCartItems = () => {
        dispatch(clearItems())

    }
    if (itemCards.length === 0) {
        return <h1>Cart is empty please add your items 🛒</h1>
    }
    return (
        <div>
            <Typography gutterBottom variant="h5" component="div">Cart</Typography>
            <Button size="small" variant='contained' onClick={clearCartItems}>Clear Cart Items</Button>
            <div style={styles.container}>
                {itemCards.map(eachItem =>
                    <Card sx={{ maxWidth: 395, width: '95%' }}>
                        <CardMedia>
                            <img src={eachItem.image} alt={eachItem.name} style={{ width: '95%', height: '250px', objectFit: 'cover' }} />
                        </CardMedia>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">{eachItem.name}</Typography>
                            <Typography>{eachItem.description}</Typography>

                            <b>Price - &#8377; {eachItem.price}</b>
                            <CardActions>
                                <Button size="small" variant='contained'   >ADD TO CART</Button>
                            </CardActions >
                        </CardContent>

                    </Card>


                )}
            </div>
        </div>

    );
};
const styles = {
    container: {
        display: 'flex',

        flexWrap: 'wrap',
        gap: '16px',
        justifyContent: 'center',

    },
}

export default AddtoCart;
