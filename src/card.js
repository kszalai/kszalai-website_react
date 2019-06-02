import React from 'react';

class Card extends React.Component {
    render() {
        return (
            <div id={this.props.id} className={'col-xs-12 card'} style={{marginBottom: '16px'}}>
				<div className={'col-xs-12'}>
					<h1>
						{this.props.name}<br />
						<small>{this.props.desc}</small>
					</h1>
					<br />
					{this.props.children}
				</div>
			</div>
        );
    }
}

export default Card;