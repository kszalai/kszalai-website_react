import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.currentYear = new Date().getFullYear();
    }

    render() {
        return (
            <div className={'container footer card'}>
                <div className={'col-xs-6 text-left'}>
                    <h6>Made with <span className={'glyphicon glyphicon-heart'}></span> in Ypsilanti</h6>
                    <h6>Thanks to GitHub for hosting!</h6>
                    <h6><a href="https://github.com/kszalai/kszalai-website_react">Want to see how I'm made?</a></h6>
                </div>
                <div className={'col-xs-6 text-right'}>
                    <h6> 
                        Last changed: { document.lastModified }
                        <br />
                        &copy; Kyle Szalai { this.currentYear }
                    </h6>
                </div>
            </div>
        );
    }
}

export default Footer;