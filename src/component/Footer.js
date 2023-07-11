import React from 'react'
import "./Footer.css"
function Footer() {
  return (
    <div className='footer'>
        <div className='div1'>Apni Gaadi</div>
        <div className='div2'>
            <div className='company'>
                <h2>Company</h2>
                <ul>
                    <li>About Us</li>
                    <li>Team</li>
                    <li>Contact</li>
                    <li>Blog</li>
                    <li>Careers</li>

                </ul>
            </div>
            <div className='product'>
                <h2>Services</h2>
                <ul>
                    <li>Cab</li>
                    <li>Bike</li>
                    <li>Auto</li>
                    <li>Rental</li>
                </ul>
            </div>
        </div>
        <div className="div3">
            <div className='fb'><img src="fb.png" alt="facebook"/></div>
            <div className='fb'><img src="in.png" alt="instagram"/></div>
            <div className='fb'><img src="fb.png" alt="facebook"/></div>
            <div className='fb'><img src="in.png" alt="instagram"/></div>
           
        </div>

    </div>
  )
}

export default Footer 
