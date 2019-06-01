import React from 'react';

class NavHeader extends React.Component {
    render() {
        return (
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>                        
                </button>
                <span class="navbar-brand">
                    <a href="http://github.com/kszalai" target="_blank" title="Check out my work on Github!" data-toggle="tooltip" data-trigger="hover" data-placement="bottom">
                        <i class="fa fa-github fa-2x"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/kyle-szalai-41649bb3" target="_blank" title="Connect with me on LinkedIn!" data-toggle="tooltip" data-trigger="hover" data-placement="bottom">
                        <i class="fa fa-linkedin fa-2x"></i>
                    </a>
                </span>
            </div>			
        );
    }
}

export default NavHeader;