import React from 'react'
import './menu.css'
import qr from './qr.png'
export default function Menuqr() {
  return (
    <>
       
        <div className='container-fluid Qrcontainer'>
        <hr/>
    <div className='container menuContainer'>
     
        <div className='menuContent'>
            <h2 id='qrheading'>Our Menu has <br/>gone mobile</h2>
            <h5>Scan to view</h5>
        </div>
        <div className='menuQrcode'>
            <div className='imgBox'>
                <img src={qr} alt='Qr-code'/>
            </div>
        </div>
    </div>
    </div>
    </>
    
  )
}
