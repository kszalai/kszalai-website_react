import React from 'react';
import { NavDropdown } from 'react-bootstrap';

interface NavDropdownProps {
    iconClass: string;
    name: string;
    id: string;
}

export class KsNavDropdown extends React.Component<NavDropdownProps> {
    constructor(props: NavDropdownProps) {
        super(props);
        this.state = { menuOpen: false };
    }

    render() {
        return (
            <NavDropdown title={this.props.name} id={this.props.id}>
                {/* <i className={this.props.iconClass}></i> */}
                { this.props.children }
            </NavDropdown>
        );
    }
}