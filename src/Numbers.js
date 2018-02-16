import React, { Component } from 'react';
import _ from 'lodash'

const Numbers = (props)=> {

    const numberClassName = (number) =>{
        if(props.selectedNumbers.indexOf(number) >= 0)
        {
            return 'selected';
        }
    }

    return(
            <div className="card text-center">
            <div>
                {Numbers.list.map((number,i)=>
                    <span key={i} className={numberClassName(number)}
                    onClick={()=> props.selectNumber(number)}>{number}</span>
                )}
            </div>
                {/* <span className="selected">1</span>
                <span className="used">2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span> */}
            </div>
    );
}

Numbers.list = _.range(1,10);

export default Numbers;
