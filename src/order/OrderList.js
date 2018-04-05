import React, { Component } from 'react';
import Pagination from "react-js-pagination";
import { Link } from 'react-router-dom';
import { PageLayout } from '../layout/PageLayout';
import { CreateOrder } from './CreateOrder';

class OrderList extends Component {
    constructor() {
        super();
        this.onChange = this
            .onChange
            .bind(this);
    }

    onChange(e) { }

    row = (items) => {
        var rows = [];
        for (var i = 0; i < 10; i++) {
            rows.push(
                <tr key={i}>
                    <td>
                        <Link to={'/order/view/' + i}>1001</Link>
                    </td>
                    <td>Phong Hoang</td>
                    <td>03/30/2018 0:54</td>
                    <td>04/29/2018 0:54</td>
                    <td>300</td>
                    <td>12054</td>
                    <td>26/03/2018</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
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
                        <Link className="btn btn-primary" to='/order/create'>Create</Link>
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
                                    <label>Order date from</label>
                                    <input type='date' className='form-control' />
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <div className='form-group'>
                                    <label>to date</label>
                                    <input type='date' className='form-control' />
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <button className='btn btn-primary btn-sm button-inline'>Find</button>
                            </div>
                        </div>
                        <div className='table-scroll'>
                            <table className='table table-striped table-bordered'>
                                <thead>
                                    <tr>
                                        <th>Order Id</th>
                                        <th>Customer Name</th>
                                        <th>Customer Address</th>
                                        <th>Customer Email</th>
                                        <th>Customer Phone</th>
                                        <th>ReOrder ID REF</th>
                                        <th>Employee Name</th>
                                        <th>Order Date</th>
                                        <th>Complete Date</th>
                                        <th>Pickup Date</th>
                                        <th>Delivery Date</th>
                                        <th>Shipper Name</th>
                                        <th>Electrican</th>
                                        <th>Sevice Name</th>
                                        <th>Installer</th>
                                        <th>Ship Fee</th>
                                        <th>Taxes(GST)</th>
                                        <th>Discount</th>
                                        <th>Surcharged</th>
                                        <th>Order Amount</th>
                                        <th>Invoice No.</th>
                                        <th>Invoice Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.row()}
                                </tbody>
                            </table>
                        </div>
                        <div className='paging'>
                            <Pagination innerClass='pagination pagination-sm'
                                itemsCountPerPage={50}
                                totalItemsCount={450}
                                pageRangeDisplayed={5} />
                            <select className='form-control page-size pull-right'>
                                <option>10</option>
                                <option>20</option>
                                <option>50</option>
                                <option>100</option>
                                <option>200</option>
                            </select>
                        </div>

                    </div>
                </div>
            </PageLayout>
        );
    }
}

export default OrderList;