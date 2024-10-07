import React from 'react'
import './About.scss'
import creative from '../../assets/creative.jpg'


function About() {
  return (
    <div className='About'>
      <div className="About-text"><h1>About Me</h1></div>
      <div className="container">
        <div className="content">
          <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus sapiente eos eveniet et commodi ipsum provident non amet hic iure.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates beatae, alias omnis consequuntur facere pariatur numquam explicabo soluta velit maxime, laudantium eveniet aperiam quam similique minima minus natus. Provident, sint. </p>
        </div>
        <div className="image">
          <img src={creative} alt="" />
        </div>
      </div>

    </div>
  )
}

export default About