import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice'; // Ensure addItem is correctly imported
import staticData from '../shared/constant/ConstantData';

const VegetablesComp = () => {
    const dispatch = useDispatch();

    const handleAddToCart = (item) => {
        dispatch(addItem(item)); // Use addItem action
    };

    // Updated items array with unique IDs
    const items = [
        {
            id: 1,
            src: staticData.beans,
            title: "Beans",
            originalPrice: 450,
            discountedPrice: 300,
            description: `High in Protein: Beans are an excellent plant-based source of protein, essential for muscle repair and growth.\n\nRich in Fiber: They are packed with dietary fiber, which promotes digestive health, prevents constipation, and helps maintain a healthy weight.`,
        },
        {
            id: 2,
            src: staticData.beetroot,
            title: "Beetroot",
            originalPrice: 250,
            discountedPrice: 200,
            description: `Rich in Nutrients: Beetroot is loaded with vitamins and minerals such as folate, manganese, potassium, iron, and vitamin C.\n\nHigh in Fiber: It contains both soluble and insoluble fiber, which promotes digestive health, regulates bowel movements, and may lower cholesterol levels.`,
        },
        {
            id: 3,
            src: staticData.brocoli,
            title: "Broccoli",
            originalPrice: 300,
            discountedPrice: 250,
            description: `Rich in Nutrients: Broccoli is high in vitamins C, K, and A, as well as folate, manganese, and potassium.\n\nHigh in Fiber: It provides a good amount of dietary fiber, which aids digestion, helps maintain bowel regularity, and supports a healthy gut.`,
        },
        {
            id: 4,
            src: staticData.cabbage,
            title: "Cabbage",
            originalPrice: 400,
            discountedPrice: 200,
            description: `Rich in Nutrients: Cabbage is low in calories but high in essential vitamins and minerals, including vitamin C, vitamin K, folate, and potassium.\n\nHigh in Fiber: It provides a good amount of dietary fiber, which supports digestive health, aids in weight management, and helps regulate blood sugar levels.`,
        },
        {
            id: 5,
            src: staticData.garlic,
            title: "Garlic",
            originalPrice: 450,
            discountedPrice: 300,
            description: `Rich in Nutrients: Garlic is packed with vitamins and minerals, including vitamin C, vitamin A, potassium, magnesium, and dietary fiber.\n\nAntioxidant Properties: They contain antioxidants like vitamin C and compounds such as acetogenins and alkaloids, which help neutralize free radicals and protect cells from damage.`,
        },
        {
            id: 6,
            src: staticData.mushroom,
            title: "Mushroom",
            originalPrice: 250,
            discountedPrice: 150,
            description: `Rich in Nutrients: Mushrooms are low in calories but rich in essential vitamins and minerals such as vitamin C, vitamin B6, iron, and magnesium. They also contain dietary fiber, which supports digestive health.\n\nAntioxidant Properties: Mushrooms are loaded with antioxidants such as betalains and vitamin C.`,
        },
        {
            id: 7,
            src: staticData.onion,
            title: "Onion",
            originalPrice: 300,
            discountedPrice: 250,
            description: `Antioxidant Power: Onions are packed with antioxidants, including resveratrol, flavonoids, and vitamin C. These compounds help protect cells from damage caused by free radicals, which can reduce the risk of chronic diseases like cancer and heart disease.\n\nHeart Health: Resveratrol, particularly abundant in grape skins, has been linked to heart health benefits.`,
        },
        {
            id: 8,
            src: staticData.peas,
            title: "Peas",
            originalPrice: 300,
            discountedPrice: 250,
            description: `Rich in Nutrients: Peas are a good source of vitamins and minerals, including vitamin C, vitamin K, potassium, and dietary fiber. They also contain small amounts of B vitamins like riboflavin and vitamin B6.\n\nDigestive Health: The high fiber content in peas supports digestive health by promoting regular bowel movements and preventing constipation.`,
        },
        {
            id: 9,
            src: staticData.tomato,
            title: "Tomato",
            originalPrice: 290,
            discountedPrice: 250,
            description: `Rich in Nutrients: Tomatoes are packed with vitamins and minerals, including vitamin C, vitamin A, potassium, and folate. They are also low in calories and contain dietary fiber.\n\nBoost Immune System: High vitamin C content in tomatoes helps strengthen the immune system by supporting the production of white blood cells and antibodies, which are crucial for fighting infections.`,
        },
        {
            id: 10,
            src: staticData.Corn,
            title: "Corn",
            originalPrice: 200,
            discountedPrice: 100,
            description: `Promotes Eye Health: The beta-carotene in corn is converted into vitamin A, which is essential for maintaining healthy vision.\n\nMay Help Lower Cholesterol: The fiber, pectin, and vitamin C content in corn may contribute to lowering serum cholesterol levels.`,
        },
    ];

    return (
        <div style={styles.container}>
            {items.map((item) => (
                <Card key={item.id} sx={{ maxWidth: 395, width: '95%' }}>
                    <CardMedia>
                        <img
                            src={item.src}
                            alt={item.title}
                            style={{ width: '95%', height: '250px', objectFit: 'cover' }}
                        />
                    </CardMedia>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {item.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <del>&#8377;{item.originalPrice}</del>
                            <b> Discounted &#8377;{item.discountedPrice}</b>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {item.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button
                            size="small"
                            variant='contained'
                            onClick={() => handleAddToCart(item)}
                        >
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

export default VegetablesComp;
