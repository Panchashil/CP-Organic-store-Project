// App.js

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import staticData from "../shared/constant/ConstantData"
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Height } from '@mui/icons-material';
import cherry from '../shared/Fruit-images/Cherries.jpg'
import { Link } from 'react-router-dom';

const App = () => {
    const images = [
        { src: staticData.Corn, alt: 'images1' },
        { src: staticData.arharldal, alt: 'images1' },
        { src: staticData.avacadooil, alt: 'images1' },
        { src: staticData.blueberry, alt: 'images1' },
        { src: staticData.cherry, alt: 'images1' },
        { src: staticData.greenapple, alt: 'images1' },
        // {src: staticData.almondoil , alt: 'images1'}
    ]



    return (
        <div className="container-fluid " style={{
            backgroundImage: 'url("https://media.istockphoto.com/id/1392046785/photo/white-recycled-craft-paper-texture-as-background-grey-paper-texture-old-vintage-page-or.jpg?s=612x612&w=0&k=20&c=1xKAmUqRXCSHOCGYUWiitS2Anz4ORj91qQZ2J6AdaJ4=")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }} >
            {/* <header className=" container text-black">
                <div className="container d-flex justify-content-between align-items-center " style={{
                    height: "60px", width: "100%"
                }}>
                    <div className="logo-container d-flex align-items-center ">
                        <img src={staticData.hdlogo} alt="Logo" className="logo mt-1 mb-0 ml-2" style={{ height: '60px', textAlign: "center" }} />
                        <h1 className="mt-1 mb-0 ml-2">Organic Shop</h1>
                    </div>
                </div>
            </header>


            <div className="container  py-2 mt-2 mb-0 ml-4 " >
                <nav className="navbar navbar-expand-lg navbar-light bg-crimson">
                    <div className="container">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="Login">Login</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="AboutPage">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="ContactPage">Contact</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="BestofusPage">OurBest</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div> */}
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
    </div>

            <div className='container-fluid mt-2'>
                <marquee className="text-dark  py-2 mt-2 mb-0 ml-10">
                    <i className="mr-0" >Embrace nature's bounty where freshness meets purpose, and every bite nourishes both body and soul</i>
                </marquee>
            </div>


            <div className="container-fluid mt-2">
                <Carousel autoPlay infiniteLoop interval={2000} showThumbs={false}>
                    <div>
                        <img src="https://media.istockphoto.com/id/1079138254/photo/a-bottle-of-sandalwood-essential-oil-with-red-sandalwood-chips.jpg?s=612x612&w=0&k=20&c=8b1h_HJKv7-76euIJvzpY_dJdDzDanP0kbfBJg3rGEs=" alt="Slide 1" />
                    </div>
                    <div>
                        <img src={staticData.avacadooil} alt="Slide 2" />
                    </div>
                    <div>
                        <img src="https://img.freepik.com/premium-photo/chandan-powder-with-sticks-green-leaves-dark-background-generative-ai_849906-22495.jpg "alt="Slide 3" height="860px" />
                    </div>
                    <div>
                        <img src="https://i3.wp.com/www.wallpaperflare.com/static/944/986/519/apple-surface-drops-red-wallpaper.jpg" alt="Slide 3" />
                    </div>
                    <div>
                        <img src="https://img.freepik.com/premium-photo/pile-sandalwood-small-arts-crafts-movement-ai-generated-art_843679-1189.jpg" height="860px"/>
                    </div>
                </Carousel>
            </div>


            <div className="container-fluid mt-2">
                <div className="row">
                    {images.map((image, index) => (
                        <div key={index} className="col-md-4 mb-4">
                            <div className="card">
                                <img src={image.src} className="card-img-top" alt={image.alt} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="container-fluid mt-2 bg-white">
                <div className="row justify-content-center">
                    <div className="container-fluid mt-0" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                            }}
                        >
                            <source src={staticData.videoBack} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="col-8"><center><h2>Our Best Selling's</h2></center>

                        <p className="text-center" style={{ color: 'black', fontSize: "20px" }}>Welcome to our organic product shop, where every item reflects our commitment to health, sustainability, and purity. From farm-fresh produce bursting with flavor to eco-friendly household essentials, each product is carefully selected to nurture both your well-being and the planet. Discover a world of organic goodness that supports local farmers, promotes ethical practices, and brings nature's finest straight to your table. Embrace a lifestyle that's not just good for you, but for the earth too. Join us on a journey towards healthier living and a brighter, greener future.</p>
                    </div>

                    <div className="col-8">
                        <div className="text-center">
                            <img src="https://img.freepik.com/premium-photo/blueberries-solid-color-background_849688-831.jpg" alt="Slide 1" style={{ width: '600px', height: '300px' }} />
                        </div>
                    </div>

                    <div className="col-8">
                        <p className="text-center" style={{ color: 'black', fontSize: "20px" }} >Step into our haven of organic delights, where every corner tells a story of mindful choices and wholesome living. Our shelves brim with the season's best harvests, meticulously grown without compromise, ensuring each bite is packed with nutrition and flavor. From artisanal skincare crafted with botanical wonders to biodegradable cleaning solutions that protect our waterways, every product embodies our unwavering commitment to sustainability. By supporting local artisans and prioritizing eco-friendly practices, we aim to redefine your shopping experience with products that nourish, protect, and inspire. Join us in embracing a lifestyle that celebrates both personal wellness and environmental stewardship, as we pave the way towards a healthier planet, one thoughtful choice at a time.</p>
                    </div>

                    <div className="col-8">
                        <div className="text-center">
                            <img src="https://img.freepik.com/premium-photo/closeup-plate-dragon-fruit-slices-blue-background_756748-54660.jpg" alt="Slide 1" style={{ width: '600px', height: '300px' }} />
                        </div>
                    </div>

                    <div className="col-8">
                        <p className="text-center" style={{ color: 'black', fontSize: "20px" }} > Experience the essence of nature in every product, from sun-ripened fruits bursting with vitamins to cruelty-free beauty essentials that rejuvenate both skin and soul. We take pride in curating a selection that supports local farmers and artisans, ensuring fair wages and ethical practices from seed to shelf. Our commitment to eco-consciousness extends to every detail, whether it's our compostable packaging or energy-efficient operations. Join us on a journey towards a harmonious lifestyle that cherishes the earth's resources while nourishing your well-being. Together, let's cultivate a brighter future where every choice contributes to a greener, more vibrant world.</p>
                    </div>

                    <div className="col-8">
                        <div className="text-center">
                        <img src="https://static.vecteezy.com/system/resources/previews/026/416/019/non_2x/fresh-oranges-in-water-splash-on-dark-blue-background-3d-rendering-ai-generated-photo.jpg" alt="Slide 1" style={{ width: '600px', height: '300px' }} />
                        </div>
                    </div>





                    <div className="col-8">
                        <p className="text-center" style={{ color: 'black', fontSize: "20px" }} >Discover the crisp sweetness of freshly picked produce, cultivated with care to preserve nutrients and flavor. From biodegradable household essentials that minimize environmental impact to natural remedies that enhance your everyday wellness, every item is a testament to our commitment to holistic living. By partnering with local growers and makers who share our values, we ensure that each purchase supports communities and promotes ethical practices. Join us in embracing a lifestyle that honors both personal vitality and planetary health, as we strive towards a future where every choice leaves a positive footprint on the world we cherish.</p>
                    </div>

                    <div className="col-8">
                        <div className="text-center">
                        <img src="https://www.shutterstock.com/image-photo/almond-oil-600nw-318665039.jpg" alt="Slide 1" style={{ width: '600px', height: '300px' }} />
                        </div>
                    </div>

                    <div className="col-8">
                        <p className="text-center" style={{ color: 'black', fontSize: "20px" }} > Our collection extends beyond food to include eco-friendly home essentials that uphold our planet-first ethos. Each item is carefully selected to promote wellness and ethical values, ensuring that your choices contribute to a greener future. Join us in embracing a lifestyle that celebrates the harmony between nature and well-being, as we cultivate a community dedicated to a healthier world for generations to come.</p>
                    </div>
                </div>
            </div>



            <div className="container-fluid mt-2 py-3">
                <div className="row justify-content-around">
                    <div className="col-3">
                        <img src="https://img.freepik.com/premium-photo/red-apple-with-smooth-surface-attractive-ai-generated-art_843679-4686.jpg" alt="Image 1" style={{ width: '300px', height: '300px' }} className="img-fluid" />
                    </div>
                    <div className="col-3">
                        <img src="https://static.vecteezy.com/system/resources/previews/006/908/819/non_2x/fresh-mango-beautiful-chopped-fruit-with-green-leaves-on-dark-blue-timber-background-tropical-fruit-design-concept-flat-lay-top-view-copy-space-photo.jpg" alt="Image 2" style={{ width: '300px', height: '300px' }} className="img-fluid" />
                    </div>
                    <div className="col-3">
                        <img src="https://as1.ftcdn.net/v2/jpg/01/27/51/24/1000_F_127512441_vlPu9JGVcU48wiWtCPpKi1nWuzE6HOy2.jpg" alt="Image 3" style={{ width: '300px', height: '300px' }} className="img-fluid" />
                    </div>
                    <div className="col-3">
                        <img src="https://png.pngtree.com/thumb_back/fw800/background/20231223/pngtree-vibrant-pomegranate-juicy-seeds-on-a-textured-black-background-image_13851603.png" alt="Image 4" style={{ width: '300px', height: '300px' }} className="img-fluid" />
                    </div>
                </div>
            </div>




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

export default App;
