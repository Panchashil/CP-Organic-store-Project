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

const PulsesPageComp = () => {
    const dispatch = useDispatch();

    const handleAddToCart = (item) => {
        dispatch(addItem(item)); // Use addItem action
    };

    // Updated items array with unique IDs
    const items = [
        {
            id: 1,
            name: 'Arhar Dal',
            image: staticData.arharldal,
            originalPrice: 400,
            discountedPrice: 200,
            description: 'Arhar dal is highly nutritious and a good source of protein, complex carbohydrates, dietary fiber, and essential nutrients such as vitamins (particularly folate, vitamin B6, and vitamin C) and minerals (including iron, potassium, magnesium, and zinc).',
        },
        {
            id: 2,
            name: 'Bambara Dal',
            image: staticData.bambara,
            originalPrice: 750,
            discountedPrice: 400,
            description: 'Bambara dal is highly nutritious, rich in protein (about 18-25% protein content), dietary fiber, and essential nutrients such as calcium, iron, potassium, magnesium, zinc, and vitamins (particularly B vitamins like thiamine and niacin).',
        },
        {
            id: 3,
            name: 'Fenugreek Dal',
            image: staticData.fenugreek,
            originalPrice: 350,
            discountedPrice: 300,
            description: 'Fenugreek leaves are rich in vitamins (particularly vitamin K and vitamin C), minerals (such as iron, calcium, and potassium), and dietary fiber. Lentils provide protein, fiber, and essential nutrients like folate and manganese.',
        },
        {
            id: 4,
            name: 'Green Gram',
            image: staticData.greengram,
            originalPrice: 510,
            discountedPrice: 350,
            description: 'Green gram is highly nutritious, rich in protein (about 24-28% protein content), dietary fiber, and essential nutrients such as vitamins (particularly folate, vitamin B6, and vitamin C) and minerals (including potassium, magnesium, iron, and zinc).',
        },
        {
            id: 5,
            name: 'Kala Dal',
            image: staticData.kaladal,
            originalPrice: 550,
            discountedPrice: 330,
            description: 'Kala dal is highly nutritious, rich in protein (about 25-30% protein content), dietary fiber, and essential nutrients such as iron, potassium, magnesium, calcium, folate, and vitamins (particularly vitamin B6).',
        },
        {
            id: 6,
            name: 'Rajma',
            image: staticData.rajma,
            originalPrice: 450,
            discountedPrice: 350,
            description: 'Rajma (kidney beans) are nutritious legumes rich in protein, dietary fiber, vitamins (particularly folate and vitamin B1), minerals (including iron, potassium, magnesium, and zinc), and antioxidants.',
        },
        {
            id: 7,
            name: 'Soya',
            image: staticData.soya,
            originalPrice: 300,
            discountedPrice: 150,
            description: 'Soya beans are highly nutritious and are considered a complete protein source, containing all essential amino acids necessary for human health. They are rich in protein (about 36-38% protein content), dietary fiber, and essential nutrients such as iron, calcium, magnesium, potassium, phosphorus, zinc, folate, and vitamins (particularly vitamin K and several B vitamins including folate).',
        },
        {
            id: 8,
            name: 'Gung Peas',
            image: staticData.gungpeas,
            originalPrice: 700,
            discountedPrice: 350,
            description: 'Chickpeas are highly nutritious legumes packed with protein (about 19-20% protein content), dietary fiber, and essential nutrients such as iron, folate, phosphorus, manganese, and vitamins (particularly vitamin B6).',
        },
        {
            id: 9,
            name: 'Pinto Beans',
            image: staticData.pinto,
            originalPrice: 800,
            discountedPrice: 500,
            description: 'Pinto beans, scientifically known as Phaseolus vulgaris, are oval-shaped beans with a beige background speckled with reddish-brown spots or streaks. The name "pinto" means "painted" in Spanish, referring to their appearance.',
        },
        {
            id: 10,
            name: 'Marrow Fat',
            image: staticData.marrowfat,
            originalPrice: 500,
            discountedPrice: 300,
            description: 'Marrow fat is rich in monounsaturated fats, particularly oleic acid, which is also found in olive oil. It also contains saturated fats, although in varying proportions depending on the animal\'s diet and health.',
        },
    ];

    return (
        <div style={styles.container}>
            {items.map((item) => (
                <Card key={item.id} sx={{ maxWidth: 395, width: '95%' }}>
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

export default PulsesPageComp;
