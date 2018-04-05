import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class OrderForm extends Component {
    static propTypes = {
        user: PropTypes.object
    }

    constructor(props) {
        super(props);
        this.state = {
            OrderType: 1
        };

        this.onChange = this
            .onChange
            .bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }


    render() {
        return (
            <div>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='form-group'>
                            <label>Type of order</label>
                            <select name='OrderType' onChange={this.onChange} className='form-control'>
                                <option value={1}>Bán lẻ</option>
                                <option value={2}>Bán buôn</option>
                            </select>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='form-group'>
                            <label>Order Status</label>
                            <select className='form-control'>
                                <option>New</option>
                                <option>Proposal</option>
                                <option>Invoiced</option>
                                <option>Deliver</option>
                                <option>Producing</option>
                                <option>Purchase</option>
                                <option>Intallment</option>
                                <option>Completed</option>
                                <option>Received</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='form-group'>
                            <label>Order Id</label>
                            <input disabled={this.props.isEdit} type='text' className='form-control' />
                        </div>
                        <div className='form-group'>
                            <label>Customer Name</label>
                            <CustomerName type={this.state.OrderType} />
                        </div>
                        <div className='form-group'>
                            <label>Customer Address</label>
                            <input type='text' className='form-control' />
                        </div>
                        <div className='form-group'>
                            <label>Customer Email</label>
                            <input type='text' className='form-control' />
                        </div>
                        <div className='form-group'>
                            <label>Customer Phone</label>
                            <input type='text' className='form-control' />
                        </div>
                        <div className='form-group'>
                            <label>Order ID REF</label>
                            <input type='text' className='form-control' />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='form-group'>
                            <label>Employee Name</label>
                            <input
                                value={this.props.user.name}
                                disabled={true}
                                type='text'
                                className='form-control' />
                        </div>
                        <div className='form-group'>
                            <label>Order Date</label>
                            <input type='date' className='form-control' />
                        </div>
                        <div className='form-group'>
                            <label>Pickup Date</label>
                            <input type='date' className='form-control' />
                        </div>
                        <div className='form-group'>
                            <label>Complete Date</label>
                            <input type='date' className='form-control' />
                        </div>
                        <div className='form-group'>
                            <label>Invoice No.</label>
                            <input type='text' className='form-control' />
                        </div>
                        <div className='form-group'>
                            <label>Invoice Date</label>
                            <input type='date' className='form-control' />
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12 form-group'>
                        <label>Note</label>
                        <textarea className='form-control'></textarea>
                    </div>
                </div>
            </div>
        )
    }
};

class CustomerName extends Component {
    render() {
        if (this.props.type == 1) {
            return (<input type='text' className='form-control' />);
        } else {
            return (
                <select className='form-control'>
                    <option>Hoang Van Phong</option>
                    <option>Nguyen Van An</option>
                </select>
            );
        }
    }
}