import React from "react";
import "./card-list.component.css";

import Card from "../card/card.component";

function CardList(props){
    return (
        <div className="card-container">
            {
                props.data.map(album => {
                    return <Card key={album.id} singleData={album}/>
                })
            }
        </div>
    )

}

export default CardList;