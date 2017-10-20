import React from 'react'
import Link from 'gatsby-link'

import Header from '../components/BannerHeader'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import strings from '../../data/strings'
import headerImg from '../img/banner-crayons.jpg'

const ContactPage = () =>
  <div>
    <Header caption={strings.contactCaption} backgroundImage={headerImg} gradientTopLeft='#ae7e66' gradientBottomRight='#8bbfdd'/>
    <Contact/>
    <Footer/>
  </div>

export default ContactPage
