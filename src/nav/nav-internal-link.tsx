import React from 'react';
import { Link } from 'react-router-dom';

interface NavInternalLinkProps {
    link: string;
    iconClass?: string;
    name?: string;
}

export class NavInternalLink extends React.Component<NavInternalLinkProps> {
    render() {
        return (
            <li><Link to={this.props.link}><i className={this.props.iconClass}></i>&nbsp;{this.props.name}</Link></li>
        );
    }
}