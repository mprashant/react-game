
import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import _ from 'lodash'

const Answer = (props) =>{
    
    return(
        <div className="col-5">
            {props.ansNumber.map((number,i)=>
            <span onClick={() => props.handleRollBackAns(number)} key={i}>{number}</span>
        )}

        </div>
    );
}

export default Answer;