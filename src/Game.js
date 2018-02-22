import React, { Component } from 'react';
import Stars from './Stars';
import Button from './Button';
import Answer from './Answer';
import Numbers from './Numbers';

class Game extends React.Component{
state = {
    selectedNumbers:[],
    randomNoOfStar: 1+Math.floor(Math.random()*9),
    ansNumber : [],
    finalResult:'',
    answerIsCorrect : null,
    redrawCount:5
};
selectNumber = (clickNumber) =>{
    console.log(this.state.selectedNumbers.indexOf(clickNumber));
    if(this.state.selectedNumbers.indexOf(clickNumber) < 0)
    {
        this.setState(prevState=>({
            selectedNumbers : prevState.selectedNumbers.concat(clickNumber),
            ansNumber : prevState.ansNumber.concat(clickNumber),
            answerIsCorrect : null
        }));
    }
}

 handleResult = ()=>{
        this.setState((prevState)=>({
            answerIsCorrect : prevState.randomNoOfStar ===
             prevState.ansNumber.reduce((acc,n) => acc + n, 0)
        }));
}

acceptAnswer =  () =>{
    this.setState(()=>({
        ansNumber :[],
        answerIsCorrect : null,
        randomNoOfStar: 1+Math.floor(Math.random()*9)
    }));
}

handleRollBackAns = (clickNumber) =>{
    console.log('unselect');
    this.setState((prevState) =>({
        selectedNumbers:prevState.selectedNumbers 
                                        .filter(number => number != clickNumber),
        ansNumber:prevState.ansNumber.filter(number => number != clickNumber),
        answerIsCorrect : null,
    }));
}
ReDraw = ()=>{
    if(this.state.redrawCount <= 0) {return;}
    this.setState((prevState)=>({
        redrawCount : prevState.redrawCount -1,
        ansNumber:[],
        randomNoOfStar: 1+Math.floor(Math.random()*9)
    }));
}

PlayAgain=()=>{
    this.setState(()=>({
        selectedNumbers:[],
        randomNoOfStar: 1+Math.floor(Math.random()*9),
        ansNumber : [],
        finalResult:'',
        answerIsCorrect : null,
        redrawCount:5
    }));
}

    render() {
        return(
                <div className="container">
                    <h3>All Star</h3>
                    <hr />
                    <div className="row">
                        <Stars noOfStar={this.state.randomNoOfStar}/>
                        <Button ansNumber={this.state.ansNumber} 
                                handleResult={this.handleResult} 
                                answerIsCorrect ={this.state.answerIsCorrect}
                                acceptAnswer = {this.acceptAnswer}/>
                        <Answer  ansNumber={this.state.ansNumber} 
                                handleRollBackAns = {this.handleRollBackAns}/>
                    </div>
                    <span>{this.state.finalResult}</span>
                    <br/>
                    <button className="fa fa-recycle" onClick={this.ReDraw}>
                        {this.state.redrawCount}
                    </button>
                    < br />
                    <Numbers selectedNumbers={this.state.selectedNumbers}
                        selectNumber={this.selectNumber}/>
                    < br />
                        <button className="fa fa-restart" onClick={this.PlayAgain}>Play Again </button>
                </div>
        );
    }
}


export default Game;