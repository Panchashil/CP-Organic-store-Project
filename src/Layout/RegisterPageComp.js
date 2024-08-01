import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { AppBar, Toolbar } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    background: {
      default: '#e0f7fa',
    },
  },
});

const RegisterPageComp = () => {
  const nav = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    contact: '',
    address: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    contact: '',
    address: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validate = () => {
    let tempErrors = {
      name: '',
      email: '',
      password: '',
      contact: '',
      address: ''
    };
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email) {
      tempErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is not valid';
      isValid = false;
    }

    if (!formData.password) {
      tempErrors.password = 'Password is required';
      isValid = false;
    } else if (formData.password.length < 6) {
      tempErrors.password = 'Password must be at least 6 characters long';
      isValid = false;
    }

    if (!formData.contact) {
      tempErrors.contact = 'Contact number is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.contact)) {
      tempErrors.contact = 'Contact number is invalid';
      isValid = false;
    }

    if (!formData.address.trim()) {
      tempErrors.address = 'Address is required';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleBlur = (e) => {
    validate();
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validate()) {
      axios.post(`http://localhost:8888/user`, {
        userId: formData.email,
        userPass: formData.password,
        userName: formData.name,
        userContact: formData.contact,
        userAddress: formData.address
      }).then((res) => {
        window.alert("Registration Successful");
        nav("/Login");
      }).catch((error) => {
        console.error("There was an error registering!", error);
      });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
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
                    fontFamily: 'Brush Script MT',
                    color: ""
                  }}>
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
        <Grid item xs={12} sm={12} md={12} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: '#ffffff',
              padding: 3,
              borderRadius: 2,
              boxShadow: 3,
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Register
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!errors.name}
                helperText={errors.name}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'grey',
                    },
                    '&:hover fieldset': {
                      borderColor: 'grey',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'grey',
                    },
                  },
                  input: { color: 'black' },
                }}
                InputLabelProps={{
                  style: { color: 'grey' },
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!errors.email}
                helperText={errors.email}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'grey',
                    },
                    '&:hover fieldset': {
                      borderColor: 'grey',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'grey',
                    },
                  },
                  input: { color: 'black' },
                }}
                InputLabelProps={{
                  style: { color: 'grey' },
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="password"
                label="Password"
                name="password"
                type="password"
                autoComplete="current-password"
                value={formData.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!errors.password}
                helperText={errors.password}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'grey',
                    },
                    '&:hover fieldset': {
                      borderColor: 'grey',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'grey',
                    },
                  },
                  input: { color: 'black' },
                }}
                InputLabelProps={{
                  style: { color: 'grey' },
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="contact"
                label="Contact Number"
                name="contact"
                type="tel"
                value={formData.contact}
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!errors.contact}
                helperText={errors.contact}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'grey',
                    },
                    '&:hover fieldset': {
                      borderColor: 'grey',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'grey',
                    },
                  },
                  input: { color: 'black' },
                }}
                InputLabelProps={{
                  style: { color: 'grey' },
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="address"
                label="Address"
                name="address"
                multiline
                rows={4}
                value={formData.address}
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!errors.address}
                helperText={errors.address}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'grey',
                    },
                    '&:hover fieldset': {
                      borderColor: 'grey',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'grey',
                    },
                  },
                  input: { color: 'black' },
                }}
                InputLabelProps={{
                  style: { color: 'grey' },
                }}
              />

              <Button
                 id='signup'
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor: 'primary.main' }}
              >
                Register
              </Button> 
              <Link to="/Login" variant="body2" sx={{ color: 'primary.main' }}>
      Already have an account? Sign In
    </Link>
                
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default RegisterPageComp;
