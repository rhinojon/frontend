import React from 'react'
import Navbar from '../Navbar/Navbar'
import "./contact.css"
import ContactBanner from './contactBanner/contactBanner'
import ContactForm from './contactform/contactForm'
import Footer from "../Footer/footer"

const Contact = () => {
    return (
        <div className="contact">
            <Navbar/>
            <ContactBanner/>
            <ContactForm/>
            <Footer/>
        </div>
    )
}

export default Contact
