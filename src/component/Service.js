import React from 'react'
import "./Service.css"
function Service() {
  return (
    <>
    <div className='top'>
    <div className='container'>
      <div className='container-box'> <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src="safe.png" alt="Avatar"  />
      <div className='front-text'>Safety</div>
    </div>
    <div className="flip-card-back">
      <p className='text-back'>We provide <br/>the best safety <br/>with the best trained <br/> driver and best rated cars <br/>in the market. </p>
    </div>
  </div></div>
      <div className='container-box'> <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src="comf.png" alt="Avatar" />
      <div className='front-text'>Comfortable<br />Ride</div>
    </div>
    <div className="flip-card-back">
    <p  className='text-back'> Comfort <br/>with the proper<br/> maintainance and regular servicing of the car <br/>We provide the <br/> smoothest ride <br/> possible. </p>
    </div>
  </div></div>
      <div className='container-box'> <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src="price.png" alt="Avatar"  />
      <div className='front-text'>Best<br />Price</div>
    </div>
    <div className="flip-card-back">
    <p  className='text-back'>Price is what <br/>which is making us <br/>unbeatable in the <br/>market. </p>

    </div>
  </div></div>
    </div>
    </div>
    </>
  )
}

export default Service
