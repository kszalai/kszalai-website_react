import React from 'react';
import NavLink from './nav-link';

class NavDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = { menuOpen: false };
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    render() {
        return (
            <li className={this.state.menuOpen ? 'dropdown open' : 'dropdown'}>
                <a href="#" onClick={this.toggleMenu} class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i className={this.props.iconClass}></i>&nbsp;{this.props.name}<span class="caret"></span></a>
                <ul class="dropdown-menu">
                    { this.props.children.map((data, index) => { return <NavLink name={data.props.name} title={data.props.title} hrefLink={data.props.hrefLink} iconClass={data.props.iconClass} /> }) }
                </ul>
            </li>
        );
    }

    /**
     * Click listener to toggle the menu open class for li
     */
    toggleMenu() {
        this.setState(state => ({
            menuOpen: !state.menuOpen
        }));
    }
}

export default NavDropdown;