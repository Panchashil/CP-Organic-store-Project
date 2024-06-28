import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import staticData from '../shared/constant/ConstantData';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const ContactPageComp = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        message: ''
    });

    const [formErrors, setFormErrors] = useState({
        name: '',
        email: '',
        mobile: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
        setFormErrors({ ...formErrors, [id]: '' }); // Clear validation error on change
    };

    const handleBlur = (e) => {
        const { id, value } = e.target;
        const errors = validateField(id, value);
        setFormErrors({ ...formErrors, [id]: errors });
    };

    const validateField = (id, value) => {
        let error = '';
        switch (id) {
            case 'name':
                error = value.trim() ? '' : 'Name is required';
                break;
            case 'email':
                error = value ? (/^\S+@\S+\.\S+$/.test(value) ? '' : 'Email address is invalid') : 'Email is required';
                break;
            case 'mobile':
                error = value ? (/^\d{10}$/.test(value) ? '' : 'Mobile number is invalid') : 'Mobile number is required';
                break;
            case 'message':
                error = value.trim() ? '' : 'Message is required';
                break;
            default:
                break;
        }
        return error;
    };

    const validate = () => {
        let errors = {};
        Object.keys(formData).forEach((key) => {
            errors[key] = validateField(key, formData[key]);
        });
        setFormErrors(errors);
        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = validate();
        if (Object.values(errors).every((error) => error === '')) {
            setIsSubmitting(true);
            try {
                await axios.post('http://localhost:8888/Contacts', formData);
                window.alert("Record Added Successfully");
                window.location.reload();
            } catch (error) {
                console.error("There was an error adding the contact!", error);
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    return (
        <div>
            <div style={{ width: '100%' }} className="container-fluid">
                <AppBar position="static" sx={{ backgroundColor: '#008024', padding: '10px', borderRadius: '4px' }}>
                    <Toolbar>
                        <Box display="flex" alignItems="center" sx={{ flexGrow: 1 }}>
                            <Box
                                component="img"
                                src="https://img.freepik.com/premium-photo/green-leaf-logo-with-gold-leaf-dark-background-generative-ai_958098-12504.jpg"
                                alt="Institute Logo" style={{ borderRadius: "50%" }}
                                sx={{
                                    marginRight: { xs: 1, sm: 2 },
                                    padding: { xs: 1, sm: 2 },
                                    margin: { xs: 1, sm: 2 }
                                }}
                                height={150}
                                width={150}
                            />
                            <Typography variant="h4" color="white"
                                sx={{
                                    marginLeft: { xs: 0, sm: 2 },
                                    fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '4rem' },
                                    fontFamily: 'Brush Script MT'
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
                                component={Link} to="/"
                                sx={{ color: '#000', fontWeight: 'bold', '&:hover': { backgroundColor: '#ccc' } }}
                            >
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Home&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </Button>
                            <Button
                                color="inherit"
                                component={Link}
                                to={`/AboutPage`}
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
                        </Toolbar>
                    </Box>
                </AppBar>
            </div>
            <div className="container-fluid mt-5 contact-container">
                <h2 className="text-center text-dark mb-4"><strong>Contact Us</strong></h2>
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3 text-dark">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input
                                    type="text"
                                    className={`form-control ${formErrors.name && 'is-invalid'}`}
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required
                                />
                                <div className="invalid-feedback">{formErrors.name}</div>
                            </div>
                            <div className="mb-3 text-dark">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    type="email"
                                    className={`form-control ${formErrors.email && 'is-invalid'}`}
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required
                                />
                                <div className="invalid-feedback">{formErrors.email}</div>
                            </div>
                            <div className="mb-3 text-dark">
                                <label htmlFor="mobile" className="form-label">Mobile.no</label>
                                <input
                                    type="tel"
                                    className={`form-control ${formErrors.mobile && 'is-invalid'}`}
                                    id="mobile"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required
                                />
                                <div className="invalid-feedback">{formErrors.mobile}</div>
                            </div>
                            <div className="mb-3 text-dark">
                                <label htmlFor="message" className="form-label">Feedback</label>
                                <textarea
                                    className={`form-control ${formErrors.message && 'is-invalid'}`}
                                    id="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required
                                ></textarea>
                                <div className="invalid-feedback">{formErrors.message}</div>
                            </div>
                            <div className="d-grid">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>&nbsp;
            <div className="container-fluid bg-danger">
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
                            <source src={staticData.videoplayback} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
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
    );
};

export default ContactPageComp;
