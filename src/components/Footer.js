import React from 'react'
import Link from 'gatsby-link'

import SectionContainer from '../components/SectionContainer'
import FooterSeparatorList from '../components/FooterSeparatorList'

import {footerBgColor, footerDarkerBgColor} from '../styles/colors'
import {contentWidth} from '../styles/dimens'
import strings from '../../data/strings'

const Footer = () =>
	<div>
		<SectionContainer background={footerBgColor}>

			<h1>Kontakt</h1>

			<div
				css={{
					width: '100%',
				}}>
			</div>
		</SectionContainer>

		<div
			css={{
				width: '100%',
				background: footerDarkerBgColor,
				padding: '1em 0',
			}}>

			<FooterSeparatorList>
				<span css={{ color: 'white' }}>
					{strings.copyright}
				</span>

				<span css={{ color: 'white' }}>
					Design und Website von Benjamin Rühl
				</span>

				<Link to="/site-notice/" css={{ color: 'white' }}>
	    			{strings.siteNoticeCaption}
				</Link>
			</FooterSeparatorList>
		</div>
  </div>

export default Footer