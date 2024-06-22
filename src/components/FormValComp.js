import { Password } from '@mui/icons-material';
import { Button, colors } from '@mui/material';
import React from 'react'
import { useEffect, useState } from 'react'

const FormValComp = () => {
    const[user,setUser] = useState({
        userName:"",
        userPassword:"",
        term:false
    });

    const checkData = (event) =>{
        event.preventDefault();
        if(user.userName.trim()===""){
            window.alert("user name is required");
            return false;
        }
        if(!user.userName.trim().match('^[a-zA-Z ]{3,20}$')){
            window.alert("Must need Requirement");
            return false;
        }
        if(user.term===false){
            window.alert("Please click Checkbox");
            return false;
        }
        window.alert(JSON.stringify(user));
    }

        const inputname = (event)=>{
            // console.log(event.target.type);
            // console.log(event.target.name);
            // console.log(event.target.value);
            const {type,name,value} = event.target;
            setUser({...user,[name]:value})
        }
    return (
        <div><center>
            <h2 style={{color:'red', textAlign:"center"}}>This is FormValComp Component</h2>
            <form onSubmit={checkData}>
                <label>   Enter User Name :</label>&nbsp;&nbsp;&nbsp;&nbsp;
                <input type='text' name='userName' onChange={inputname} value={user.userName}></input><br/><br/>
                <label>Enter User Password :</label>&nbsp;
                <input type='text' name='userPassword' onChange={inputname} value={user.userPassword}></input><br/><br/>
                <input type='checkbox' name='term' onChange={inputname} value={user.term}></input>&nbsp;
                <label> I Accept Terms</label><br/><br/>
                <Button type='submit' variant='contained'>submit</Button>

            </form>
        </center>
            
            
        </div>
    )
}

export default FormValComp
