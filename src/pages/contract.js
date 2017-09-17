import React from 'react'
import Link from 'gatsby-link'

import ContractHeader from '../components/ContractHeader'
import Contract from '../components/Contract'
import Footer from '../components/Footer'
import strings from '../../data/strings'
import {primaryGradientColor1, primaryGradientColor2} from '../styles/colors'

const ContractPage = () =>
  <div>
    <ContractHeader/>
    <Contract/>
    <Footer/>
  </div>

export default ContractPage
