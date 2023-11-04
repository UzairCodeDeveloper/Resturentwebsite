import React from 'react'
// import sample from "../images/pizza.jpg"
export default function CardInner(props) {
  return (
    <div className="catagoryCard">
                    <div className="catagoryImg">
                        <img src={props.image} alt="" />
                        <div className="catagoryDetail">
                        <h2>{props.Title}</h2>
                        <p>{props.Description}</p>
                        <span>{props.Price}</span>
                        </div>
                        
                    </div>
                    
                </div>
  )
}
