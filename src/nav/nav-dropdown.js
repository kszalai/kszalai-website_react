import React from 'react';

class NavDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = { menuOpen: false };
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    render() {
        return (
            <li className={this.state.menuOpen ? 'dropdown open' : 'dropdown'}>
                <a href="#" onClick={this.toggleMenu} className={'dropdown-toggle'} data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i className={this.props.iconClass}></i>&nbsp;{this.props.name}<span className={'caret'}></span></a>
                <ul className={'dropdown-menu'}>
                    { this.props.children }
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