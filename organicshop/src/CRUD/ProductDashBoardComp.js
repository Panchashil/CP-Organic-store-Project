import React, { useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';


const ProductDashboard = () => {

    const [itemData, setItemData] = useState([]);

    useEffect(() => {
        fetchData();

    }, [])


    const fetchData = () => {
        axios.get(`http://localhost:8888/products`).then((res) => {
            setItemData(res.data)
        }).catch((error) => { });
    }



    const DeleteItems = (id) => {
        if (window.confirm(`are you sure:${id}`)) {
            axios.delete(`http://localhost:8888/products/${id}`).then(() => {
                window.alert("Record Deleted");
                fetchData();
            }).catch((error) => { })

        }
    }



    return (
        <div>
            <h2>This is ProductDashBoard </h2>
            <Link to={`/maindashboard/Productadd`} className='btn btn-primary mb-2'><AddIcon/></Link>
            <table className='table table-hover table-striped' >
                <thead>
                    <tr className='table-dark' >
                        <th>SI.no</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Company</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        itemData.length> 0 && itemData.map((val, index) => {
                            return <tr>
                                <td>{index + 1}</td>
                                <td>{val.pname}</td>
                                <td>{val.price}</td>
                                <td>{val.company}</td>
                                <Link to={`/maindashboard/Productupdate/${val.id}`}  ><EditIcon /></Link>
                                <button type='button' onClick={() => { DeleteItems(val.id) }} className='btn btn-outline-danger btn-sm'> <DeleteIcon /></button>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ProductDashboard
