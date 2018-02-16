import React, { Component } from 'react';
import './App.css';
import Numbers from './Numbers';
import _ from 'lodash'

const Stars = (props) =>{

    return(
        <div className="col-5">
        {_.range(props.noOfStar).map((number,i)=>
            <i key={i} className="fa fa-star"></i>
        )}
        </div>
    )
};

export default Stars;