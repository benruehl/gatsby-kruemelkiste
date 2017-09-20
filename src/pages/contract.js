import React from 'react'
import Link from 'gatsby-link'

import ContractHeader from '../components/ContractHeader'
import Contract from '../components/Contract'
import Footer from '../components/Footer'
import strings from '../../data/strings'

const ContractPage = () =>
  <div>
    <ContractHeader/>
    <Contract/>
    <Footer/>
  </div>

export default ContractPage
