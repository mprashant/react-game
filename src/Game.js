import React, { Component } from 'react';
import Stars from './Stars';
import Button from './Button';
import Answer from './Answer';
import Numbers from './Numbers';

class Game extends React.Component{
state = {
    selectedNumbers:[],
    randomNoOfStar: 1+Math.floor(Math.random()*9),
    ansNumber : []
};
//1+Math.floor(Math.random()*9)
selectNumber = (clickNumber) =>{
    console.log(this.state.selectedNumbers.indexOf(clickNumber));
    if(this.state.selectedNumbers.indexOf(clickNumber) < 0)
    {
        this.setState(prevState=>({
            selectedNumbers : prevState.selectedNumbers.concat(clickNumber),
            ansNumber : prevState.ansNumber.concat(clickNumber)
        }));
    }
}

 handleResult = ()=>{
    console.log('handleresult');
    let r = 0;
    for (let index = 0; index < this.state.ansNumber.length; index++) {
        r = r+this.state.ansNumber[index];
    }
    console.log(r);
    if (r == this.state.randomNoOfStar) {
        console.log('true');
        this.setState(()=>({
            randomNoOfStar : 1+Math.floor(Math.random()*9),
            ansNumber:[]
        }));
    }
}
    render() {

        return(
                <div className="container">
                    <h3>All Star</h3>
                    <hr />
                    <div className="row">
                        <Stars noOfStar={this.state.randomNoOfStar}/>
                        <Button selectedNumbers={this.state.selectedNumbers} handleResult={this.handleResult}/>
                        <Answer  selectedNumbers={this.state.ansNumber}/>
                    </div>
                    < br />
                    <Numbers selectedNumbers={this.state.selectedNumbers}
                    selectNumber={this.selectNumber}/>
                </div>
        );
    }
}


export default Game;