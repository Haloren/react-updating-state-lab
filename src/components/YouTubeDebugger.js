// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

export default class YouTubeDebugger extends Component {
    constructor() {
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
        }
    }

    bitrateHandler = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
       
    }

    resolutionHandler = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.settings.video,
                    resolution: '720p'
                }
            }
        })
    }

    render() {
        return (
            <div>
                <button className='bitrate' onClick={this.bitrateHandler}>Bitrate: {this.state.settings.bitrate} </button>
                <button className='resolution' onClick={this.resolutionHandler}>Resolution: {this.state.settings.video.resolution} </button>
            </div>
        )
    }
}


// //BUILDING AS A FUNCTIONAL COMPONENT

// import React, {useState} from "react";

// export default function YouTubeDebugger() {

//     const errors = useState()
//     const user = useState(null)
//     const settings = {
//         bitrate: 8, //const [bitrate, setBitrate] = useState("8");
//         video: { 
//             resolution: '720p' //const [resolution, setResolution] = useState("1080p");
//         }
//     }

//     const resolutionHandler = () => {
//         // console.log("resolution")
//         setResolution(resolution => resolution === "1080p" ? resolution = "720p" : "1080p")
//     }

//     const bitrateHandler = () => {
//         // console.log("bitrate")
//         setBitrate(bitrate => bitrate === "8" ? bitrate = "12" : bitrate = "8")
//     }

//     const styleObj = {
//         background: "#2a9d8f",
//         color: "#F3FFE1",
//         fontSize: "2rem",
//         boxShadow: "2px 2px 20px #000",
//         margin: "10px",
//         padding: "10px 20px"
//     }

//     return(
//         <div>
//             <button className="bitrate" onClick={bitrateHandler} style={styleObj} >Bitrate: {bitrate} </button>
//             <br></br>
//             <button className="resolution" onClick={resolutionHandler} style={styleObj} >Resolution: {resolution} </button>
//         </div>
//     )
// }