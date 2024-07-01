import React from 'react'
import aboutim from '../assests/8.jpg'
import '../css/about.css'
import Navbar from './Navbar'

const Aboutpae = (props) => {
  return (
   
    <section className='about-section' id="about">
        <div className="container ">
            <div className="row align-items-center">
                <div className="col-lg-6 col-12 text text-center text-lg-start my-4">
                    <h2 className='about-primary'>ABOUT {props.sk}</h2>
                    <h4 className='about-emailid'>sakshish402@gmail.com</h4>
                    <p>A passionate graphic and web designer with over 2+ years of experience creating visually stunning and user-friendly designs. I specialize in transforming ideas into engaging visual experiences that stand out and resonate with audiences, I've honed my skills to transform concepts into visually stunning realities. Whether it's crafting a brand's identity, designing user-friendly websites, or creating captivating illustrations, my goal is to deliver exceptional results that resonate with clients and their audiences. and I'm committed to delivering high-quality work that meets my clients' needs.</p>
                </div>
                <div className="col-12 col-lg-6  d-flex justify-content-center justify-content-lg-end  about-im">
                    <img src={aboutim} className='img-fluid about-img' alt="" />
                    <div className='rectanle'></div>
                </div>
            </div>
        </div>
      
    </section>
  )
}

export default Aboutpae
