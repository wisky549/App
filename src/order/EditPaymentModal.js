import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AppModal } from '../layout/AppModal';

export class EditPaymentModal extends Component {
    static propTypes = {
        isOpen: PropTypes.bool,
        onClose: PropTypes.func,
    }

    render() {
        return (
            <AppModal isOpen={this.props.isOpen} onClose={this.props.onClose}>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='form-group'>
                            <label>Payment Type</label>
                            <select className='form-control'>
                                <option>C.O.D</option>
                                <option>Cash</option>
                                <option>Check</option>
                                <option>Credit card</option>
                            </select>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='form-group'>
                            <label>Taxes(GST) (%)</label>
                            <input type='number' className='form-control' />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='form-group'>
                            <label>Discount? (%)</label>
                            <input type='number' className='form-control' />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='form-group'>
                            <label>Surcharged</label>
                            <input type='number' className='form-control' />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='form-group'>
                            <label>Ship Free</label>
                            <input type='number' className='form-control' />
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>.No</th>
                                    <th>Values</th>
                                    <th>Date applied</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td><input type='number' className='form-control' /></td>
                                    <td><input type='date' className='form-control' /></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td><input type='number' className='form-control' /></td>
                                    <td><input type='date' className='form-control' /></td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td><input type='number' className='form-control' /></td>
                                    <td><input type='date' className='form-control' /></td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td><input type='number' className='form-control' /></td>
                                    <td><input type='date' className='form-control' /></td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td><input type='number' className='form-control' /></td>
                                    <td><input type='date' className='form-control' /></td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan='2' className='text-right'>
                                        <b>Amount Applied:</b>
                                        <b className='ml-5px'>500</b>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </AppModal>
        )
    }
};

export default EditPaymentModal;