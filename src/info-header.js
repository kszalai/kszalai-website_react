import React from 'react';
import profilePic from './assets/profile_pic.jpg'

class InfoHeader extends React.Component {
    render() {
        return (
            <div class="container" style={{padding: '0px'}}>
                <div class="col-xs-12 card">
                    <div class="col-xs-4">
                        <img class="profile_pic pull-right" src={profilePic} alt="Profile Picture"/>
                    </div>
                    <div class="col-xs-8 profile_card">
                        <h1>Kyle Szalai</h1>
                        <p>
                            Software Engineer
                            <br />
                            Eastern Michigan University Alumni
                            <br />
                            <a title="Send me an email!" href="mailto:kyleszalai@gmail.com">kyleszalai@gmail.com</a>
                            <br />
                            <div class="social">
                                <a href="https://github.com/kszalai"><i class="fa fa-github fa-2x"></i></a>
                                <a href="https://www.linkedin.com/in/kyle-szalai-41649bb3"><i class="fa fa-linkedin fa-2x"></i></a>
                            </div>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default InfoHeader;