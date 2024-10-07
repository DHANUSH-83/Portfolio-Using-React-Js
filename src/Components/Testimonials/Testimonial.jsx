import React from 'react'
import './Testimonial.scss'
import Data from './data'

function Testimonial(props) {
    return (
        <div className='Testimonial'>
            <h1 className='Title'>Testimonial</h1>
            <div className="container">
                {
                    Data.map((item,index) => {
                        return (
                            <div className='testimonial-content' key={index}>
                                <div className='Box'>
                                    <div >
                                        <h1>{item.Name}</h1>
                                        <center> <img src={item.image} alt="" /> </center>
                                        <p>{item.Description}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Testimonial