import React, { Component } from 'react';


const Button = (props) =>{
    return(
        <div  className="col-2">
            <button onClick={props.handleResult}>=</button>
        </div>
    )
};

export default Button;