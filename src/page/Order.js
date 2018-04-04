import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {PageLayout} from '../layout/PageLayout';
import {Box} from '../control/Box';
import Pagination from "react-js-pagination";
import { Link } from 'react-router-dom';

class Order extends Component {
    constructor() {
        super();
        this.onChange = this
            .onChange
            .bind(this);
    }

    onChange(e) {}

    row = (items) => {
        var rows = [];
        for (var i = 0; i < 50; i++) {
            rows.push(
                <tr key={i}>
                    <td>
                        <Link to=''>1001</Link>
                    </td>
                    <td>Phong Hoang</td>
                    <td>03/30/2018 0:54</td>
                    <td>04/29/2018 0:54</td>
                    <td>300</td>
                    <td>12054</td>
                    <td>26/03/2018</td>
                    <td></td>
                </tr>
            )
        }

        return rows;
    }

    render() {
        return (
            <PageLayout title='Orders'>
                <div className="box">
                    <div className="box-header with-border">
                        <button type="button" className="btn btn-primary">Create</button>
                    </div>
                    <div className="box-body">
                        <div className='row'>
                            <div className='col-md-3'>
                                <div className='form-group'>
                                    <label>Order status</label>
                                    <select className='form-control'>
                                        <option>All</option>
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
                            <div className='col-md-3'>
                                <div className='form-group'>
                                    <label>From date</label>
                                    <input type='date' className='form-control'/>
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <div className='form-group'>
                                    <label>To date</label>
                                    <input type='date' className='form-control'/>
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <button className='btn btn-primary button-inline'>Find</button>
                            </div>
                        </div>
                        <table className='table table-striped table-bordered'>
                            <thead>
                                <tr>
                                    <th>Order Id</th>
                                    <th>Customer Name</th>
                                    <th>Order Date</th>
                                    <th>Complete Date</th>
                                    <th>Order Amount</th>
                                    <th>Invoice No.</th>
                                    <th>Invoice Date</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.row()}
                            </tbody>
                        </table>
                        <div className='paging'>
                            <select className='form-control page-size'>
                                <option>50</option>
                                <option>100</option>
                                <option>200</option>
                                <option>500</option>
                                <option>1000</option>
                            </select>
                            <div className='pull-right'>
                                <Pagination
                                    itemsCountPerPage={50}
                                    totalItemsCount={450}
                                    pageRangeDisplayed={5}/>
                            </div>
                        </div>

                    </div>
                </div>
            </PageLayout>
        );
    }
}

Order.propTypes = {};

export default Order;