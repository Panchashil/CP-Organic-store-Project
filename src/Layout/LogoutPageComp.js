// import React from 'react';
// import { Link } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import staticData from '../shared/constant/ConstantData';
// const LogoutPageComp = () => { // Correctly using useNavigate here
//   const nav = useNavigate();
//   const alertMsg = () => {
    

//     try {
//         if (window.confirm("Are you sure you want to logout?")) {
//             sessionStorage.clear();
//             nav('/Login'); // Navigating to '/Login' on logout
//         } else {
//             // Optionally handle cancel action if needed
//         }
//     } catch (error) {
//         console.error('Error during logout:', error);
//         alert('Error during logout');
//     }
// };

//   return (
//     <div>
      


//       <center><Link to="/Login" className='btn btn-primary text-white' width={'120px'}  height={'40px'} onClick={alertMsg}>
//         <i>Logout</i>
//       </Link></center>
      

    
     

//     </div>
//   );
// };

// export default LogoutPageComp;
