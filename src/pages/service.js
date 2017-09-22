import React from 'react'
import Link from 'gatsby-link'

import ServiceHeader from '../components/ServiceHeader'
import Service from '../components/Service'
import DailyRoutine from '../components/DailyRoutine'
import Footer from '../components/Footer'
import strings from '../../data/strings'

const ServicePage = () =>
  <div>
    <ServiceHeader/>
    <Service/>
    <DailyRoutine/>
    <Footer/>
  </div>

export default ServicePage
