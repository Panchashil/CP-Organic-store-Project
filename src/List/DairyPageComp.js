// src/components/DairyPageComp.js
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice'; // Ensure this is the correct path and action
import staticData from '../shared/constant/ConstantData'; // Ensure this is the correct path

const DairyPageComp = () => {
    const dispatch = useDispatch();

    const handleAddToCart = (item) => {
        dispatch(addItem(item)); // Dispatch the addItem action with the item as payload
    };

    const items = [
        {
            id: 1,
            name: 'Milk',
            price: 60,
            originalPrice: 100,
            image: staticData.milk,
            description: 'Milk is a nutrient-rich liquid produced by mammals for feeding their young. Cow\'s milk is most commonly consumed by humans, but milk from goats, sheep, and other mammals is also consumed. Milk is a rich source of calcium, protein, vitamins (especially vitamin D if fortified), and minerals like phosphorus and potassium.',
        },
        {
            id: 2,
            name: 'Cheese',
            price: 150,
            originalPrice: 300,
            image: staticData.cheese,
            description: 'Cheese is a dairy product made from curdled or coagulated milk that is then pressed and aged. There are countless varieties of cheese with different flavors, textures, and uses. Cheese is rich in protein, calcium, vitamins (such as vitamin B12), and minerals (like phosphorus).',
        },
        {
            id: 3,
            name: 'Butter',
            price: 170,
            originalPrice: 330,
            image: staticData.butter,
            description: 'Butter is a dairy product made by churning milk or cream to separate the butterfat from the buttermilk. It is solid at room temperature and primarily composed of milk fat. Butter is used as a spread, in cooking, baking, and as a flavoring agent in sauces and dishes.',
        },
        {
            id: 4,
            name: 'Clotted Cream',
            price: 170,
            originalPrice: 300,
            image: staticData.clottedcream,
            description: 'Clotted cream is a thick cream made by indirectly heating full-fat cow\'s milk, allowing the cream to rise to the surface and then cooling it. It has a high fat content and a dense, silky texture. Clotted cream is a traditional accompaniment to scones in British cuisine, often served with jam as part of a cream tea.',
        },
        {
            id: 5,
            name: 'Condensed Milk',
            price: 300,
            originalPrice: 450,
            image: staticData.condensemilk,
            description: 'Condensed milk is cow\'s milk from which water has been removed and sugar added, creating a thick, sweetened product. It is commonly sold in cans. Condensed milk is used in desserts, candies, and beverages to add sweetness and richness. It is a key ingredient in dishes like fudge, flan, and Vietnamese iced coffee.',
        },
        {
            id: 6,
            name: 'Dried Milk',
            price: 200,
            originalPrice: 400,
            image: staticData.driedmilk,
            description: 'Dried milk is milk that has been evaporated to remove moisture, resulting in a powdered form that can be reconstituted with water to make liquid milk. Powdered milk is used as a convenient alternative to liquid milk, especially in areas where fresh milk is not readily available. It is also used in baking, cooking, and making milk-based beverages.',
        },
        {
            id: 7,
            name: 'Ghee',
            price: 170,
            originalPrice: 220,
            image: staticData.ghee,
            description: 'Ghee is a type of clarified butter prepared by simmering butter to separate the milk solids and water from the butterfat. It has a rich, nutty flavor and a high smoke point. Ghee is widely used in Indian and Middle Eastern cuisines for cooking, frying, and flavoring dishes. It has a longer shelf life than butter and is prized for its flavor and health benefits.',
        },
        {
            id: 8,
            name: 'Ice Creams',
            price: 150,
            originalPrice: 300,
            image: staticData.icecreams,
            description: 'Ice cream is a frozen dessert made from dairy products such as milk, cream, and sometimes other ingredients like sugar, flavorings, and additives. Ice cream is enjoyed as a dessert on its own or as a topping for other desserts. It comes in numerous flavors and variations, including sorbet and gelato.',
        },
        {
            id: 9,
            name: 'Kefir',
            price: 250,
            originalPrice: 400,
            image: staticData.kerif,
            description: 'Kefir is a fermented milk drink made by adding kefir grains to milk, which contain bacteria and yeast cultures. It has a slightly sour taste and a texture similar to thin yogurt. Kefir is rich in probiotics, which are beneficial for gut health and digestion. It also provides protein, calcium, and vitamins.',
        },
        {
            id: 10,
            name: 'Aryan',
            price: 180,
            originalPrice: 200,
            image: staticData.aryan,
            description: 'A traditional yogurt-based drink popular in Middle Eastern and Central Asian cuisines. It is made by mixing yogurt with water and sometimes salt. It has a slightly salty and tangy flavor. Aryan is often consumed as a refreshing beverage on its own or served alongside meals to balance flavors.',
        },
    ];

    return (
        <div style={styles.container}>
            {items.map((item) => (
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
                        <del>&#8377;{item.originalPrice}</del>
                        <b> Discounted &#8377;{item.price}</b>
                        <Typography variant="body2" color="text.secondary">
                            {item.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" variant='contained' onClick={() => handleAddToCart(item)}>
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

export default DairyPageComp;
