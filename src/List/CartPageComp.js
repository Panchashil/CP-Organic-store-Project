import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import { removeItem } from '../utils/cartSlice'; // Ensure this import is correct

const CartPageComp = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId)); // Pass item ID to remove the specific item
  };

  // Calculate total number of items and total price dynamically
  const totalItems = cartItems.length;
  const totalPrice = cartItems.reduce((acc, item) => acc + parseInt(item.price, 10), 0);

  // Google Pay URL (replace with your actual Google Pay link)
  const googlePayURL = 'https://pay.google.com'; // Example URL

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome To Your Cart
        </Typography>
      </div>
      {cartItems.length === 0 ? (
        <Typography variant="h6">Your cart is empty</Typography>
      ) : (
        <>
          {cartItems.map((item) => (
            <Card key={item.id} sx={{ maxWidth: 300, width: '90%' }} style={{ marginBottom: '16px' }}>
              <CardMedia>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: '100%', height: '150px', objectFit: 'cover' }} // Adjusted for consistency
                />
              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <b>Price &#8377;{item.price}</b>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  variant='contained'
                  color='secondary'
                  onClick={() => handleRemoveItem(item.id)} // Use item.id to remove the specific item
                >
                  Remove from Cart
                </Button>
              </CardActions>
            </Card>
          ))}
          <div style={styles.summary}>
            <Typography variant="h6">
              Total Items: {totalItems}
            </Typography>
            <Typography variant="h6">
              Total Price: &#8377;{totalPrice}
            </Typography>
            <Button
              size="large"
              variant='contained'
              color='primary'
              style={{ marginTop: '16px' }}
              onClick={() => window.location.href = googlePayURL} // Redirect to Google Pay
            >
              Buy Now
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '16px',
    maxWidth: '1200px', // Ensure a maximum width for better responsiveness
    margin: '0 auto', // Center align horizontally
  },
  header: {
    width: '100%',
    textAlign: 'center',
    marginBottom: '16px',
  },
  summary: {
    marginTop: '16px',
    textAlign: 'center',
  },
};

export default CartPageComp;
