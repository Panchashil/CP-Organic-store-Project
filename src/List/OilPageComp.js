// src/components/OilPageComp.js
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice'; // Ensure addItem is correctly imported

const data = [
  {
    id: 1,
    image: "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/almond-oil-and-almonds-1296x728.jpg?w=1155&h=1528",
    name: "Almond Oil",
    description: "High in monounsaturated fats that promote heart health. Contains antioxidants like vitamin E, Low in saturated fats monounsaturated which is beneficial for heart other cooking oils.",
    price: "120/-"
  },
  {
    id: 2,
    image: "https://media.istockphoto.com/id/1372536271/photo/avocado-oil.webp?b=1&s=170667a&w=0&k=20&c=Bt8gTRIRZjRP2yRDoFjKu2RmQ0oUiib79gFq2Eq2J6U=",
    name: "Avocado Oil",
    description: "Avocado oil is rich in monounsaturated fats, particularly oleic acid, which is beneficial for heart health. It helps lower bad cholesterol (LDL) levels and increase good cholesterol (HDL) levels.",
    price: "220/-"
  },
  {
    id: 3,
    image: "https://tse1.mm.bing.net/th?id=OIP.-S1jxp-jDQ2xlSDGFsNcdQHaJQ&pid=Api&P=0&h=180",
    name: "Blackseed Oil",
    description: "Contains essential fatty acids like omega-3 and omega-6, which support overall health and well-being. Rich in vitamins and minerals such as vitamin E, vitamin B complex, calcium, zinc, and potassium.",
    price: "80/-"
  },
  {
    id: 4,
    image: "https://tse4.mm.bing.net/th?id=OIP.qBZ5ctb-CY-WKDeSuHu-_QHaE7&pid=Api&P=0&h=180",
    name: "Castor Oil",
    description: "Rich in ricinoleic acid, which improves blood circulation to the scalp and stimulates hair follicles. Nourishes the scalp and strengthens hair roots, promoting healthy hair growth.",
    price: "170/-"
  },
  {
    id: 5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr0Gwtm7SnYv1GQvMn8q3ZfKO0sHUzuvCA-Q&s",
    name: "Almond Oil",
    description: "High in monounsaturated fats that promote heart health. Contains antioxidants like vitamin E, Low in saturated fats monounsaturated which is beneficial for heart other cooking oils.",
    price: "120/-"
  },
  {
    id: 6,
    image: "https://tse1.mm.bing.net/th?id=OIP.-S1jxp-jDQ2xlSDGFsNcdQHaJQ&pid=Api&P=0&h=180",
    name: "Blackseed Oil",
    description: "Contains essential fatty acids like omega-3 and omega-6, which support overall health and well-being. Rich in vitamins and minerals such as vitamin E, vitamin B complex, calcium, zinc, and potassium.",
    price: "80/-"
  },
  {
    id: 7,
    image: "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/almond-oil-and-almonds-1296x728.jpg?w=1155&h=1528",
    name: "Almond Oil",
    description: "High in monounsaturated fats that promote heart health. Contains antioxidants like vitamin E, Low in saturated fats monounsaturated which is beneficial for heart other cooking oils.",
    price: "120/-"
  },
  {
    id: 8,
    image: "https://www.shutterstock.com/image-photo/prominent-goldencolored-castor-oil-bottle-260nw-2361434231.jpg",
    name: "Avocado Oil",
    description: "Avocado oil is rich in monounsaturated fats, particularly oleic acid, which is beneficial for heart health. It helps lower bad cholesterol (LDL) levels and increase good cholesterol (HDL) levels.",
    price: "220/-"
  },
];

const OilPageComp = () => {
  const dispatch = useDispatch();

  const handleAddItems = (item) => {
    dispatch(addItem(item)); // Use addItem action
  };

  return (
    <div style={styles.container}>
      {data.map((item) => (
        <Card sx={{ maxWidth: 395, width: '95%' }} key={item.id}>
          <CardMedia>
            <img
              src={item.image}
              alt={item.name}
              style={{ width: '95%', height: '250px', objectFit: 'cover' }}
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
            <Button size="small" variant='contained' onClick={() => handleAddItems(item)}>
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
  },
};

export default OilPageComp;
