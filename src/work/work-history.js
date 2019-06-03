import React from 'react';

class WorkHistory extends React.Component {
    render() {
        return (
            <div className={'col-xs-12 text-left'}>
                <h3>{this.props.position}, {this.props.company}</h3>
                <h5>{this.props.location} ({this.props.startTime} - {this.props.endTime === undefined ? "Present" : this.props.endTime})</h5>
                <ul>
                    {this.props.children}
                </ul>
            </div>
        );
    }
}

export default WorkHistory;