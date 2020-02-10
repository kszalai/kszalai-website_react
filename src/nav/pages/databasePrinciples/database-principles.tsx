import React from "react";
import { Card } from "../../../card";

export class DatabasePrinciples extends React.Component {
    render() {
        return (
            <div className={'container'} style={{padding: '0px'}}>
                <Card name="Database Princples">
                    <div className={'container-fluid col-xs-12 text-left'}>
                        <p>
                            Database Princples helped me learn about the theory and principles of database design and organization.
                            Primarily for this class we learned about MySQL and how it worked.
                        </p>
                        <h3><a href="http://emunix.emich.edu/~haynes/471/fa15/">Course Website</a></h3>
                        <ol type="1">
                            <li>
                                <p>Implement System Catalog - <a href="https://kszalai.github.io/471/pp1.java">pp1.java</a></p>
                            </li>
                        </ol>
                    </div>
                </Card>
                <i>*This page exists for historical purposes, and also to let me play with the React Router!</i> 😁
            </div>
        );
    }
}