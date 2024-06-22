import React from 'react'

const ChildComp = (props) => {
    return (
        <div>
            <h2>
                    This is Child Component
                </h2>
                <p>Employee name is: {props.name} and salary is : {props.salary}</p>
                <button type='button' onClick={()=>props.changeData()}>ChangeDataProps</button>
        </div>
    )
}

export default ChildComp
