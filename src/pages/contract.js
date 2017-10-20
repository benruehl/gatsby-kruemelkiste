import React from 'react'
import Link from 'gatsby-link'

import Header from '../components/BannerHeader'
import NavBar from '../components/NavBar'
import Contract from '../components/Contract'
import Footer from '../components/Footer'
import strings from '../../data/strings'
import headerImg from '../img/banner-crayons.jpg'

const ContractPage = () =>
  <div>
    <Header caption={strings.contractCaption} backgroundImage={headerImg} gradientTopLeft='#ae7e66' gradientBottomRight='#8bbfdd'/>
    <NavBar stayOpen={true}/>
    <Contract/>
    <Footer/>
  </div>

export default ContractPage
