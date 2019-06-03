import React from 'react';

class Card extends React.Component {
	constructor(props) {
		super(props);
		this.titleAlign = {
			textAlign: this.props.titleAlign === undefined ? 'left' : this.props.titleAlign
		};
	}

    render() {
        return (
            <div id={this.props.id} className={'col-xs-12 card'} style={{marginBottom: '16px'}}>
				<h1 className={'card-header'} style={this.titleAlign}>
					{this.props.name}<br />
					<small>{this.props.desc}</small>
				</h1>
				<br />
				{this.props.children}
			</div>
        );
    }
}

export default Card;