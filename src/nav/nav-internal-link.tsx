import React from 'react';
import { Link } from 'react-router-dom';

interface NavInternalLinkProps {
    link: string;
    iconClass?: string;
    name?: string;
}

export class KsNavInternalLink extends React.Component<NavInternalLinkProps> {
    render() {
        return (
            <Link to={this.props.link}><i className={this.props.iconClass}></i>&nbsp;{this.props.name}</Link>
        );
    }
}