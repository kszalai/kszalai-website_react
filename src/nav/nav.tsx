import React from 'react';
import { KsNavLink } from './nav-link';
import { KsNavDropdown } from './nav-dropdown';
import { KsNavInternalLink } from './nav-internal-link';
import { NavHeader } from './nav-header';
import { Navbar, Nav } from 'react-bootstrap';

interface NavProps { }

interface NavState {
	menuOpen: boolean;
}

export class KsNav extends React.Component<NavProps, NavState> {
	constructor(props: NavProps) {
		super(props);
		this.onNavOpen = this.onNavOpen.bind(this);
		this.state = { menuOpen: false };
	}

	render() {
		return (
			<Navbar bg="dark" fixed="top">
				<NavHeader />
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse>
					<Nav>
						<KsNavInternalLink link="/" iconClass="fa fa-home fa-fw" />
						<KsNavLink name="About Me" hrefLink="#about" iconClass="fa fa-info-circle fa-fw" />
						<KsNavLink name="Work History" hrefLink="#workhist" iconClass="fa fa-briefcase fa-fw" />
						<KsNavLink name="Tech Skills" hrefLink="#skills" iconClass="fa fa-code fa-fw" />
						<KsNavDropdown name="University Work" id="universityWork" iconClass="fa fa-graduation-cap fa-fw">
							<KsNavInternalLink name="Database Principles" link="/471"/>
							<KsNavInternalLink name="Internet Based Computing" link="/231" />
							{/* <NavLink name="Past Classes" hrefLink="/pastClasses.html" /> */}
						</KsNavDropdown>
						<KsNavLink name="Contact" hrefLink="mailto:kyleszalai@gmail.com" iconClass="fa fa-envelope-o fa-fw" />
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}

	onNavOpen = (event: any) => {
		this.setState(state => ({
            menuOpen: !state.menuOpen
        }));
	};
}