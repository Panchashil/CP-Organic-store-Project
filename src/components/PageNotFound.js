import React from 'react'
import staticData from '../shared/constant/ConstantData'
const PageNotFound = () => {
    return (
        <div>
            <h2 style={{color:"blue",textAlign:"center"}}>404......Page Not Found Please check the url</h2>
            <p style={{textAlign:"center"}}><img src={staticData.Panda} alt="Mountain" height="50%" width="50%" /></p>
        </div>
    )
}

export default PageNotFound
