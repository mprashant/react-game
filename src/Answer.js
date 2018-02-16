
import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import _ from 'lodash'

const Answer = (props) =>{
    
    return(
        <div className="col-5">
            {props.selectedNumbers.map((number,i)=>
            <span key={i}>{number}</span>
        )}

        </div>
    );
}

export default Answer;