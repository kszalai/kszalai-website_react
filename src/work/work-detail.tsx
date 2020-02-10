import React from 'react';

export class WorkDetail extends React.Component {
    render() {
        return (
            <li>{this.props.children}</li>
        );
    }
}