import * as React from 'react';
import {Component} from 'react';
import {PageLayout} from '../layout/PageLayout';

export class Home extends Component {
    constructor() {
        super();
    }
    render() {
        return <PageLayout title='Dashboard'>
            <div className="box">
                <div className="box-header with-border">
                    <h3 className="box-title">Reports</h3>
                </div>
                <div className="box-body">
                    
                </div>
            </div>
        </PageLayout>;
    }
}
