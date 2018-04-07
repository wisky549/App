import React, { Component } from 'react';
import { PageLayout } from '../layout/PageLayout';
import { OrderForm } from './OrderForm';

export class CreateOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            OrderType: 1
        };

        this.onChange = this.onChange.bind(this);
        this.onNext = this.onNext.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onNext() {
        this.props.history.push('/order/view/111');
    }

    render() {
        return (
            <PageLayout title='Create order'>
                <div className="box">
                    <div className="box-body">
                        <OrderForm user={this.props.user} />
                        <div className='row'>
                            <div className='col-md-12 text-right'>
                                <button onClick={this.onNext} className='btn btn-primary'>Next Step >></button>
                            </div>
                        </div>
                    </div>
                </div>
            </PageLayout>
        );
    }
}

export default CreateOrder;