import React from 'react'
import {LocationOn,Email,Instagram} from '@mui/icons-material'
import './Contact.css'
function Contact() {
  return (
    <div className="contact_container">
        <div>
            <h1>contacts</h1>
            <div className='contact_container_logo'><LocationOn/><p>&nbsp;st philomena collge darbe,puttur</p> </div>
            <div className='contact_container_logo'><Email/><p>&nbsp;pinnacle@gmail.com</p></div>
            <div className="contact_container_logo"><Instagram/><p>&nbsp;spcpinnacle</p></div>
        </div>

        <div>
            <h1>pinnacle-23</h1>
            <p className='contact_container_desc'>st philomena college ,Affiliated to  Man glore University, Re-accridted by NAAC at 'A' Grade Mnanaged by the Catholic Board Of Education, Manglore </p>
            
        </div>
    </div>
  )
}

export default Contact