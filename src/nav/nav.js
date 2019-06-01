import React from 'react';
import NavHeader from './nav-header';
import NavLink from './nav-link';
import NavDropdown from './nav-dropdown';

class Nav extends React.Component {
	render() {
		return (
			<nav class="navbar navbar-default navbar-fixed-top" data-spy="affix-top">
				<div class="container-fluid">
					<NavHeader />
					<div class="collapse navbar-collapse" id="myNavbar">
						<ul class="nav navbar-nav">
							<li class="active"><a href="index.html"><i class="fa fa-home fa-fw"></i></a></li>
							<NavLink name="About Me" hrefLink="#about" iconClass="fa fa-info-circle fa-fw" />
							<NavLink name="Work History" hrefLink="#workhist" iconClass="fa fa-briefcase fa-fw" />
							<NavLink name="Tech Skills" hrefLink="#skills" iconClass="fa fa-code fa-fw" />
							<NavDropdown name="University Work" iconClass="fa fa-graduation-cap fa-fw">
								<NavLink name="Database Principles" title="COSC 471" hrefLink="/471"/>
								<NavLink name="Internet Based Computing" title="COSC 231" hrefLink="/231" />
								<NavLink name="Past Classes" hrefLink="/pastClasses.html" />
							</NavDropdown>
							<NavLink name="Contact" hrefLink="mailto:kyleszalai@gmail.com" iconClass="fa fa-envelope-o fa-fw" />
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

export default Nav;