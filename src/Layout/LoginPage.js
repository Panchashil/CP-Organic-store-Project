import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import MuiLink from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Primary color
    },
    background: {
      default: '#e0f7fa', // Light blue background color
    },
  },
});

const LoginPageComp = () => {
  const nav = useNavigate();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  const validatePassword = (password) => {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@]).{5,}$/;
    return passwordPattern.test(password);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    let enteredEmail = data.get('email');
    let enteredPassword = data.get('password');

    let validEmail = validateEmail(enteredEmail);
    let validPassword = validatePassword(enteredPassword);

    if (!enteredEmail || !validEmail) {
      setEmailError(!enteredEmail ? "This field is required" : "Invalid email format");
      return;
    }

    if (!enteredPassword || !validPassword) {
      setPasswordError(
        !enteredPassword
          ? "This field is required"
          : "Password must contain at least 5 characters, including uppercase, lowercase letters, and @"
      );
      return;
    }

    if (enteredEmail === 'admin@gmail.com' && enteredPassword === 'Admin@123') {
      nav("/Maindashboard");
      sessionStorage.setItem("user", enteredEmail);
      return;
    }

    try {
      const response = await fetch('http://localhost:8888/user');
      const users = await response.json();

      const user = users.find(
        (user) => user.userId === enteredEmail && user.userPass === enteredPassword
      );

      if (user) {
        sessionStorage.setItem("user", enteredEmail);
        nav("/ProductUser");
      } else {
        setError("Wrong UserId or Password");
        alert("Email ID or Password is wrong");
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
      alert("An error occurred. Please try again later.");
    }
  };

  const handleBlur = (field) => {
    if (field === 'email' && (!email || !validateEmail(email))) {
      setEmailError(!email ? "This field is required" : "Invalid email format");
    } else if (field === 'password' && (!password || !validatePassword(password))) {
      setPasswordError(
        !password
          ? "This field is required"
          : "Password must contain at least 5 characters, including uppercase, lowercase letters, and @"
      );
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
                  alt="Institute Logo"
                  style={{ borderRadius: "50%" }}
                  sx={{
                    marginRight: { xs: 1, sm: 2 },
                    padding: { xs: 1, sm: 2 },
                    margin: { xs: 1, sm: 2 }
                  }}
                  height={150}
                  width={150}
                />
                <Typography
                  variant="h4"
                  color="white"
                  sx={{
                    marginLeft: { xs: 0, sm: 2 },
                    fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '4rem' },
                    fontFamily: 'Brush Script MT',
                  }}
                >
                  Organic Products
                </Typography>
              </Box>
              <Button
                color="inherit"
                component={Link}
                to="/Login"
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
              >
                Login
              </Button>
            </Toolbar>
            <Box bgcolor='#f0f0f0' borderRadius="3px" marginTop="20px">
              <Toolbar>
                <Box sx={{ flexGrow: 1 }} />
                <Button
                  color="inherit"
                  component={Link}
                  to="/"
                  sx={{ color: '#000', fontWeight: 'bold', '&:hover': { backgroundColor: '#ccc' } }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Home&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </Button>
                <Button
                  color="inherit"
                  component={Link}
                  to="/AboutPage"
                  sx={{ color: '#000', fontWeight: 'bold', '&:hover': { backgroundColor: '#ccc' } }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;About&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </Button>
                <Button
                  color="inherit"
                  component={Link}
                  to="/ContactPage"
                  sx={{ color: '#000', fontWeight: 'bold', '&:hover': { backgroundColor: '#ccc' } }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contact&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </Button>
                <Button
                  color="inherit"
                  component={Link}
                  to="/BestofusPage"
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
              backgroundColor: '#ffffff', // White background for the form
              padding: 3,
              borderRadius: 2,
              boxShadow: 3,
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError('');
                }}
                onBlur={() => handleBlur('email')}
                error={!!emailError}
                helperText={emailError}
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
                  input: { color: 'black' }, // Text color
                }}
                InputLabelProps={{
                  style: { color: 'grey' }, // Label color
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setPasswordError('');
                }}
                onBlur={() => handleBlur('password')}
                error={!!passwordError}
                helperText={passwordError}
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
                  input: { color: 'black' }, // Text color
                }}
                InputLabelProps={{
                  style: { color: 'grey' }, // Label color
                }}
              />
             
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor: 'primary.main' }}
              >
                Sign In
              </Button>
              {error && (
                <Typography variant="body2" sx={{ color: 'red', mt: 2 }}>
                  {error}
                </Typography>
              )}
              <Grid container>
                <Grid item xs>
                  
                </Grid>
                <center><Grid item>
                  <Link to="/Register" variant="body2" style={{ color: theme.palette.primary.main }}>
                    {"Don't have an account? Register"}
                  </Link>
                </Grid></center> 
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default LoginPageComp;
