import React from 'react'
import "../Catagory/catagory.css"
import CardInner from './CardInner/CardInner'
// import sample from "./panini.jpg"
import catagory from './catagoryData'
export default function Catagory() {
  return (
    <>
    {/* <hr/> */}
    <div className="catagoryContainer container-fluid" id='catagory'>
        <div className="catagorySection container">
            <h1 className='catagoryHeading'>Catagories</h1>
            <div className="cards container">
                {catagory.map((val)=>{
                    return(
                        <CardInner
                        image={val.pic}
                        Title={val.title}
                        Description={val.description}
                        Price={val.price}                       
                        
                        />
                    )
                })}
                
            </div>
        </div>
    </div>
    </>
  )
}
