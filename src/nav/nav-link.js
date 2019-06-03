import React from 'react';

class NavLink extends React.Component {
    render() {
        return (
            <li><a href={this.props.hrefLink} title={this.props.title}><i className={this.props.iconClass}></i>&nbsp;{this.props.name}</a></li>
        );
    }
}

export default NavLink;