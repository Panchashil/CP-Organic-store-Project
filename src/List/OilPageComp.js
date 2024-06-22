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

const CardComp = () => {
  const [showCart, setShowCart] = useState(false); // State to control the visibility of CartComponent

  const handleAddToCart = () => {
    setShowCart(true);
  };

  return (
    <div style={styles.container}> {/* Flex container with styles for responsiveness */}
    
      <Card sx={{ maxWidth: 395, width: '95%' }}>
        <CardMedia>
          <img
            src={staticData.almondoil} // Update this path to your image
            alt="My Image"
            style={{ width: '95%', height: '250px', objectFit: 'cover' }}
          />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Almond Oil 
          </Typography>
          <Typography variant="body2" color="text.secondary">
          High in monounsaturated fats that promote heart health.Contains antioxidants like vitamin E,
          Low in saturated fats compared to other cooking oils. 



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
            src={staticData.avacadooil} // Update this path to your image
            alt="My Image"
            style={{ width: '95%', height: '250px', objectFit: 'cover' }}
          />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Avacado Oil
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Avocado oil is rich in monounsaturated fats, particularly oleic acid, which is beneficial for heart health. It helps lower bad cholesterol (LDL) levels and increase good cholesterol (HDL) levels.
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
            src={staticData.blackseedoil} // Update this path to your image
            alt="My Image"
            style={{ width: '95%', height: '250px', objectFit: 'cover' }}
          />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Blackseed Oil
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Contains essential fatty acids like omega-3 and omega-6, which support overall health and well-being.
          Rich in vitamins and minerals such as vitamin E, vitamin B complex, calcium, zinc, and potassium.
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
            src={staticData.castoroil} // Update this path to your image
            alt="My Image"
            style={{ width: '95%', height: '250px', objectFit: 'cover' }}
          />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           Castor Oil
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Rich in ricinoleic acid, which improves blood circulation to the scalp and stimulates hair follicles.
          Nourishes the scalp and strengthens hair roots, promoting healthy hair growth.
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
            src={staticData.chiaseedoil} // Update this path to your image
            alt="My Image"
            style={{ width: '95%', height: '250px', objectFit: 'cover' }}
          />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           Chisaseed Oil
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Chia seed oil is one of the richest plant sources of alpha-linolenic acid (ALA), an essential omega-3 fatty acid.
          Supports heart health by reducing inflammation and improving cholesterol levels.
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
            src={staticData.coconutoil} // Update this path to your image
            alt="My Image"
            style={{ width: '95%', height: '250px', objectFit: 'cover' }}
          />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           Coconut Oil
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Used in skincare for its moisturizing and nourishing properties.
Helps improve skin hydration, reduce inflammation, and protect against UV damage.
Can be used as a natural hair conditioner to promote shine and manageability.
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
            src={staticData.groundnutoil}// Update this path to your image
            alt="My Image"
            style={{ width: '95%', height: '250px', objectFit: 'cover' }}
          />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           Groundnut Oil
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Contains monounsaturated and polyunsaturated fats, which are beneficial for heart health.
Helps lower LDL (bad) cholesterol levels and increase HDL (good) cholesterol levels, reducing the risk of heart disease.

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
            src={staticData.oliveoil} // Update this path to your image
            alt="My Image"
            style={{ width: '95%', height: '250px', objectFit: 'cover' }}
          />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Olive Oil 
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Olive oil is predominantly composed of oleic acid, a monounsaturated fat that is considered heart-healthy.
          Helps reduce LDL (bad) cholesterol levels while increasing HDL (good) cholesterol levels, promoting cardiovascular health.
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
            src={staticData.pomogranateoil}// Update this path to your image
            alt="My Image"
            style={{ width: '95%', height: '250px', objectFit: 'cover' }}
          />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            PomogranateSeed Oil
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Punicic acid, also known as omega-5 fatty acid, is a potent antioxidant found in pomegranate seed oil.
          Helps protect against oxidative stress and free radical damage, promoting skin repair and rejuvenation.
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
            src={staticData.roseoil} // Update this path to your image
            alt="My Image"
            style={{ width: '95%', height: '250px', objectFit: 'cover' }}
          />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Rose Oil 
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Moisturizes and hydrates the skin, making it suitable for dry and sensitive skin types.
Helps reduce redness and inflammation, calming conditions like rosacea and dermatitis.
Improves skin tone and texture, promoting a more even complexion.
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
            src={staticData.sesameoil} // Update this path to your image
            alt="My Image"
            style={{ width: '95%', height: '250px', objectFit: 'cover' }}
          />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Sesame Oil 
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Contains healthy monounsaturated and polyunsaturated fats, including omega-6 fatty acids like linoleic acid.
Supports heart health by reducing LDL (bad) cholesterol levels and increasing HDL (good) cholesterol levels.

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
            src={staticData.sunflower} // Update this path to your image
            alt="My Image"
            style={{ width: '95%', height: '250px', objectFit: 'cover' }}
          />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           Sunflower Oil 
          </Typography>
          <Typography variant="body2" color="text.secondary">
          High in monounsaturated and polyunsaturated fats, including omega-6 fatty acids like linoleic acid.
          Helps lower LDL (bad) cholesterol levels and maintain HDL (good) cholesterol levels, supporting cardiovascular health.
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

export default CardComp;