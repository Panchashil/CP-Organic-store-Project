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

const VegetablesComp = () => {
    const [showCart, setShowCart] = useState(false); 

    const handleAddToCart = () => {
        setShowCart(true);
    };

    return (
        <div style={styles.container}>
            <Card sx={{ maxWidth: 395, width: '95%' }}>
                <CardMedia>
                    <img
                        src={staticData.beans} 
                        alt="My Image"
                        style={{ width: '95%', height: '250px', objectFit: 'cover' }}
                    />
                </CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Beans
                    </Typography>
                    <del>&#8377;450</del>
                    <b>Discounted&#8377;300</b>
                    <Typography variant="body2" color="text.secondary">
                        High in Protein: Beans are an excellent plant-based source of protein, essential for muscle repair and growth.

                        Rich in Fiber: They are packed with dietary fiber, which promotes digestive health, prevents constipation, and helps maintain a healthy weight.
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
                        src={staticData.beetroot} // Update this path to your image
                        alt="My Image"
                        style={{ width: '95%', height: '250px', objectFit: 'cover' }}
                    />
                </CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Beetroot
                    </Typography>
                    <del>&#8377;250</del>
                    <b>Discounted&#8377;200</b>
                    <Typography variant="body2" color="text.secondary">
                        Rich in Nutrients: Beetroot is loaded with vitamins and minerals such as folate, manganese, potassium, iron, and vitamin C.

                        High in Fiber: It contains both soluble and insoluble fiber, which promotes digestive health, regulates bowel movements, and may lower cholesterol levels.


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
                        src={staticData.brocoli} // Update this path to your image
                        alt="My Image"
                        style={{ width: '95%', height: '250px', objectFit: 'cover' }}
                    />
                </CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Brocoli
                    </Typography>   
                    <del>&#8377;300</del>
                    <b>Discounted&#8377;250</b>
                    <Typography variant="body2" color="text.secondary">
                        Rich in Nutrients: Broccoli is high in vitamins C, K, and A, as well as folate, manganese, and potassium.

                        High in Fiber: It provides a good amount of dietary fiber, which aids digestion, helps maintain bowel regularity, and supports a healthy gut.


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
                        src={staticData.cabbage} // Update this path to your image
                        alt="My Image"
                        style={{ width: '95%', height: '250px', objectFit: 'cover' }}
                    />
                </CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Cabbage
                    </Typography>
                    <del>&#8377;400</del>
                    <b>Discounted&#8377;200</b>
                    <Typography variant="body2" color="text.secondary">
                        Rich in Nutrients: Cabbage is low in calories but high in essential vitamins and minerals, including vitamin C, vitamin K, folate, and potassium.

                        High in Fiber: It provides a good amount of dietary fiber, which supports digestive health, aids in weight management, and helps regulate blood sugar levels.
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
                        src={staticData.garlic} // Update this path to your image
                        alt="My Image"
                        style={{ width: '95%', height: '250px', objectFit: 'cover' }}
                    />
                </CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Garlic
                    </Typography>
                    <del>&#8377;450</del>
                    <b>Discounted&#8377;300</b>
                    <Typography variant="body2" color="text.secondary">
                        Rich in Nutrients: garlic are packed with vitamins and minerals, including vitamin C, vitamin A, potassium, magnesium, and dietary fiber.

                        Antioxidant Properties: They contain antioxidants like vitamin C and compounds such as acetogenins and alkaloids, which help neutralize free radicals and protect cells from damage.
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
                        src={staticData.mushroom} // Update this path to your image
                        alt="My Image"
                        style={{ width: '95%', height: '250px', objectFit: 'cover' }}
                    />
                </CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Mushroom
                    </Typography>
                    <del>&#8377;250</del>
                    <b>Discounted&#8377;150</b>
                    <Typography variant="body2" color="text.secondary">
                        Rich in Nutrients: Mushroom  is low in calories but rich in essential vitamins and minerals such as vitamin C, vitamin B6, iron, and magnesium. It also contains dietary fiber, which supports digestive health.

                        Antioxidant Properties: Dragon fruit is loaded with antioxidants such as betalains and vitamin C,
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
                        src={staticData.onion}// Update this path to your image
                        alt="My Image"
                        style={{ width: '95%', height: '250px', objectFit: 'cover' }}
                    />
                </CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Onion
                    </Typography>
                    <del>&#8377;300</del>
                    <b>Discounted&#8377;250</b>
                    <Typography variant="body2" color="text.secondary">
                        Antioxidant Power: Onions are packed with antioxidants, including resveratrol, flavonoids, and vitamin C. These compounds help protect cells from damage caused by free radicals, which can reduce the risk of chronic diseases like cancer and heart disease.

                        Heart Health: Resveratrol, particularly abundant in grape skins, has been linked to heart health benefits.

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
                        src={staticData.peas} // Update this path to your image
                        alt="My Image"
                        style={{ width: '95%', height: '250px', objectFit: 'cover' }}
                    />
                </CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Peas
                    </Typography>
                    <del>&#8377;300</del>
                    <b>Discounted&#8377;250</b>
                    <Typography variant="body2" color="text.secondary">
                        Rich in Nutrients: Peas are a good source of vitamins and minerals, including vitamin C, vitamin K, potassium, and dietary fiber. They also contain small amounts of B vitamins like riboflavin and vitamin B6.

                        Digestive Health: The high fiber content in green apples supports digestive health by promoting regular bowel movements and preventing constipation.
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
                        src={staticData.tomato}// Update this path to your image
                        alt="My Image"
                        style={{ width: '95%', height: '250px', objectFit: 'cover' }}
                    />
                </CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Tomato
                    </Typography>
                    <del>&#8377;290</del>
                    <b>Discounted&#8377;250</b>
                    <Typography variant="body2" color="text.secondary">
                        Rich in Nutrients: tomatoes are packed with vitamins and minerals, including vitamin C, vitamin A, potassium, and folate. They are also low in calories and contain dietary fiber.

                        Boost Immune System: High vitamin C content in mandarins helps strengthen the immune system by supporting the production of white blood cells and antibodies, which are crucial for fighting infections.
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
                        src={staticData.Corn} // Update this path to your image
                        alt="My Image"
                        style={{ width: '95%', height: '250px', objectFit: 'cover' }}
                    />
                </CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Corn
                    </Typography>
                    <del>&#8377;200</del>
                    <b>Discounted&#8377;100</b>
                    <Typography variant="body2" color="text.secondary">
                        Promotes Eye Health: The beta-carotene in corn is converted into vitamin A, which is essential for maintaining healthy vision.

                        May Help Lower Cholesterol: The fiber, pectin, and vitamin C content in mangoes may contribute to lowering serum cholesterol levels.

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

export default VegetablesComp;