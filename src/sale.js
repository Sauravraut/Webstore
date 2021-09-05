import "./sale.css";
import flower from './img/flower.png';
function Sale(){
    return(
        <div id = "body_mid">
            <div className = "gap"></div>
            <div id = "body_mid-main">
                <div id ="body_mid-main-card_cont">
                    <div id = "card_holder">
                        <div id = "card-1-cont">
                            <div id = "card-1"></div> 
                        </div>
                        <div id = "card-2-cont">
                            <div id = "card-2"></div> 
                        </div>
                        <div id = "card-3-cont">
                         <div id = "card-3"></div> 
                        </div>
                        <div id = "card-4-cont">
                            <div id = "card-4"></div> 
                        </div>
                        <div id = "card-5-cont">
                            <div id = "card-5"></div> 
                        </div>
                    </div>
                </div>
                <div id ="body_mid-main-side">
                    <div id = "body_mid-title">
                            <p>SUMMER SALE</p>
                    </div>
                    <div id ="body_mid-gif">
                        <img src = {flower} alt = "flower"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Sale;