import React from 'react';

class WorkDetail extends React.Component {
    render() {
        return (
            <li>{this.props.children}</li>
        );
    }
}

export default WorkDetail;