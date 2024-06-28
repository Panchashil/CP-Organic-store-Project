import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const ProductAddComp = () => {
    const nav = useNavigate();
    const[productData,setProductData] = useState({
        pname:"",
        price:"",
        company:""
    });

    const inputChange = (events) =>{
        
        const{type,name,value} = events.target;
    setProductData({...productData,[name]:value})
    }
    const addProduct = (event) =>{
        event.preventDefault();
        axios.post(`http://localhost:8888/products`,productData).then(()=>{
            window.alert("Record Added Successfully");
            nav('/Maindashboard/ProductDashboard')
        }).catch((error)=>{})

    }
    return (
        <div>
            <h2>This is ProductAdd Component</h2>
            <div className='row'>
                <div className='col-sm-3'></div>
                <div className='col-sm-6'>
                    <form onSubmit={addProduct}>
                        <label className='form-label'>Enter Product Name</label>
                        <input type='text' name='pname' onChange={inputChange} value={productData.pname} className='form-control'></input>
                        <input type='text' name='price' onChange={inputChange} value={productData.price} className='form-control'></input>
                        <input type='text' name='company' onChange={inputChange} value={productData.company} className='form-control'></input>
                        <button type='submit' className='btn btn-danger'>submit</button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default ProductAddComp
