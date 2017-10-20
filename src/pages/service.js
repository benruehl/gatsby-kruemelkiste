import React from 'react'
import Link from 'gatsby-link'

import Header from '../components/BannerHeader'
import NavBar from '../components/NavBar'
import Service from '../components/Service'
import LogoExplanation from '../components/LogoExplanation'
import DailyRoutine from '../components/DailyRoutine'
import Footer from '../components/Footer'
import strings from '../../data/strings'
import headerImg from '../img/banner-teddy.jpg'

const ServicePage = () =>
  <div>
    <Header caption={strings.serviceCaption} backgroundImage={headerImg} gradientTopLeft='#636c54' gradientBottomRight='#bbd217'/>
    <NavBar stayOpen={true}/>
    <Service/>
    <LogoExplanation/>
    <DailyRoutine/>
    <Footer/>
  </div>

export default ServicePage
