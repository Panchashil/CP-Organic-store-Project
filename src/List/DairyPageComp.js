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

const DairyPageComp = () => {
    const [showCart, setShowCart] = useState(false); 

    const handleAddToCart = () => {
        setShowCart(true);
    };

    return (
        <div style={styles.container}>
            <Card sx={{ maxWidth: 395, width: '95%' }}>
                <CardMedia>
                    <img
                        src={staticData.milk} 
                        alt="My Image"
                        style={{ width: '95%', height: '250px', objectFit: 'cover' }}
                    />
                </CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Milk
                    </Typography>
                    <del>&#8377;100</del>
                    <b>Discounted&#8377;60</b>
                    <Typography variant="body2" color="text.secondary">
                    Milk is a nutrient-rich liquid produced by mammals for feeding their young. Cow's milk is most commonly consumed by humans, but milk from goats, sheep, and other mammals is also consumed. Milk is a rich source of calcium, protein, vitamins (especially vitamin D if fortified), and minerals like phosphorus and potassium.
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
                        src={staticData.cheese} // Update this path to your image
                        alt="My Image"
                        style={{ width: '95%', height: '250px', objectFit: 'cover' }}
                    />
                </CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Cheese
                    </Typography>
                    <del>&#8377;300</del>
                    <b>Discounted&#8377;150</b>
                    <Typography variant="body2" color="text.secondary">
                    Cheese is a dairy product made from curdled or coagulated milk that is then pressed and aged. There are countless varieties of cheese with different flavors, textures, and uses. Cheese is rich in protein, calcium, vitamins (such as vitamin B12), and minerals (like phosphorus).
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
                        src={staticData.butter} // Update this path to your image
                        alt="My Image"
                        style={{ width: '95%', height: '250px', objectFit: 'cover' }}
                    />
                </CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Butter
                    </Typography>
                    <del>&#8377;330</del>
                    <b>Discounted&#8377;170</b>
                    <Typography variant="body2" color="text.secondary">
                    Butter is a dairy product made by churning milk or cream to separate the butterfat from the buttermilk. It is solid at room temperature and primarily composed of milk fat.Butter is used as a spread, in cooking, baking, and as a flavoring agent in sauces and dishes.
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
                        src={staticData.clottedcream} // Update this path to your image
                        alt="My Image"
                        style={{ width: '95%', height: '250px', objectFit: 'cover' }}
                    />
                </CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Clotted Cream
                    </Typography>
                    <del>&#8377;300</del>
                    <b>Discounted&#8377;170</b>
                    <Typography variant="body2" color="text.secondary">
                    Clotted cream is a thick cream made by indirectly heating full-fat cow's milk, allowing the cream to rise to the surface and then cooling it. It has a high fat content and a dense, silky textureClotted cream is a traditional accompaniment to scones in British cuisine, often served with jam as part of a cream tea.

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
                        src={staticData.condensemilk} // Update this path to your image
                        alt="My Image"
                        style={{ width: '95%', height: '250px', objectFit: 'cover' }}
                    />
                </CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Condense Milk
                    </Typography>
                    <del>&#8377;450</del>
                    <b>Discounted&#8377;300</b>
                    <Typography variant="body2" color="text.secondary">
                    Condensed milk is cow's milk from which water has been removed and sugar added, creating a thick, sweetened product. It is commonly sold in cans. Condensed milk is used in desserts, candies, and beverages to add sweetness and richness. It is a key ingredient in dishes like fudge, flan, and Vietnamese iced coffee.
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
                        src={staticData.driedmilk} // Update this path to your image
                        alt="My Image"
                        style={{ width: '95%', height: '250px', objectFit: 'cover' }}
                    />
                </CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Dried Milk
                    </Typography>
                    <del>&#8377;400</del>
                    <b>Discounted&#8377;200</b>
                    <Typography variant="body2" color="text.secondary">
                    Dried milk is milk that has been evaporated to remove moisture, resulting in a powdered form that can be reconstituted with water to make liquid milk.Powdered milk is used as a convenient alternative to liquid milk, especially in areas where fresh milk is not readily available. It is also used in baking, cooking, and making milk-based beverages.
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
                        src={staticData.ghee}// Update this path to your image
                        alt="My Image"
                        style={{ width: '95%', height: '250px', objectFit: 'cover' }}
                    />
                </CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Ghee
                    </Typography>
                    <del>&#8377;220</del>
                    <b>Discounted&#8377;170</b>
                    <Typography variant="body2" color="text.secondary">
                    Ghee is a type of clarified butter prepared by simmering butter to separate the milk solids and water from the butterfat. It has a rich, nutty flavor and a high smoke point.Ghee is widely used in Indian and Middle Eastern cuisines for cooking, frying, and flavoring dishes. It has a longer shelf life than butter and is prized for its flavor and health benefits.
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
                        src={staticData.icecreams} // Update this path to your image
                        alt="My Image"
                        style={{ width: '95%', height: '250px', objectFit: 'cover' }}
                    />
                </CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Ice Creams
                    </Typography>
                    <del>&#8377;300</del>
                    <b>Discounted&#8377;150</b>
                    <Typography variant="body2" color="text.secondary">
                    Ice cream is a frozen dessert made from dairy products such as milk, cream, and sometimes other ingredients like sugar, flavorings, and additives Ice cream is enjoyed as a dessert on its own or as a topping for other desserts. It comes in numerous flavors and variations, including sorbet and gelato.


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
                        src={staticData.kerif}// Update this path to your image
                        alt="My Image"
                        style={{ width: '95%', height: '250px', objectFit: 'cover' }}
                    />
                </CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Kerif
                    </Typography>
                    <del>&#8377;400</del>
                    <b>Discounted&#8377;250</b>
                    <Typography variant="body2" color="text.secondary">
                    Kefir is a fermented milk drink made by adding kefir grains to milk, which contain bacteria and yeast cultures. It has a slightly sour taste and a texture similar to thin yogurt. Kefir is rich in probiotics, which are beneficial for gut health and digestion. It also provides protein, calcium, and vitamins.
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
                        src={staticData.aryan} // Update this path to your image
                        alt="My Image"
                        style={{ width: '95%', height: '250px', objectFit: 'cover' }}
                    />
                </CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Aryan
                    </Typography>
                    <del>&#8377;200</del>
                    <b>Discounted&#8377;180</b>
                    <Typography variant="body2" color="text.secondary">
                    A traditional yogurt-based drink popular in Middle Eastern and Central Asian cuisines. It is made by mixing yogurt with water and sometimes salt. It has a slightly salty and tangy flavor. Aryan is often consumed as a refreshing beverage on its own or served alongside meals to balance flavors.

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

export default DairyPageComp;
