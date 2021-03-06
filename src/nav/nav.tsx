import React from 'react';
import { NavHeader } from './nav-header';
import { NavLink } from './nav-link';
import { NavDropdown } from './nav-dropdown';
import { NavInternalLink } from './nav-internal-link';

interface NavProps { }

interface NavState {
	menuOpen: boolean;
}

export class Nav extends React.Component<NavProps, NavState> {
	constructor(props: NavProps) {
		super(props);
		this.onNavOpen = this.onNavOpen.bind(this);
		this.state = { menuOpen: false };
	}

	render() {
		return (
			<nav className={'navbar navbar-default navbar-fixed-top'} data-spy="affix-top">
				<div className={'container-fluid'}>
					<NavHeader onMenuExpandClick={this.onNavOpen} />
					<div className={'navbar-collapse collapse ' + (this.state.menuOpen ? 'in' : '')} id="myNavbar">
						<ul className={'nav navbar-nav'}>
							<NavInternalLink link="/" iconClass="fa fa-home fa-fw" />
							<NavLink name="About Me" hrefLink="#about" iconClass="fa fa-info-circle fa-fw" />
							<NavLink name="Work History" hrefLink="#workhist" iconClass="fa fa-briefcase fa-fw" />
							<NavLink name="Tech Skills" hrefLink="#skills" iconClass="fa fa-code fa-fw" />
							<NavDropdown name="University Work" iconClass="fa fa-graduation-cap fa-fw">
								<NavInternalLink name="Database Principles" link="/471"/>
								<NavInternalLink name="Internet Based Computing" link="/231" />
								{/* <NavLink name="Past Classes" hrefLink="/pastClasses.html" /> */}
							</NavDropdown>
							<NavLink name="Contact" hrefLink="mailto:kyleszalai@gmail.com" iconClass="fa fa-envelope-o fa-fw" />
						</ul>
					</div>
				</div>
			</nav>
		);
	}

	onNavOpen = (event: any) => {
		this.setState(state => ({
            menuOpen: !state.menuOpen
        }));
	};
}