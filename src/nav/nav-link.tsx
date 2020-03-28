import React from 'react';
import { Nav } from 'react-bootstrap';

interface NavLinkProps {
    hrefLink: string;
    title?: string;
    iconClass?: string;
    name?: string;
}

export class KsNavLink extends React.Component<NavLinkProps> {
    render() {
        return (
            <Nav.Link href={this.props.hrefLink}>
                <i className={this.props.iconClass}></i>&nbsp;{this.props.name}
            </Nav.Link>
        );
    }
}
