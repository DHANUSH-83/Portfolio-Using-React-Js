import React from 'react'
import bg from '../../assets/bg.jpg';
import './Project.scss'


function Project() {
  return (
    <div className='Projects'>
      <div className='title'><h1>Projects</h1></div>
      <div className="container">
        <div className='Welcome'>
          <h1> W<span>ELCOME</span></h1>  
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam   aspernatur blanditiis tempore <br/> natus qui est eligendi? Eos  nostrum modi harum repudiandae sint voluptates at quae.</p>
        <img className='project-img' src={bg} alt=""  />
        </div>
        <div className="projectlist">
          <h1>P<span>ROJECTS</span></h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus <br/> officiis praesentium nostrum consectetur fugit voluptatibus?</p>
          <ul>
            <li><a href="">1.<span>AAA</span> </a></li>
            <li><a href="">2. <span>AAA</span></a></li>
            <li><a href="">3.<span>AAA</span></a></li>
            <li><a href="">4.<span>AAA</span></a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Project