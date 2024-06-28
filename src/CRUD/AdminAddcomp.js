import { Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const AdminAddComp = () => {
  const nav = useNavigate();
  const [formData, setFormData] = useState({
    fname: "",
    fdesc: "",
    price: "",
  });

  const [errors, setErrors] = useState({
    fname: "",
    fdesc: "",
    price: "",
  });

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Clear error message on change
    setErrors({
      ...errors,
      [name]: ""
    });
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;

    // Basic validation on blur
    if (!value) {
      setErrors({
        ...errors,
        [name]: `Please enter ${name}`
      });
    }
  };

  const addRecord = (event) => {
    event.preventDefault();

    // Simple validation
    if (!formData.fname || !formData.fdesc || !formData.price) {
      setErrors({
        fname: !formData.fname ? "Please enter fname" : "",
        fdesc: !formData.fdesc ? "Please enter fdesc" : "",
        price: !formData.price ? "Please enter price" : "",
      });
      return;
    }

    // Post request to localhost
    axios.post(`http://localhost:8888/foodMenu`, formData)
      .then((res) => {
        window.alert("Record Added Successfully");
        nav('/Maindashboard/ProductDashboard');
      })
      .catch((error) => {
        console.error("Error adding record:", error);
        // Handle error as needed
      });
  };

  return (
    <div>
      <Link to="/Maindashboard/ProductDashboard"  className='btn btn-primary' style={{float:"right"}}>&nbsp;Back</Link><br />
      <form onSubmit={addRecord}>
        <TextField
          fullWidth
          margin="normal"
          label="Food Name"
          name="fname"
          value={formData.fname}
          onChange={inputChangeHandler}
          onBlur={handleBlur}
          error={!!errors.fname}
          helperText={errors.fname}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Food Description"
          name="fdesc"
          value={formData.fdesc}
          onChange={inputChangeHandler}
          onBlur={handleBlur}
          error={!!errors.fdesc}
          helperText={errors.fdesc}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Price"
          name="price"
          value={formData.price}
          onChange={inputChangeHandler}
          onBlur={handleBlur}
          error={!!errors.price}
          helperText={errors.price}
        />
        <Button variant='outlined' className='btn btn-sm' type="submit">
          Add Data
        </Button>
      </form>
    </div>
  );
};

export default AdminAddComp;
