import React from 'react';

interface NavHeaderProps {
    onMenuExpandClick: (mode: string) => void
} 

export class NavHeader extends React.Component<NavHeaderProps> {
    constructor(props: any) {
        super(props);
        this.menuExpandClick = this.menuExpandClick.bind(this);
    }

    render() {
        return (
            <div className={'navbar-header'}>
                <button type="button" className={'navbar-toggle'} onClick={this.menuExpandClick} data-toggle="collapse" data-target="#myNavbar">
                    <span className={'icon-bar'}></span>
                    <span className={'icon-bar'}></span>
                    <span className={'icon-bar'}></span>                        
                </button>
                <span className={'navbar-brand'}>
                    <a href="http://github.com/kszalai" target="_blank" rel="noopener noreferrer" title="Check out my work on Github!" data-toggle="tooltip" data-trigger="hover" data-placement="bottom">
                        <i className={'fa fa-github fa-2x'}></i>
                    </a>
                    <a href="https://www.linkedin.com/in/kyle-szalai-41649bb3" target="_blank" rel="noopener noreferrer" title="Connect with me on LinkedIn!" data-toggle="tooltip" data-trigger="hover" data-placement="bottom">
                        <i className={'fa fa-linkedin fa-2x'}></i>
                    </a>
                </span>
            </div>			
        );
    }

    menuExpandClick() {
        this.props.onMenuExpandClick('menuOpen');
    }
}