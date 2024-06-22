import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Productadd = () => {
    const nav = useNavigate();
    const [itemData, setItemData] = useState({
        pname: "",
        price: "",
        company: ""

    });
    const inputchange = (events) => {
        const { type, name, value } = events.target;
        setItemData({ ...itemData,[name]: value })
    }

    const addProduct = (event) => {
        event.preventDefault();
        axios.post(`http://localhost:8888/products`, itemData).then(() => {
            nav(`/maindashboard/ProductDashboard`)
        }).catch((error) => { })
    }


    return (
        <div>
            <h2>Product Add</h2>
            <div className='row'>
                <div className='col-sm-3' ></div>
                <div className='col-sm-6' >
                    <form onSubmit={addProduct}>
                        <label className='form-label'>Enter the Product Name</label><br/>
                        <input type='text ' name='pname' onChange={inputchange} value={itemData.pname}  ></input><br/>
                        <label className='form-label'>Enter the Price</label><br/>
                        <input type='number' name='price' onChange={inputchange} value={itemData.price}  ></input><br/>
                        <label className='form-label'>Company Name</label><br/>
                        <input type='text ' name='company' onChange={inputchange} value={itemData.company}  ></input><br/>
                        <button type='submit' className='' >Submit</button><br/>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Productadd
