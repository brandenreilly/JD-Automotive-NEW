import React from "react";
import "../../styles/main.css";

export default function Cards(props) {
    var card = props.props
    
    return (
        <div className="col-lg-3 col-md-6 col-sm-12 mt-2 cardContainer">
            <div className="card autoServices" style={{width: "18rem"}}>
                <img src={card.img} className="card-img-top" alt={'Service ' + card.title}/>
                <div className="card-body">
                    <h5 className="my-1 p-0">{card.title}</h5>
                </div>
            </div>
        </div>
    )
}