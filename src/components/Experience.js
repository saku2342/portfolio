import React from 'react'
import adobe from '../assests/photoshop-icon.jpg'
import illustrator from '../assests/illustrator.png'
import canva from '../assests/canva.png'
import fima from '../assests/figma.png'
import dance from '../assests/dance.png'
import travel from '../assests/travel-loo.jpg'
import '../css/Resume.css'

const Experience = ({ skills }) => {
    const skillsData = [
        { name: 'Photoshop', percentage: 90 ,image:adobe},
        { name: 'Illustrator', percentage: 60 ,image:illustrator},
        { name: 'Canva', percentage: 80 ,image:canva},
        { name: 'Figma', percentage: 75 ,image:fima},
        // Add more skills as needed
    ];
    const languageData = [
        { name: 'Hindi', percentage: 90 ,},
        { name: 'English', percentage: 60 ,},
      
        // Add more skills as needed
    ];
    if (!skillsData || skillsData.length === 0) {
        return <div>No skills to display.</div>;
    }
    // if (!skills) {
    //     return <div>No skills to display.</div>;
    // }
  return (
    <div className='resume-section'>
        <div className="container">
          <div className="row">
                    <div className="col-lg-4  col-12 text-center text-lg-start">
                        <h2 className='resume-primary'>SOFTWARE SKILLS</h2>
                        {skillsData.map((skill, index) => (
                            <div className="skill" key={index}>
                                 <img  src={skill.image}  alt={`${skill.name} Icon`} className="skill-icon" />

                                <span className="skill-name px-3">{skill.name}</span>
                                <div className="skill-bar">
                                    <div className="skill-circle" style={{ left: `${skill.percentage}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="col-lg-4  col-12 text-center text-lg-start px-4">
                        <h2 className='resume-primary'>EXPERIENCE</h2>
                        <div class="timeline">
        <div class="timeline-item">
            <div class="circle">1</div>
            <div class="content">SVIET CLG, Punjab <br/> <span>Graphic Designer</span></div>
        </div>
        <div class="timeline-item">
            <div class="circle">2</div>
            <div class="content">Godigitify <br/> <span>Graphic Designer</span></div>
        </div>
        <div class="timeline-item">
            <div class="circle">3</div>
            <div class="content">Alliance International School   <br/>  <span>Graphic Designer</span></div>
        </div>
        <div class="timeline-item">
            <div class="circle">4</div>
            <div class="content">Zsork Education<br/> <span>Graphic Designer</span></div>
        </div>
        <div class="timeline-item">
            <div class="circle">5</div>
            <div class="content">IKGPTU Fest<br/> <span>Graphic Designer</span></div>
        </div>
    
    </div>
                    </div>
                    <div className="col-lg-4  col-12 text-center text-lg-start">
                    <h2 className='resume-primary'>WHAT CAN I DO?</h2>
                    <div className="offeredskills-content">
                        <p>Branding and social media designs </p>
                        <p>Facebook Banners - Brand Identities</p>
                        <p>Brouchures - Posters</p>
                    </div>
                    <h2 className='resume-primary mt-5'>DESIGN SKILLS</h2>
                    <div className="offeredskills-content">
                        <p>Creativity - Planning Strategy </p>
                        <p>Signs & Typography- Layouts</p>
                        <p>Grid - Color Sense -Inspiration</p>
                    </div>

                    </div>
                </div>
                <div className="row skills-anotersection">
                    <div className="col-lg-4  col-12 text-center text-lg-start">
                    <h2 className='resume-primary'>LANGUAGES</h2>
                    {
                        languageData.map((lan,index) =>(
                            <div className="skill" key={index}>
                                <span  className="skill-name px-3" >{lan.name}</span>
                                <div className="skill-bar">
                                    <div className="skill-circle" style={{ left: `${lan.percentage}%` }}></div>
                                </div>
                            </div>

                        ))
                    }
                       
                    </div>
                    <div className="col-lg-4  col-12 text-center text-lg-start">
                    <h2 className='resume-primary'>EDUCATION</h2>
                    <div className="education-content">
                        <h3>BTECH CSE in PTU,</h3>
                        <h6>Patiala, Punjab</h6>
                    </div>
                        
                    </div>
                    <div className="col-lg-4  col-12 text-center text-lg-start">
                    <h2 className='resume-primary'>HOBBIES & INTEREST
                    </h2>
                    <div className="obbies-content"></div>
                   
                     <p>travel</p>
                     <p>book reading </p>
                    
                    </div>
                   

                </div>


            </div>
         
    
           
          
      
</div>

  )
}

export default Experience
