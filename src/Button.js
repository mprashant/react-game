import React, { Component } from 'react';


const Button = (props) =>{
let button;
    switch(props.answerIsCorrect){
        case true:
        button = 
            <button className='btn btn-success' onClick={props.acceptAnswer}>
            <i className="fa fa-check" />
            </button>;
        console.log('true');
        break;
        case false:
        button = 
            <button className='btn btn-danger'>
            <i className="fa fa-times" />
            </button>;
        console.log('false');
        break;
        default:
        button = 
            <button onClick={props.handleResult} disabled={props.ansNumber.length === 0}>=</button>;
        console.log('default');
        break;

    }
    return(
        <div  className="col-2">
            {button}  
      </div>)
};

export default Button