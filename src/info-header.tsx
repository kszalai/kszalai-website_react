import React from 'react';
import profilePic from './assets/profile_pic.jpg';
import { Container, Col } from 'react-bootstrap';

export class InfoHeader extends React.Component {
    render() {
        return (
            <>
                <div className={'info-header-card'}>
                    <Col xs={4}>
                        <img className={'profile_pic pull-right'} src={profilePic} alt="Kyle Szalai"/>
                    </Col>
                    <Col xs={8} className={'col-8 profile_card'}>
                        <h1>Kyle Szalai</h1>
                        Software Engineer
                        <br />
                        Eastern Michigan University Alumni
                        <br />
                        <a title="Send me an email!" href="mailto:kyleszalai@gmail.com">kyleszalai@gmail.com</a>
                        <br />
                        <div className={'social'}>
                            <a href="https://github.com/kszalai"><i className={'fa fa-github fa-2x'}></i></a>
                            <a href="https://www.linkedin.com/in/kyle-szalai-41649bb3"><i className={'fa fa-linkedin fa-2x'}></i></a>
                        </div>
                    </Col>
                </div>
            </>
        );
    }
}