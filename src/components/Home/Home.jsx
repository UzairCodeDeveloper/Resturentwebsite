import React from 'react'
import "../Home/home.css"
import food from "./food.jpg"
// import d from "./y.png"
export default function Home() {
  return (
   <div className="container headerContainer">
    <div className="leftcontainer">
        
        <div className="headingandpara">
            <h1>Just Eat <span>Healthy</span>  Food to Live Longer & <span>Aspiring Life</span> </h1>
            <p>Enjoy a healthy Life by eating healthy foods that have extraordinary flavours which make your life healthier day by day, prepared by our top chefs with extra care and LOVE especially for you!!</p>
            <button className='leftCbtn'>See Catagory</button>
        </div>
    </div>
    <div className="rightcontainer">
        {/* <img src={cook} alt="" /> */}
        <div className='ImageBox'>
         <img src={food}/>
        </div>
       
    </div>
   </div>
  )
}
