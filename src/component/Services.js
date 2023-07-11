import React from 'react'
import "./Services.css";
function Services() {
  return (
    <>
      <div className='services'>
          <div className='ser'>
          <div className='ser-img'>
          <img  src='car.jpg' alt="car"/>
          </div>
            <div className='ser-text'>
              <h1>Cab</h1>
              <p>Get most affordable Cab <br/> to your destination <br/> with a great comfort.</p>
            </div>
          </div>
          <div className='ser'>
          <div className='ser-img'>
          <img  src='bike.jpg' alt="car"/>
          </div>
         
            <div className='ser-text'>
              <h1>Bike</h1>
              <p>Get most affordable Cab <br/> to your destination <br/> with a great comfort.</p>
            </div>
          </div>
          <div className='ser' >
            <div className='ser-img'>
          <img className='auto' src='auto.png' alt="car"/>
          </div>
            <div className='ser-text'>
              <h1>Auto</h1>
              <p>Get most affordable Cab <br/> to your destination <br/> with a great comfort.</p>
            </div>
          </div>
          <div className='ser'>
          <div className='ser-img'>
          <img  src='rent.png' alt="car"/>
          </div>
            <div className='ser-text'>
              <h1>Rental</h1>
              <p>Get most affordable Cab <br/> to your destination <br/> with a great comfort.</p>
            </div>
          </div>
      </div>
    </>
  )
}

export default Services
