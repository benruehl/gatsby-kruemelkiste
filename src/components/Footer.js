import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import SectionContainer from '../components/SectionContainer'
import FooterSeparatorList from '../components/FooterSeparatorList'

import {footerBgColor, footerDarkerBgColor} from '../styles/colors'
import {contentWidth} from '../styles/dimens'
import strings from '../../data/strings'

const Group = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;

	&:not(:last-child) {
		flex: 1 1 auto;
	}

	@media (max-width: 640px) {
		margin: 2em 0;
		align-items: center;
	}
`

const GroupHeader = styled.h3`
	margin: 0;
	margin-bottom: .5em;
	color: ${footerDarkerBgColor};
`

const GroupItem = styled.div`
	color: white;
`

const GroupLink = styled(Link)`
	color: white;
	border-bottom: 2px solid transparent;

	&:hover {
		border-color: white;
	}
`

const Footer = () =>
	<div>
		<SectionContainer background={footerBgColor}>

			<div
				css={{
					width: '100%',
					display: 'flex',
					flexDirection: 'row',

					'@media (max-width: 680px)': {
						flexDirection: 'column',
					}
				}}>

				<Group>
					<GroupHeader>Infos</GroupHeader>
					<GroupLink to='/'>Startseite</GroupLink>
					<GroupLink to='/service/'>{strings.serviceCaption}</GroupLink>
					<GroupLink to='/contract/'>{strings.contractCaption}</GroupLink>
					<GroupLink to='/contact/'>{strings.contactCaption}</GroupLink>
				</Group>

				<Group>
					<GroupHeader>Wohnort</GroupHeader>
					<GroupItem>Steffi Rühl</GroupItem>
					<GroupItem>Gounodstraße 101</GroupItem>
					<GroupItem>13088 Berlin</GroupItem>
				</Group>

				<Group>
					<GroupHeader>Kontakt</GroupHeader>
					<GroupItem>Tel.: 030 / 92 40 94 42</GroupItem>
					<GroupItem>{strings.emailAddress}</GroupItem>
				</Group>
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