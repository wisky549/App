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
                            <label>Taxes(GST) (%)</label>
                            <input type='number' min='0' className='form-control' />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='form-group'>
                            <label>Discount? (%)</label>
                            <input type='number' min='0' className='form-control' />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='form-group'>
                            <label>Surcharged</label>
                            <input type='number' min='0' className='form-control' />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='form-group'>
                            <label>Ship Fee</label>
                            <input type='number' min='0' className='form-control' />
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <h4>Payment</h4>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>.No</th>
                                    <th>Date applied</th>
                                    <th>Payment Type</th>
                                    <th>Values</th>
                                </tr>
                            </thead>
                            <tbody>
                                <PaidRows />
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan='4' className='text-right text-red'>
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

class PaidRows extends Component {
    render() {
        var rows = Array(5).fill().map((e, i) => {
            return <tr key={i}>
                <td>{i + 1}</td>
                <td><input type='date' className='form-control' /></td>
                <td>
                    <select className='form-control'>
                        <option>C.O.D</option>
                        <option>Cash</option>
                        <option>Check</option>
                        <option>Credit card</option>
                    </select>
                </td>
                <td><input type='number' className='form-control' /></td>
            </tr>
        });

        return (rows);
    }
}