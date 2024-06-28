import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';

const ManageUsersComp = () => {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get('http://localhost:8888/user')
            .then((response) => {
                console.log('Data fetched:', response.data); // Log the fetched data
                setUserData(response.data);
            })
            .catch((error) => {
                console.error('There was an error fetching the data!', error);
            });
    };

    const DeleteUser = (id) => {
        if (window.confirm(`Are you sure to delete Id:${id}`)) {
            axios.delete(`http://localhost:8888/user/${id}`)
                .then(() => {
                    window.alert('Record Deleted');
                    fetchData();
                })
                .catch((error) => {
                    console.error('There was an error deleting the user!', error);
                });
        }
    };

    return (
        <div>
            <h3>Welcome Admin the User Availability</h3>
            {/* <Link to="/Maindashboard/AdminAdd" className='btn btn-primary'>
                <AddIcon /> &nbsp;ADD
            </Link> */}
            <Link to="/Maindashboard" className='btn btn-primary' style={{ float: "right" }}>
                &nbsp;Back
            </Link>
            <br />
            <table className='table table-hover table-striped '>
                <thead className='table-dark'>
                    <tr>
                        <th>S.no</th>
                        <th>UserId</th>
                        <th>UserPass</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.map((val, index) => (
                        <tr key={val.id}>
                            <td>{index + 1}</td>
                            <td>{val.userId}</td>
                            <td>{val.userPass}</td>
                            <td>
                                <button type='button' onClick={() => { DeleteUser(val.id) }} className='btn btn-outline-success btn-sm'>
                                    <DeleteOutlineOutlinedIcon />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ManageUsersComp;
