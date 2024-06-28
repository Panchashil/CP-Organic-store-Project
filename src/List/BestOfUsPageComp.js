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
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Box } from '@mui/material';

const BestofusPageComp = () => {
  const [showCart, setShowCart] = useState(false); // State to control the visibility of CartComponent

  const handleAddToCart = () => {
    setShowCart(true);
  };

  return (
    <div>
      <div style={{ width: '100%' }} className="container-fluid" >
      <AppBar position="static" sx={{ backgroundColor: '#008024', padding: '10px',borderRadius:'4px'}}>
        <Toolbar>
          <Box display="flex" alignItems="center" sx={{ flexGrow: 1 }}>
            <Box
              component="img"
              src="https://img.freepik.com/premium-photo/green-leaf-logo-with-gold-leaf-dark-background-generative-ai_958098-12504.jpg"
              alt="Institute Logo" style={{borderRadius:"50%"}}
              sx={{
                marginRight: { xs: 1, sm: 2 },
              //   height: { xs: 60, sm: 80, md: 100 },
              //   width: { xs: 60, sm: 80, md: 100 },
                padding: { xs: 1, sm: 2 },
                margin: { xs: 1, sm: 2 }
                
              }}
              height={150}
              width={150}
            />
            <Box
            //   component="img"
            //   src={logo1image}
            //   alt="logo"
            //   sx={{
            //     marginRight: { xs: 1, sm: 2 },
            //     // height: { xs: 80, sm: 100, md: 120 },
            //     // width: { xs: 100, sm: 130, md: 150 },
            //     padding: { xs: 1, sm: 2 },
            //     margin: { xs: 1, sm: 2 }
            //   }}
            //   height={150}
            //   width={220}
            />
            <Typography variant="h4" color="white" 
            sx={{ 
              marginLeft: { xs: 0, sm: 2 }, 
              fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' ,lg:'4rem' },
              fontFamily: 'Brush Script MT',
              color:""
            //   fontWeight: 'bold'
            }}
      >
              Organic Products
              
            </Typography>
          </Box>
          <Button 
            color="inherit"
            component={Link}
            to={`/Login`}
            sx={{
              backgroundColor: '#147ae1',
              color: '#f0f0f0',
              borderRadius: '3px',
              padding: '8px 16px',
              boxShadow: '1px 2px 5px #000000',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#115dd0',
                color: '#f0f0f0'
              }
            }}
          
          >Login</Button>
         </Toolbar>
        <Box bgcolor='#f0f0f0' borderRadius="3px" marginTop="20px">
          <Toolbar>
            <Box sx={{ flexGrow: 1 }} />
            <Button 
              color="inherit" 
              component={Link} to = "/"
              sx={{ color: '#000', fontWeight: 'bold', '&:hover': { backgroundColor: '#ccc' } }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Home&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </Button>
            <Button 
              color="inherit" 
              component={Link} 
              to= {`/AboutPage`}
              sx={{ color: '#000', fontWeight: 'bold', '&:hover': { backgroundColor: '#ccc' } }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;About&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </Button>
            <Button 
              color="inherit" 
              component={Link} 
              to={`/ContactPage`}
              sx={{ color: '#000', fontWeight: 'bold', '&:hover': { backgroundColor: '#ccc' } }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contact&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </Button>
            <Button 
              color="inherit" 
              component={Link} 
              to={`/BestofusPage`}
              sx={{ color: '#000', fontWeight: 'bold', '&:hover': { backgroundColor: '#ccc' } }}
            >
              &nbsp;&nbsp;&nbsp;Ourbest&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </Button>
            {/* <Button 
              color="inherit" 
              component={Link} 
              to={`./ContactUs`}
              sx={{ color: '#000', fontWeight: 'bold', '&:hover': { backgroundColor: '#ccc' } }}
            >
              Contact Us
            </Button> */}
          </Toolbar>
        </Box>
      </AppBar>
    </div><center><strong><h1 className='mb-0 mt-3 bg-secondary py-5'  >Best For your Health</h1></strong></center>
    
    <div className='bg-secondary' style={styles.container} styles={{backgroundColor: '#333333'}}> 
      
    {/* Flex container with styles for responsiveness */}
      <Card sx={{ maxWidth: 395, width: '95%' }}>
        <CardMedia>
            <center><img
            src={staticData.Corn} // Update this path to your image
            alt="My Image"
            style={{ width: '95%', height: '250px', objectFit: 'cover' }}
          /></center>
          
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Corn
          </Typography>
          <del>&#8377;600</del>
          <b>Discounted&#8377;300</b>

          <Typography variant="body2" color="text.secondary">
           A creamy fruit with a buttery texture and a large seed inside. Avocados are high in healthy fats, fiber, potassium, and vitamins E, K, and C.
           Often used in salads, sandwiches (like avocado toast), guacamole, and as a garnish.


          </Typography>
        </CardContent>
        <CardActions className='bg-warning'>
        <Link to="/Login" className='btn btn-primary'>Add to cart</Link> &nbsp;
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
          chiaseedoil
          </Typography>
          <del>&#8377;100</del>
          <b>Discounted&#8377;50</b>
          <Typography variant="body2" color="text.secondary">
          A tropical fruit with a soft, creamy flesh encased in a yellow or green peel. Bananas are rich in potassium, fiber, and vitamins B6 and C.Eaten fresh, blended into smoothies, sliced on cereals or yogurt, and used in baking.          </Typography>
        </CardContent>
        <CardActions className='bg-warning'>
        <Link to="/Login" className='btn btn-primary'>Add to cart</Link> &nbsp;
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
        <CardActions className='bg-warning'>
        <Link to="/Login" className='btn btn-primary'>Add to cart</Link> &nbsp;
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
        <CardActions className='bg-warning'>
        <Link to="/Login" className='btn btn-primary'>Add to cart</Link> &nbsp;
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
        <CardActions className='bg-warning'>
        <Link to="/Login" className='btn btn-primary'>Add to cart</Link> &nbsp;
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
        <CardActions className='bg-warning'>
        <Link to="/Login" className='btn btn-primary'>Add to cart</Link> &nbsp;
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 395, width: '95%' }}>
        <CardMedia>
          <img
            src={staticData.cabbage}// Update this path to your image
            alt="My Image"
            style={{ width: '95%', height: '250px', objectFit: 'cover' }}
          />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          cabbage
          </Typography>
          <del>&#8377;500</del>
          <b>&#8377;250</b>
          <Typography variant="body2" color="text.secondary">
          A tropical fruit with bright pink or yellow skin and green scales. The flesh is white or pink with tiny black seeds, similar to kiwi in texture. Eaten fresh, added to fruit salads, smoothies, or used as a decorative garnish.

          </Typography>
        </CardContent>
        <CardActions className='bg-warning'>
        <Link to="/Login" className='btn btn-primary'>Add to cart</Link> &nbsp;
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
          Small, round or oval berries that grow in clusters. Grapes come in various colors (green, red, purple) and are high in antioxidants, vitamins C and K, and fiber. vitamins C and K, and fibe.
          </Typography>
        </CardContent>
        <CardActions className='bg-warning'>
        <Link to="/Login" className='btn btn-primary'>Add to cart</Link> &nbsp;
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 395, width: '95%' }}>
        <CardMedia>
          <img
            src={staticData.beetroot}// Update this path to your image
            alt="My Image"
            style={{ width: '95%', height: '250px', objectFit: 'cover' }}
          />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          beetroot
          </Typography>
          <del>&#8377;300</del>
          <b>&#8377;150</b>
          <Typography variant="body2" color="text.secondary">
          Crisp and tart apples with green skin. Green apples are low in calories and rich in fiber, vitamins C and K, and antioxidants. Eaten fresh, sliced on salads, used in pies, tarts, or sauces.
          </Typography>
        </CardContent>
        <CardActions className='bg-warning'>
        <Link to="/Login" className='btn btn-primary'>Add to cart</Link> &nbsp;
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
          Small citrus fruits with thin, easy-to-peel skin. Mandarins are sweet and juicy, rich in vitamin C, fiber, and antioxidants. Eaten fresh, added to salads, juiced, or used in desserts and preserves.Eaten fresh, blended into smoothies
          </Typography>
        </CardContent>
        <CardActions className='bg-warning'>
        <Link to="/Login" className='btn btn-primary'>Add to cart</Link> &nbsp;
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
          A tropical fruit with a sweet, juicy flesh and a large flat seed inside. Mangos are high in vitamins A and C, fiber, and antioxidants. Eaten fresh, blended into smoothies, sliced in salads, made into salsa vitamins C and K, and fibe


          </Typography>
        </CardContent>
        <CardActions className='bg-warning'>
        <Link to="/Login" className='btn btn-primary'>Add to cart</Link> &nbsp;
        </CardActions>
      </Card>

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
          avacado 
          </Typography>
          <del>&#8377;200</del>
          <b>&#8377;150</b>
          <Typography variant="body2" color="text.secondary">
          Pomegranates are round, typically about the size of an apple, with a thick, leathery skin that ranges in color from red to yellow. The inside of the fruit is divided into compartments (arils) filled with juicy, ruby-red seeds encased in translucent pulp.
          </Typography>
        </CardContent>
        <CardActions className='bg-warning'>
        <Link to="/Login" className='btn btn-primary'>Add to cart</Link> &nbsp;
        </CardActions>
      </Card>

 
    </div>  <center><h1 className='bg-secondary' >Visit Again</h1></center>   
    
    <footer className="py-4 bg-white">
                <div className="container-fluid mt-2 text-center">
                    <h5 className="mb-4">You can buy this with</h5>
                    <div className="d-flex justify-content-center align-items-center flex-wrap">
                        <div className="mx-3">
                            <img src={staticData.gpay} alt="PayTM" style={{ height: '40px' }} />
                            <p>PayTM</p>
                        </div>
                        <div className="mx-3">
                            <img src={staticData.phonepe} alt="Google Pay" style={{ height: '40px' }} />
                            <p>GPay</p>
                        </div>
                        <div className="mx-3">
                            <img src={staticData.master} alt="PhonePe" style={{ height: '40px' }} />
                            <p>PhonePe</p>
                        </div>
                        <div className="mx-3">
                            <img src={staticData.visa} alt="PayPal" style={{ height: '40px' }} />
                            <p>PayPal</p>
                        </div>
                        <div className="mx-3">
                            <img src={staticData.upi} alt="UPI" style={{ height: '40px' }} />
                            <p>UPI</p>
                        </div>
                    </div>
                </div>
            </footer>
</div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px',
    justifyContent: 'center',
    marginBottom : "30px"
  },
};

export default BestofusPageComp;