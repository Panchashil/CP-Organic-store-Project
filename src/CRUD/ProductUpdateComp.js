import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const ProductUpdateComp = () => {
    const { id } = useParams();
    const nav = useNavigate();
    const [productData, setProductData] = useState({
        id: "",
        fname: "",
        fdesc: "",
        price: ""
    });

    const inputChange = (events) => {

        const { type, name, value } = events.target;
        setProductData({ ...productData, [name]: value })
    }
    const addProduct = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:8888/foodMenu/${id}`, productData).then(() => {
            window.alert("Record Updated Successfully");
            nav('/Maindashboard/ProductDashboard')
        }).catch((error) => { })

    }
    useEffect(() => {
        axios.get(`http://localhost:8888/foodMenu/${id}`).then((res) => {
            // console.log(res.data);
            setProductData(res.data);
        }).catch((error) => { })
    }, [])
    return (
        <div>
            <Link to="/Maindashboard/ProductDashboard"  className='btn btn-primary' style={{float:"right"}}>&nbsp;Back</Link><br />
            <h2>This is ProductUpdate Component</h2>
            <div className='row'>
                <div className='col-sm-3'></div>
                <div className='col-sm-6'>
                    <form onSubmit={addProduct}>
                        <label className='form-label'>Enter Product Name</label>
                        <input type='text' name='fname' onChange={inputChange} value={productData.fname} className='form-control'></input>&nbsp;
                        <label className='form-label'>Enter Desciption</label>
                        <input type='text' name='fdesc' onChange={inputChange} value={productData.fdesc} className='form-control'></input>&nbsp;
                        <label className='form-label'>Enter Product price</label>
                        <input type='text' name='price' onChange={inputChange} value={productData.price} className='form-control'></input>
                        <button type='submit' className='btn btn-danger'>submit</button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default ProductUpdateComp
