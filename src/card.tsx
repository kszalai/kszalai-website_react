import React from 'react';

interface CardProps {
	titleAlign?: "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "center" | "end" | "justify" | "left" | "match-parent" | "right" | "start" | undefined;
	id: string;
	name: string;
	desc: string;
}

export class Card extends React.Component<CardProps> {
	titleAlign: {
		textAlign: "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "center" | "end" | "justify" | "left" | "match-parent" | "right" | "start" | undefined;
	}

	constructor(props: CardProps) {
		super(props);
		this.titleAlign = {
			textAlign: this.props.titleAlign === undefined ? 'left' : this.props.titleAlign
		};
	}

    render() {
        return (
            <div id={this.props.id} className={'col-xs-12 card'} style={{marginBottom: '16px'}}>
				<h1 className={'card-header'} style={{textAlign: this.titleAlign.textAlign}}>
					{this.props.name}<br />
					<small>{this.props.desc}</small>
				</h1>
				<br />
				{this.props.children}
			</div>
        );
    }
}