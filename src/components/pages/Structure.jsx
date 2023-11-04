import React from 'react'

export default function Structure(props) {
  return (
                                 <div className='menuBOX'>
                                <div className='menuImage'>
                                    <img src={props.image} alt='Image' />
                                </div>
                                <div className='Detail'>
                                    <h5>{props.title}</h5>
                                    <span>{props.ingredients}</span>
                                </div>
                                <div className='Price'>
                                    <h5>Price</h5>
                                    <span>{props.Price} Pkr</span>
                                </div>
                            </div>
  )
}
