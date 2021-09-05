import './body.css';
import arrow from './img/arrow2.png';
import React, {useEffect, useState} from "react"; 
function Body(){
    let [vis, setVis] = useState("none");
    function side_enter(){
        setVis("block");
    }
    function side_leave(){
        setVis("none");
    }

  let colors = ["turquoise","lime","wheat","orange","yellow"];
  let [num, setNum] = useState(0);
  let [timer, setTimer] = useState(4000);
  let[colo,setColo] = useState("white");

  //ERROR: in changing background at boundries check onClick event
// useEffect(() => {
//   setInterval(() => {
//     change_color();
//   }, timer);
//   return () => {
//   }
// }, [])
    console.log(num);
    return(
        <div id = "body_top">
            <div className = "side_bar" id = "body_top-left" onMouseEnter ={side_enter} onMouseLeave ={side_leave} onClick ={e => ((num === 0) ? setNum(4): setNum(num--)) }>
                <img style = {{display : [vis]}} src ={arrow} alt = "arrow"></img>
            </div>
            <div id = "body_top-main" style = {{backgroundColor:colors[num]}}></div>
            <div className = "side_bar" id = "body_top-right" onMouseEnter ={side_enter} onMouseLeave ={side_leave} onClick ={e => ((num === 4) ? setNum(0): setNum(num++)) }>
                <img style = {{display : [vis]}} src ={arrow} alt = "arrow"></img>
            </div>
            <div id = "body_top-bot">
                <div id = "body_top-bot-box">
                    <div onClick = {e => setNum(0)} id = "1"></div>
                    <div onClick = {e => setNum(1)} id = "2"></div>
                    <div onClick = {e => setNum(2)} id = "3"></div>
                    <div onClick = {e => setNum(3)} id = "4"></div>
                    <div onClick = {e => setNum(4)} id = "5"></div>
                </div>
            </div>
        </div>
    )
}
export default Body;