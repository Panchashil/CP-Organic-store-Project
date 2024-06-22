import React, { useEffect, useState } from 'react'
import axios from 'axios';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Link } from 'react-router-dom'
import AddIcon from '@mui/icons-material/EditNoteOutlined';


const ProductDashboardComp = () => {
    const [productData, setProductData] = useState([]);
     useEffect ( () =>{
        fetchData();
    },[])
    const fetchData =() => {
        axios.get(`http://localhost:8888/products`).then((response) => {
            setProductData(response.data)
        }).
            catch((error) => { })
    }
    const DeleteProduct = (id) =>{
        if(window.confirm(`Are you sure to delete Id:${id}`)){
            axios.delete(`http://localhost:8888/products/${id}`).then(()=>{
                window.alert("Record Deleted");
                fetchData();
            }).catch((error)=>{})
        }
       
    }
   
    return (
        <div>
            <h2>This is ProductDashboard Component</h2>
            <Link to="/Maindashboard/ProductAdd" className='btn btn-primary' ><AddIcon /> &nbsp;ADD</Link>
            <Link to="/SignOut"  className='btn btn-primary' style={{float:"right"}}>&nbsp;signout</Link><br />
            <table className='table table-hover table-striped '>
                <thead className='table-dark'><tr>
                    <th>S.no</th>
                    <th>ProductName</th>
                    <th>Price</th>
                    <th>Company</th>
                    <th>Action</th>
                </tr>

                </thead>
                <tbody>{
                 productData.map((val, index) => {
                        return <tr>
                            <td>{index+1}</td>
                            <td>{val.pname}</td>
                            <td>{val.price}</td>
                            <td>{val.company}</td>
                            <td>
                            <Link to={`/Maindashboard/ProductUpdate/${val.id}`} className='btn btn-primary btn-sm' ><EditNoteOutlinedIcon /> </Link>
                                <button type='button' onClick={()=>{DeleteProduct(val.id)}} className='btn btn-outline-success btn-sm'>
                                    <DeleteOutlineOutlinedIcon></DeleteOutlineOutlinedIcon>
                                </button>
                            </td>
                        </tr>
                })}

                </tbody>

            </table>
        </div>
    )
}

export default ProductDashboardComp
