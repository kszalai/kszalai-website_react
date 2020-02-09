import React from 'react';

interface NavLinkProps {
    hrefLink: string;
    title?: string;
    iconClass?: string;
    name?: string;
}

export class NavLink extends React.Component<NavLinkProps> {
    render() {
        return (
            <li><a href={this.props.hrefLink} title={this.props.title}><i className={this.props.iconClass}></i>&nbsp;{this.props.name}</a></li>
        );
    }
}

export default NavLink;