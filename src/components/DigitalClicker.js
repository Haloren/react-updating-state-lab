// Code DigitalClicker Component Here
import React, { Component } from 'react'

export default class DigitalClicker extends Component {
    constructor() {
        super()
        this.state = {
            timesClicked: 0
        }
    }

    handleClick = () => {
        this.setState(count => {
          return {
            timesClicked: count.timesClicked + 1
          }
        })
      }

    render() {
        return (
            <button onClick={this.handleClick}>{this.state.timesClicked}</button>
        )
    }
}


// //BUILDING AS A FUNCTIONAL COMPONENT

// import React, {useState} from 'react';

// export default function DigitalClicker() {

//     const [count, timesClicked] = useState(0);

//     const handleClick = () => {
//         timesClicked(count => count + 1);
//     }

//     const styleObj = {
//         background: "#264653",
//         color: "#F3FFE1",
//         fontSize: "4rem",
//         boxShadow: "2px 2px 20px #000",
//         margin: "10px",
//         padding: "10px 20px"
//     }

//     return(
//         // <button onClick={ () => timesClicked(count + 1) }>{count}</button>
//         <button onClick={ handleClick } style={styleObj} >{count}</button>
//     )
// }