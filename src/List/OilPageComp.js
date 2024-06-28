/* eslint-disable jsx-a11y/img-redundant-alt */
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addedItems } from '../utils/cartSlice';

const data = [
  {
    "image": "https://images.pexels.com/photos/18066457/pexels-photo-18066457/free-photo-of-almond-oil-in-bottle.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "name": "Almond Oil",
    "description": "High in monounsaturated fats that promote heart health.Contains antioxidants like vitamin E, Low in saturated fats compared to other cooking oils.",
    "price": "120/-"
  },
  {
    "image": "https://media.istockphoto.com/id/1372536271/photo/avocado-oil.webp?b=1&s=170667a&w=0&k=20&c=Bt8gTRIRZjRP2yRDoFjKu2RmQ0oUiib79gFq2Eq2J6U=",
    "name": "Avacado Oil",
    "description": "Avocado oil is rich in monounsaturated fats, particularly oleic acid, which is beneficial for heart health. It helps lower bad cholesterol (LDL) levels and increase good cholesterol (HDL) levels.",
    "price": "220/-"
  },
  {
    "image": "https://tse1.mm.bing.net/th?id=OIP.-S1jxp-jDQ2xlSDGFsNcdQHaJQ&pid=Api&P=0&h=180",
    "name": "Blackseed Oil",
    "description": "Contains essential fatty acids like omega-3 and omega-6, which support overall health and well-being. Rich in vitamins and minerals such as vitamin E, vitamin B complex, calcium, zinc, and potassium.",
    "price": "80/-"
  },
  {
    "image": "https://tse4.mm.bing.net/th?id=OIP.qBZ5ctb-CY-WKDeSuHu-_QHaE7&pid=Api&P=0&h=180",
    "name": "Castor Oil",
    "description": "Rich in ricinoleic acid, which improves blood circulation to the scalp and stimulates hair follicles. Nourishes the scalp and strengthens hair roots, promoting healthy hair growth.",
    "price": "170/-"
  }
]


const OilPageComp = (props) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items)
  console.log(data);
  const handleAddItems = (eachItem) => {
    dispatch(addedItems(eachItem))

  }

  console.log(cartItems.length)
  return (
    <div>
      <div style={styles.container}>
        {data.map(eachItem =>
          <Card sx={{ maxWidth: 395, width: '95%' }}>
            <CardMedia>
              <img src={eachItem.image} alt={eachItem.name} style={{ width: '95%', height: '250px', objectFit: 'cover' }} />
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">{eachItem.name}</Typography>
              <Typography>{eachItem.description}</Typography>

              <b>Price - &#8377; {eachItem.price}</b>
              <CardActions>
                <Button size="small" variant='contained' onClick={() => handleAddItems(eachItem)}  >ADD TO CART</Button>
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
};


export default OilPageComp;