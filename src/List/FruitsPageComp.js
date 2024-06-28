import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import staticData from '../shared/constant/ConstantData';
import { colors } from '@mui/material';
import { AddToQueueSharp } from '@mui/icons-material';
import { lightBlue, red } from '@mui/material/colors';
import { Link } from 'react-router-dom'

const FuritsPageComp = () => {
  const [showCart, setShowCart] = useState(false); // State to control the visibility of CartComponent

  const handleAddToCart = () => {
    setShowCart(true);
  };

  return (
    <div style={styles.container}> {/* Flex container with styles for responsiveness */}
    
      <Card sx={{ maxWidth: 395, width: '95%' }}>
        <CardMedia>
          <img
            src={staticData.avacado} // Update this path to your image
            alt="My Image"
            style={{ width: '95%', height: '250px', objectFit: 'cover' }}
          />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Avacado
          </Typography>
          <del>&#8377;600</del>
          <b>Discounted&#8377;300</b>

          <Typography variant="body2" color="text.secondary">
           A creamy fruit with a buttery texture and a large seed inside. Avocados are high in healthy fats, fiber, potassium, and vitamins E, K, and C.
           Often used in salads, sandwiches (like avocado toast), guacamole, and as a garnish.


          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant='contained' onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 395, width: '95%' }}>
        <CardMedia>
          <img
            src={staticData.banana} // Update this path to your image
            alt="My Image"
            style={{ width: '95%', height: '250px', objectFit: 'cover' }}
          />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Banana
          </Typography>
          <del>&#8377;100</del>
          <b>Discounted&#8377;50</b>
          <Typography variant="body2" color="text.secondary">
          A tropical fruit with a soft, creamy flesh encased in a yellow or green peel. Bananas are rich in potassium, fiber, and vitamins B6 and C.Eaten fresh, blended into smoothies, sliced on cereals or yogurt, and used in baking.          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant='contained' onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 395, width: '95%' }}>
        <CardMedia>
          <img
            src={staticData.blueberry} // Update this path to your image
            alt="My Image"
            style={{ width: '95%', height: '250px', objectFit: 'cover' }}
          />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Blueberry
          </Typography>
          <del>&#8377;500</del>
          <b>Discounted&#8377;300</b>
          <Typography variant="body2" color="text.secondary">
          Small, round berries with a deep blue-purple color. Blueberries are packed with antioxidants, vitamins C and K, and dietary fiber. Eaten fresh, added to cereals, yogurt, smoothies, baked into muffins, or used in jams and sauces.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant='contained' onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 395, width: '95%' }}>
        <CardMedia>
          <img
            src={staticData.carrot} // Update this path to your image
            alt="My Image"
            style={{ width: '95%', height: '250px', objectFit: 'cover' }}
          />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Carrot
          </Typography>
          <del>&#8377;120</del>
          <b>Discounted&#8377;70</b>
          <Typography variant="body2" color="text.secondary">
          Root vegetable with an orange color and crunchy texture. Carrots are rich in beta-carotene (which converts to vitamin A), fiber, and vitamins K and B6. Eaten raw as snacks, grated in salads, cooked in soups, stews, or roasted as a side dish.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant='contained' onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 395, width: '95%' }}>
        <CardMedia>
          <img
            src={staticData.cherry} // Update this path to your image
            alt="My Image"
            style={{ width: '95%', height: '250px', objectFit: 'cover' }}
          />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Cherry
          </Typography>
          <del>&#8377;300</del>
          <b>Discounted&#8377;170</b>
          <Typography variant="body2" color="text.secondary">
          Small, round fruits with a shiny red or dark purple skin and a pit inside. Cherries are rich in antioxidants, vitamins A and C, and fiber. Eaten fresh, used in pies, tarts, jams, and desserts like cherry clafoutis or cherry cheesecake.

          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant='contained' onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 395, width: '95%' }}>
        <CardMedia>
          <img
            src={staticData.custard} // Update this path to your image
            alt="My Image"
            style={{ width: '95%', height: '250px', objectFit: 'cover' }}
          />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Custard Apple
          </Typography>
          <del>&#8377;100</del>
          <b>Discounted&#8377;50</b>
          <Typography variant="body2" color="text.secondary">
          Custard apples are typically round or heart-shaped fruits with a rough, bumpy green skin. The skin can turn slightly yellowish as the fruit ripens. Inside, the fruit is segmented and contains creamy white flesh with dark brown seeds embedded in it.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant='contained' onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 395, width: '95%' }}>
        <CardMedia>
          <img
            src={staticData.dragon}// Update this path to your image
            alt="My Image"
            style={{ width: '95%', height: '250px', objectFit: 'cover' }}
          />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Dragon fruit
          </Typography>
          <del>&#8377;500</del>
          <b>&#8377;250</b>
          <Typography variant="body2" color="text.secondary">
          A tropical fruit with bright pink or yellow skin and green scales. The flesh is white or pink with tiny black seeds, similar to kiwi in texture. Eaten fresh, added to fruit salads, smoothies, or used as a decorative garnish.

          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant='contained' onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 395, width: '95%' }}>
        <CardMedia>
          <img
            src={staticData.grapes} // Update this path to your image
            alt="My Image"
            style={{ width: '95%', height: '250px', objectFit: 'cover' }}
          />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Grapes 
          </Typography>
          <del>&#8377;550</del>
          <b>&#8377;300</b>
          <Typography variant="body2" color="text.secondary">
          Small, round or oval berries that grow in clusters. Grapes come in various colors (green, red, purple) and are high in antioxidants, vitamins C and K, and fiber. Eaten fresh, dried (raisins), juiced, or used in wine-making and cooking (e.g., grape jelly).
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant='contained' onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 395, width: '95%' }}>
        <CardMedia>
          <img
            src={staticData.greenapple}// Update this path to your image
            alt="My Image"
            style={{ width: '95%', height: '250px', objectFit: 'cover' }}
          />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Green Apple
          </Typography>
          <del>&#8377;300</del>
          <b>&#8377;150</b>
          <Typography variant="body2" color="text.secondary">
          Crisp and tart apples with green skin. Green apples are low in calories and rich in fiber, vitamins C and K, and antioxidants. Eaten fresh, sliced on salads, used in pies, tarts, or sauces.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant='contained' onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 395, width: '95%' }}>
        <CardMedia>
          <img
            src={staticData.madrin} // Update this path to your image
            alt="My Image"
            style={{ width: '95%', height: '250px', objectFit: 'cover' }}
          />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Madrin Orange
          </Typography>
          <del>&#8377;400</del>
          <b>&#8377;200</b>
          <Typography variant="body2" color="text.secondary">
          Small citrus fruits with thin, easy-to-peel skin. Mandarins are sweet and juicy, rich in vitamin C, fiber, and antioxidants. Eaten fresh, added to salads, juiced, or used in desserts and preserves.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant='contained' onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 395, width: '95%' }}>
        <CardMedia>
          <img
            src={staticData.mango} // Update this path to your image
            alt="My Image"
            style={{ width: '95%', height: '250px', objectFit: 'cover' }}
          />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Mango 
          </Typography>
          <del>&#8377;300</del>
          <b>&#8377;200</b>
          <Typography variant="body2" color="text.secondary">
          A tropical fruit with a sweet, juicy flesh and a large flat seed inside. Mangos are high in vitamins A and C, fiber, and antioxidants. Eaten fresh, blended into smoothies, sliced in salads, made into salsa, or used in desserts like mango sticky rice.


          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant='contained' onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 395, width: '95%' }}>
        <CardMedia>
          <img
            src={staticData.mathulai} // Update this path to your image
            alt="My Image"
            style={{ width: '95%', height: '250px', objectFit: 'cover' }}
          />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           Mathulai 
          </Typography>
          <del>&#8377;200</del>
          <b>&#8377;150</b>
                                                                    
          <Typography variant="body2" color="text.secondary">
          Pomegranates are round, typically about the size of an apple, with a thick, leathery skin that ranges in color from red to yellow. The inside of the fruit is divided into compartments (arils) filled with juicy, ruby-red seeds encased in translucent pulp.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant='contained' onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </CardActions>
      </Card>

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

export default FuritsPageComp;