import React from 'react'
import "../About/about.css"
import pizza from "./d.png"
export default function About() {
  return (
    <>
    <hr></hr>
    <div className=" container-fluid aboutContainer" id='about'>
      <div className='container aboutSection'>

        <div className='imageBox'>
          <div className='ImageBOX'>
            <img src={pizza} />
          </div>
        </div>
        <div className='about2'>
      <div className="aboutHeadings">
          <h1 className='head'>About Food</h1>
          <p className='para'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos qui magni quas? Iste sequi inventore illum reprehenderit non soluta vitae consectetur ratione adipisci libero? Quasi rem aspernatur odio asperiores repudiandae natus corporis voluptatibus perspiciatis quis sapiente assumenda error doloremque dolore possimus, ad labore impedit excepturi nobis? Quis praesentium laboriosam voluptatem.</p>
          <p className='para'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias libero exercitationem officiis ipsa dolorum. Eaque corrupti illo iure laboriosam, numquam vero! Eligendi quis molestiae necessitatibus animi, ratione harum ipsam ea.</p>
          <button className='aboutbtn'>learn More</button>
          </div>
      </div>
      </div>

    </div>
    </>
  )
}
