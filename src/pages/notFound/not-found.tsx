import React from 'react';
import { Card } from '../../card';

export class NotFound extends React.Component {
    render() {
        return(
            <div className={'container'}>
                <Card name="404 - Not Found">
                    <p>Woah! Check out your URL or return to my home page.</p>
                </Card>
            </div>
        );
    }
}