import "./nav.css";
import  user_icon from './img/user.png';
import  grocery_icon from './img/gro_icon.png';
import  fashion_icon from './img/fas_icon.png';
import  electro_icon from './img/ele_icon.png';
import  media_icon from './img/mov_icon.png';
import  cart_icon from './img/cart.png';
import  setting_icon from './img/setting.png';
import React, {useState} from "react"; 

function Nav(){
    let [prod_name, setProd_name] = useState("Visible");
    let [prod_ico, setProd_ico] = useState("Hidden");
    let [size1, setSize1] = useState("35%");
    let [size2, setSize2] = useState("45%");
    function user_enter(){
        setProd_name(prod_name = "Hidden");
        setProd_ico(prod_ico = "Visible");
        setSize1("30%");
        setSize2("40%");
    }
    function user_leave(){
        setProd_name(prod_name = "Visible");
        setProd_ico(prod_ico = "Hidden");
        setSize1("35%");
        setSize2("45%");
    }
    return(
        <div id ="nav_bar">
            <div id ="logo_space"></div>
            <div  style = {{width:[size1]}} id ="products_space">
                <a><p className = {prod_name}>Grocery</p><img className = {prod_ico} src = {grocery_icon} alt= "Grocery_icon"></img></a>
                <a><p className = {prod_name}>Fashion</p><img className = {prod_ico}  src = {fashion_icon} alt= "Fashion_icon"></img></a>
                <a><p className = {prod_name}>Electronics</p><img className = {prod_ico}  src = {electro_icon} alt= "Electronics_icon"></img></a>
                <a><p className = {prod_name}>Media</p><img className = {prod_ico}  src = {media_icon} alt= "Media_icon"></img></a>
            </div>
            <div  style = {{width:[size2]}} id ="search_space">
                <div  id = "search_space-input">
                    <input id = "search_space-input-box" type = "text"/>
                    <div id = "search_space-input-icon"></div>
                </div>

            </div>
            <div id ="nav_vline"></div>
            <div id ="user_space" onMouseEnter ={user_enter} onMouseLeave={user_leave}>
                <img className = {prod_ico}  src = {cart_icon} alt= "icon"></img>
                <img className = {prod_ico} src = {setting_icon} alt= "icon"></img>
                <img src = {user_icon} alt= "icon"></img>
            </div>
        </div>
    )
}
export default Nav;