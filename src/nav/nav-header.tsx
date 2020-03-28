import React from 'react';

export class NavHeader extends React.Component<any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className={'navbar-brand'}>
                <a href="http://github.com/kszalai" target="_blank" rel="noopener noreferrer" title="Check out my work on Github!" data-toggle="tooltip" data-trigger="hover" data-placement="bottom">
                    <i className={'fa fa-github fa-2x'}></i>
                </a>
                <a href="https://www.linkedin.com/in/kyle-szalai-41649bb3" target="_blank" rel="noopener noreferrer" title="Connect with me on LinkedIn!" data-toggle="tooltip" data-trigger="hover" data-placement="bottom">
                    <i className={'fa fa-linkedin fa-2x'}></i>
                </a>
            </div>			
        );
    }
}