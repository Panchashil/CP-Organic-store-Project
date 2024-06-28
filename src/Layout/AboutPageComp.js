import React from 'react'
import staticData from '../shared/constant/ConstantData'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Height } from '@mui/icons-material';
import cherry from '../shared/Fruit-images/Cherries.jpg'
import { Link } from 'react-router-dom';

const AboutPageComp = () => {
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
    </div>
            <div
                className="container-fluid mt-2"
                style={{
                    backgroundImage: 'url("https://images.pexels.com/photos/5912002/pexels-photo-5912002.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    padding: '50px',
                    borderRadius: '10px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                }}
            >
                <h2 className="text-center mb-4">About Us</h2>
                <div className="row justify-content-center">
                    <section className="row align-items-center my-5">
                        <div className="col-md-6">
                            <h2>Our Story</h2>
                            <p>
                                Welcome to <strong>Changepond Organics</strong>, your trusted source for the finest organic products. Our journey began with a simple yet profound belief: nature knows best. Driven by a passion for healthy living and a deep respect for the environment, we set out to create a place where quality and sustainability go hand in hand.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <img src="https://images.happycow.net/venues/1024/24/30/hcmp243087_1719208.jpeg" className="img-fluid" alt="Our Story" />
                        </div>
                    </section>

                    <section className="row align-items-center my-5">
                        <div className="col-md-6">
                            <img src="https://pureecoindia.in/wp-content/uploads/2020/04/Health-Organic-section-at-Modern-Bazaar.jpg" className="img-fluid" alt="Our Mission" />
                        </div>
                        <div className="col-md-6">
                            <h2>Our Mission</h2>
                            <p>
                                At <strong>Changepond Organics</strong>, our mission is to provide our community with the highest quality organic products that are not only good for you but also kind to the planet. We are committed to promoting a healthier lifestyle and fostering a deep connection with nature through our carefully curated selection of organic goods.
                            </p>
                        </div>
                    </section>

                    <section className="row align-items-center my-5">
                        <div className="col-md-6">
                            <h2>Our Values</h2>
                            <ul>
                                <li>
                                    <strong>Quality:</strong> We believe in offering only the best. Our products are sourced from trusted suppliers who share our commitment to organic farming and sustainability. Every item on our shelves meets rigorous standards for quality and purity.
                                </li>
                                <li>
                                    <strong>Sustainability:</strong> Protecting the environment is at the heart of everything we do. From eco-friendly packaging to supporting sustainable farming practices, we strive to minimize our environmental footprint and promote a greener future.
                                </li>
                                <li>
                                    <strong>Community:</strong> We are proud to be part of a community that values health, wellness, and sustainability. We actively support local farmers and artisans, and we are dedicated to building lasting relationships with our customers.
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <img src="https://marketplace.canva.com/EAFyz9BP__I/1/0/1600w/canva-green-plant-and-agriculture-logo-Ile_EDRBhuM.jpg" className="img-fluid" alt="Our Values" />
                        </div>
                    </section>

                    <section className="row align-items-center my-5">
                        <div className="col-md-6">
                            <img src="https://theglobalhues.com/wp-content/uploads/2021/08/Untitled-2.jpg" className="img-fluid" alt="What We Offer" />
                        </div>
                        <div className="col-md-6">
                            <h2>What We Offer</h2>
                            <p>
                                Our product range includes a wide variety of organic foods, natural health products, and eco-friendly household items. Whether you're looking for fresh produce, whole grains, herbal teas, or natural skincare products, we have something for everyone. Our knowledgeable staff is always here to help you make informed choices and find the products that best meet your needs.
                            </p>
                        </div>
                    </section>

                    <section className="row align-items-center my-5">
                        <div className="col-md-6">
                            <h2>Why Choose Us?</h2>
                            <ul>
                                <li>
                                    <strong>Certified Organic:</strong> All our products are certified organic, ensuring they are free from harmful chemicals and pesticides.
                                </li>
                                <li>
                                    <strong>Local and Sustainable:</strong> We prioritize sourcing from local and sustainable producers to support our community and reduce our carbon footprint.
                                </li>
                                <li>
                                    <strong>Expert Guidance:</strong> Our team is passionate about healthy living and is always ready to provide expert advice and personalized recommendations.
                                </li>
                                <li>
                                    <strong>Commitment to Health:</strong> We believe that what you put into your body matters. That's why we offer products that are not only good for you but also delicious and nourishing.
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <img src="https://www.rollingstone.com/wp-content/uploads/2021/03/IMG_2474z.jpg" className="img-fluid" alt="Why Choose Us" />
                        </div>
                    </section>

                    <section className="row align-items-center my-5">
                        <div className="col-md-6">
                            <img src="https://img.freepik.com/premium-photo/greenhouse-happy-women-together-with-box-vegetables-sustainable-small-business-garden-agriculture-friends-working-farm-smile-growth-summer-with-organic-agro-food-employees_590464-221966.jpg" className="img-fluid" alt="Join Us on Our Journey" />
                        </div>
                        <div className="col-md-6">
                            <h2>Join Us on Our Journey</h2>
                            <p>
                                We invite you to join us on our journey towards a healthier, more sustainable lifestyle. Whether you visit our store or shop with us online, we promise to deliver the highest quality products with the utmost care and integrity. Together, we can make a positive impact on our health and the environment.
                            </p>
                            <p>
                                Thank you for choosing <strong>Changepond Organics</strong>. We look forward to serving you and being part of your wellness journey.
                            </p>
                        </div>
                    </section>
                </div>
            </div>&nbsp;
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
    )
}

export default AboutPageComp