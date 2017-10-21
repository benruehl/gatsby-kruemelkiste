import React from 'react'
import Link from 'gatsby-link'

import Header from '../components/BannerHeader'
import NavBar from '../components/NavBar'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import strings from '../../data/strings'
import headerImg from '../img/banner-phone.jpg'

const ContactPage = () =>
  <div>
    <Header caption={strings.contactCaption} backgroundImage={headerImg} gradientTopLeft='#9b7d85' gradientBottomRight='#4c58ac'/>
    <NavBar stayOpen={true}/>
    <Contact/>
    <Footer/>
  </div>

export default ContactPage
