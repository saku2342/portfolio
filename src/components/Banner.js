import React from 'react'
// import banner from '../assests/laptoppinterst.jpg'
import '../css/banner.css'
import { Link } from 'react-router-dom'



const Banner = () => {
  return (
    <div className='bannersection'>
      <div className="container">
        <div className="row ">
            <div className="col-lg-6 col-md-8 col-12 text-center text-md-start ">
                <h2 className='banner-secondary'>SAKSHI</h2>
                <h1 className='banner-primary'>SHARMA</h1>
                <h5 className='banner-last'>Graphic Designer || Web Designer </h5>
                <a href="https://drive.google.com/file/d/1RCZqRodVffZZMaq817gecSJHgYDPEqz1/view?usp=sharing" target="_blank" className="resume-button">Resume</a>
                <Link className="resume-button mx-4" to="/mywork" >Portfolio</Link>
                {/* <a href="#" target="_blank" className="resume-button mx-5">Portfolio</a> */}
           
            </div>
            <div className=" col-12 text-center text-md-start icon-section ">
            <a href="https://www.instagram.com/sakszieee" target="_blank">
        <i class="fab fa-instagram" ></i>
    </a>
    <a href="https://www.linkedin.com/in/sakshi-sharma-621871252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
    <i class="fa-brands fa-linkedin"></i>
    </a>
    <a href="https://www.twitter.com/sakszieee" target="_blank">
    <i class="fa-brands fa-twitter"></i>
    </a>
          
          
            </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
