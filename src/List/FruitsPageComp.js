// src/components/FruitsPageComp.js
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import staticData from '../shared/constant/ConstantData'; // Ensure the correct path
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice'; // Ensure addItem is correctly imported

const FruitsPageComp = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addItem(item));
  };

  const items = [
    {
      id: 1,
      name: 'Avocado',
      image: staticData.avacado,
      price: 300,
      originalPrice: 600,
      description: 'A creamy fruit with a buttery texture and a large seed inside. Avocados are high in healthy fats, fiber, potassium, and vitamins E, K, and C. Often used in salads, sandwiches (like avocado toast), guacamole, and as a garnish.',
    },
    {
      id: 2,
      name: 'Banana',
      image: staticData.banana,
      price: 50,
      originalPrice: 100,
      description: 'A tropical fruit with a soft, creamy flesh encased in a yellow or green peel. Bananas are rich in potassium, fiber, and vitamins B6 and C. Eaten fresh, blended into smoothies, sliced on cereals or yogurt, and used in baking.',
    },
    {
      id: 3,
      name: 'blueberry',
      image: staticData.blueberry,
      price: 370,
      originalPrice: 600,
      description: 'A creamy fruit with a blueberry texture and a large seed inside. Avocados are high in healthy fats, fiber, potassium, and vitamins E, K, and C. Often used in salads, sandwiches (like avocado toast), guacamole, and as a garnish.',
    },
    {
      id: 4,
      name: 'carrot',
      image: staticData.carrot,
      price: 520,
      originalPrice: 100,
      description: 'A tropical fruit with a soft, creamy flesh encased in a yellow or green peel. Bananas are rich in potassium, fiber, and vitamins B6 and C. Eaten fresh, blended into smoothies, sliced on cereals or yogurt, and used in baking.',
    },
    {
      id: 5,
      name: 'Grapes',
      image: staticData.grapes,
      price: 500,
      originalPrice: 600,
      description: 'A creamy fruit with a buttery texture and a large seed inside. Avocados are high in healthy fats, fiber, potassium, and vitamins E, K, and C. Often used in salads, sandwiches (like avocado toast), guacamole, and as a garnish.',
    },
    {
      id: 6,
      name: 'Banana',
      image: staticData.banana,
      price: 40,
      originalPrice: 100,
      description: 'A tropical fruit with a soft, creamy flesh encased in a yellow or green peel. Bananas are rich in potassium, fiber, and vitamins B6 and C. Eaten fresh, blended into smoothies, sliced on cereals or yogurt, and used in baking.',
    },
    {
      id: 7,
      name: 'Mango',
      image: staticData.mango,
      price: 30,
      originalPrice: 600,
      description: 'A creamy fruit with a buttery texture and a large seed inside. Avocados are high in healthy fats, fiber, potassium, and vitamins E, K, and C. Often used in salads, sandwiches (like avocado toast), guacamole, and as a garnish.',
    },
    {
      id: 8,
      name: 'Plum',
      image: staticData.plum,
      price: 550,
      originalPrice: 100,
      description: 'A tropical fruit with a soft, creamy flesh encased in a yellow or green peel. Bananas are rich in potassium, fiber, and vitamins B6 and C. Eaten fresh, blended into smoothies, sliced on cereals or yogurt, and used in baking.',
    },
    // Add other items here
  ];

  return (
    <div style={styles.container}>
      {items.map((item) => (
        <Card key={item.id} sx={{ maxWidth: 395, width: '95%' }} style={{ marginBottom: '16px' }}>
          <CardMedia>
            <img
              src={item.image}
              alt={item.name}
              style={{ width: '100%', height: '250px', objectFit: 'cover' }}
            />
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <del>&#8377;{item.originalPrice}</del>
              <b> Discounted &#8377;{item.price}</b>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" variant="contained" onClick={() => handleAddToCart(item)}>
              Add to Cart
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px',
    justifyContent: 'center',
    padding: '16px',
  },
};

export default FruitsPageComp;
