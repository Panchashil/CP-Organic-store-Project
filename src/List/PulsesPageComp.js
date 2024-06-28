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

const PulsesPageComp = () => {
    const [showCart, setShowCart] = useState(false); 

    const handleAddToCart = () => {
        setShowCart(true);
    };

    return (
        <div style={styles.container}>
            <Card sx={{ maxWidth: 395, width: '95%' }}>
                <CardMedia>
                    <img
                        src={staticData.arharldal} 
                        alt="My Image"
                        style={{ width: '95%', height: '250px', objectFit: 'cover' }}
                    />
                </CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Arhar Dal
                    </Typography>
                    <del>&#8377;400</del>
                    <b>Discounted&#8377;200</b>
                    <Typography variant="body2" color="text.secondary">
                        Arhar dal is highly nutritious and a good source of protein, complex carbohydrates, dietary fiber, and essential nutrients such as vitamins (particularly folate, vitamin B6, and vitamin C) and minerals (including iron, potassium, magnesium, and zinc).
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
                        src={staticData.bambara} // Update this path to your image
                        alt="My Image"
                        style={{ width: '95%', height: '250px', objectFit: 'cover' }}
                    />
                </CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Bambara Dal
                    </Typography>
                    <del>&#8377;750</del>
                    <b>Discounted&#8377;400</b>
                    <Typography variant="body2" color="text.secondary">
                        Bambara dal is highly nutritious, rich in protein (about 18-25% protein content), dietary fiber, and essential nutrients such as calcium, iron, potassium, magnesium, zinc, and vitamins (particularly B vitamins like thiamine and niacin)
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
                        src={staticData.fenugreek} // Update this path to your image
                        alt="My Image"
                        style={{ width: '95%', height: '250px', objectFit: 'cover' }}
                    />
                </CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Fenugreek Dal
                    </Typography>
                    <del>&#8377;350</del>
                    <b>Discounted&#8377;300</b>
                    <Typography variant="body2" color="text.secondary">
                        Fenugreek leaves are rich in vitamins (particularly vitamin K and vitamin C), minerals (such as iron, calcium, and potassium), and dietary fiber. Lentils provide protein, fiber, and essential nutrients like folate and manganese.
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
                        src={staticData.greengram} // Update this path to your image
                        alt="My Image"
                        style={{ width: '95%', height: '250px', objectFit: 'cover' }}
                    />
                </CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Green Gram
                    </Typography>
                    <del>&#8377;510</del>
                    <b>Discounted&#8377;350</b>
                    <Typography variant="body2" color="text.secondary">
                        Green gram is highly nutritious, rich in protein (about 24-28% protein content), dietary fiber, and essential nutrients such as vitamins (particularly folate, vitamin B6, and vitamin C) and minerals (including potassium, magnesium, iron, and zinc).
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
                        src={staticData.kaladal} // Update this path to your image
                        alt="My Image"
                        style={{ width: '95%', height: '250px', objectFit: 'cover' }}
                    />
                </CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Kala Dal
                    </Typography>
                    <del>&#8377;550</del>
                    <b>Discounted&#8377;330</b>
                    <Typography variant="body2" color="text.secondary">
                        Kala dal is highly nutritious, rich in protein (about 25-30% protein content), dietary fiber, and essential nutrients such as iron, potassium, magnesium, calcium, folate, and vitamins (particularly vitamin B6).
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
                        src={staticData.rajma} // Update this path to your image
                        alt="My Image"
                        style={{ width: '95%', height: '250px', objectFit: 'cover' }}
                    />
                </CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Rajam
                    </Typography>
                    <del>&#8377;450</del>
                    <b>Discounted&#8377;350</b>
                    <Typography variant="body2" color="text.secondary">
                        Rajma (kidney beans) are nutritious legumes rich in protein, dietary fiber, vitamins (particularly folate and vitamin B1), minerals (including iron, potassium, magnesium, and zinc), and antioxidants.
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
                        src={staticData.soya}// Update this path to your image
                        alt="My Image"
                        style={{ width: '95%', height: '250px', objectFit: 'cover' }}
                    />
                </CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Soya
                    </Typography>
                    <del>&#8377;300</del>
                    <b>Discounted&#8377;150</b>
                    <Typography variant="body2" color="text.secondary">
                        Soya beans are highly nutritious and are considered a complete protein source, containing all essential amino acids necessary for human health. They are rich in protein (about 36-38% protein content), dietary fiber, and essential nutrients such as iron, calcium, magnesium, potassium, phosphorus, zinc, folate, and vitamins (particularly vitamin K and several B vitamins including folate).
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
                        src={staticData.gungpeas} // Update this path to your image
                        alt="My Image"
                        style={{ width: '95%', height: '250px', objectFit: 'cover' }}
                    />
                </CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Gung peas
                    </Typography>
                    <del>&#8377;700</del>
                    <b>Discounted&#8377;350</b>
                    <Typography variant="body2" color="text.secondary">
                        Chickpeas are highly nutritious legumes packed with protein (about 19-20% protein content), dietary fiber, and essential nutrients such as iron, folate, phosphorus, manganese, and vitamins (particularly vitamin B6).


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
                        src={staticData.pinto}// Update this path to your image
                        alt="My Image"
                        style={{ width: '95%', height: '250px', objectFit: 'cover' }}
                    />
                </CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Pinto Beans
                    </Typography>
                    <del>&#8377;800</del>
                    <b>Discounted&#8377;500</b>
                    <Typography variant="body2" color="text.secondary">
                    Pinto beans, scientifically known as Phaseolus vulgaris, are oval-shaped beans with a beige background speckled with reddish-brown spots or streaks. The name "pinto" means "painted" in Spanish, referring to their appearance.
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
                        src={staticData.marrowfat} // Update this path to your image
                        alt="My Image"
                        style={{ width: '95%', height: '250px', objectFit: 'cover' }}
                    />
                </CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Marrow fat
                    </Typography>
                    <del>&#8377;500</del>
                    <b>Discounted&#8377;300</b>
                    <Typography variant="body2" color="text.secondary">
                    Marrow fat is rich in monounsaturated fats, particularly oleic acid, which is also found in olive oil. It also contains saturated fats, although in varying proportions depending on the animal's diet and health.

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

export default PulsesPageComp;
