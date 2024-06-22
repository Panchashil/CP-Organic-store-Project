import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Productupdate = () => {
    const {id} = useParams();
    const nav = useNavigate();
    const [itemData, setItemData] = useState({
        id:"",
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
        axios.post(`http://localhost:8888/products/${id}`, itemData).then(() => {
            window.alert("Record is Updated Successfully");
             nav(`/maindashboard/ProductDashboard`)
        }).catch((error) => { })
    }

    useEffect(()=>{
        axios.post(`http://localhost:8888/products/${id}`, itemData).then((res) => {
            setItemData(res.data)
        }).catch((error) => { })

    })



    return (
        <div>
             <h2>Product Updation</h2>
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

export default Productupdate
