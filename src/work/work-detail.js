import React from 'react';

class WorkDetail extends React.Component {
    render() {
        return (
            <li><p>{this.props.children}</p></li>
        );
    }
}

export default WorkDetail;