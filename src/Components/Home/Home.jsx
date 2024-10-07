import React from 'react'
import './Home.scss'
import Navbar from '../Navbar/Navbar'
import Creative from '../../assets/new.png';
import hero from '../../assets/hero.jpg';
import Resume from '../../assets/Resume.pdf'
import Button from '../Button/Button';

function Home() {
  return (
    <div className='Home'>
      <Navbar />
      <div className="container">
        <div className="content">
          <h1>Creative designer
            <span><img src={Creative} alt="" /></span>focused on aesthetic, functional<br /> and user-centered designs.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita provident <br /> excepturi distinctio sint temporibus molestiae repudiandae sequi qui?</p>
          <div className='button-component'>

            <button>
              <a href={Resume} download="Resume">Download CV</a>
            </button>
          </div>
        </div>
        <div className='Image'>
          <img src={hero} alt="" />
        </div>
      </div>
      <div>
      </div>

    </div>
  )
}

export default Home