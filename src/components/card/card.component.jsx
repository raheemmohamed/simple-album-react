import React from "react";

//Your component CSS
import '../card/card.component.css';

function Card(props){
    //Object destructoring
    const {id, thumbnailUrl, title} = props.singleData;

    return (
        <div className="card-item">
            <img src={thumbnailUrl} alt={title} />
            <h4>{title}</h4>
        </div>
    );
}

export default Card;