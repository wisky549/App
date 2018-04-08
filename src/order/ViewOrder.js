import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { PageLayout } from '../layout/PageLayout';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../../node_modules/react-tabs/style/react-tabs.css';
import { EditOrderModal } from './EditOrderInfoModal';
import { EditPaymentModal } from './EditPaymentModal';
import { AddProductModal } from './AddProductModal';
import { ProcessBar } from '../control/ProcessBar';

class ViewOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editOrder: false,
            editPayment: false
        };

        this.editOrder = this
            .editOrder
            .bind(this);
        this.addProduct = this
            .addProduct
            .bind(this);
    }

    editOrder(isOpen) {
        this.setState({ editOrder: isOpen })
    }

    addProduct(isOpen) {
        this.setState({ isAddProduct: isOpen });
    }

    render() {
        return (
            <PageLayout title='Order details'>
                <div className="box">
                    <div className="box-body">
                        <div className='form-group'>
                            <Link to='/order'>Back to order list</Link>
                        </div>
                        <ProcessBar current={1} steps={['New', 'Producing', 'Deliver', 'Intallment', 'Invoiced']} />
                        <Tabs>
                            <TabList>
                                <Tab>Order Information</Tab>
                                <Tab>Payment Information</Tab>
                            </TabList>
                            <TabPanel>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <table className='table table-striped table-bordered'>
                                            <tbody>
                                                <Info title='Order Type' value='Bán lẻ' />
                                                <Info title='Order ID' value={this.props.match.params.id} />
                                                <Info title='Customer Name' value='Albert King' />
                                                <Info title='Customer Address' value='13 abc' />
                                                <Info title='Customer Email' value='albert@gmail.com' />
                                                <Info title='Customer Phone' value='9084555433' />
                                                <Info title='Order ID REF' value='N/A' />
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className='col-md-6'>
                                        <table className='table table-striped table-bordered'>
                                            <tbody>
                                                <Info title='Order Status' value='Proposal' />
                                                <Info title='Employee Name' value='Hoang Hai' />
                                                <Info title='Order Date' value='04/03/2018 22:31' />
                                                <Info title='Pickup Date' value='05/03/2018 22:31' />
                                                <Info title='Complete Date' value='05/13/2018 22:31' />
                                                <Info title='Invoice No.' value='ACB20314' />
                                                <Info title='Invoice Date' value='30/03/2018' />
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-12'>
                                        <div className='form-group'>
                                            <label>Note</label>
                                            <textarea disabled={true} className='form-control'></textarea>
                                        </div>
                                        <div className='text-right'>
                                            <EditOrderModal
                                                user={this.props.user}
                                                isOpen={this.state.editOrder}
                                                onClose={() => this.editOrder(false)} />
                                            <button onClick={() => this.editOrder(true)} className='btn btn-primary'>Edit Info</button>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <table className='table table-striped table-bordered'>
                                            <tbody>
                                                <Info title='Taxes(GST)' value='10%' />
                                                <Info title='Discount?' value='10%' />
                                                <Info title='Surcharged' value='30$' />
                                                <Info title='Ship Fee' value='' />
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className='col-md-6'>
                                        <table className='table table-striped table-bordered'>
                                            <thead>
                                                <tr>
                                                    <th>.No</th>
                                                    <th>Date Applied</th>
                                                    <th>Payment Type</th>
                                                    <th>Values</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>3/15/2018</td>
                                                    <td>C.O.D</td>
                                                    <td>$100</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>3/15/2018</td>
                                                    <td>Cash</td>
                                                    <td>$100</td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>3/15/2018</td>
                                                    <td>Cash</td>
                                                    <td>$100</td>
                                                </tr>
                                                <tr>
                                                    <td>4</td>
                                                    <td>3/15/2018</td>
                                                    <td>Cash</td>
                                                    <td>$100</td>
                                                </tr>
                                                <tr>
                                                    <td>5</td>
                                                    <td>3/15/2018</td>
                                                    <td>Cash</td>
                                                    <td>$100</td>
                                                </tr>
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <td colSpan='3' className='text-right text-red'><b>Amount Applied:</b></td>
                                                    <td className='text-red'><b>$500</b></td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-12'>
                                        <div className='text-right'>
                                            <EditPaymentModal
                                                isOpen={this.state.editPayment}
                                                onClose={() => {
                                                    this.setState({ editPayment: false })
                                                }} />
                                            <button onClick={() => { this.setState({ editPayment: true }) }}
                                                className='btn btn-primary'>Edit Payment</button>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                        </Tabs>
                        <hr />
                        <div className='product-list'>
                            <h2>Product list of Order</h2>
                            <div className='action-items form-group'>
                                <AddProductModal width='60%' isOpen={this.state.isAddProduct} onClose={() => this.addProduct(false)} />
                                <button onClick={() => this.addProduct(true)} className='btn btn-primary'>Add product</button>
                            </div>
                            <div className='table-scroll1'>
                                <table className='table' style={{ minWidth: 'auto' }}>
                                    <thead>
                                        <tr>
                                            <th>
                                                <input type='checkbox' />
                                            </th>
                                            <th>.No</th>
                                            <th>Code</th>
                                            <th>Name</th>
                                            <th>Width</th>
                                            <th>Drop</th>
                                            <th>Meterial</th>
                                            <th>Location</th>
                                            <th>Control side</th>
                                            <th>Quantity</th>
                                            <th>Unit price</th>
                                            <th>Colour</th>
                                            <th>Total Price</th>
                                            <th>Status</th>
                                            <th>Maker</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><input type='checkbox' /></td>
                                            <td>1</td>
                                            <td>ABC</td>
                                            <td>ROLLER BLIND BWC</td>
                                            <td>1000,22</td>
                                            <td>2,222</td>
                                            <td>M-SILVER GREY</td>
                                            <td>DOWN</td>
                                            <td>L</td>
                                            <td>1</td>
                                            <td>2,800.00</td>
                                            <td>Blue</td>
                                            <td>$ 2,800.00</td>
                                            <td>New</td>
                                            <td>Nga</td>
                                            <ProductActions onClick={() => this.addProduct(true)} />
                                        </tr>
                                        <tr>
                                            <td rowSpan='5' colSpan='3' />
                                            <td colSpan='13'>
                                                <b>Component Includes</b>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>ID</b>
                                            </td>
                                            <td colSpan='4'>
                                                <b>Name</b>
                                            </td>
                                            <td>
                                                <b>Quantity</b>
                                            </td>
                                            <td>
                                                <b>Unit Price</b>
                                            </td>
                                            <td>
                                                <b>Ext Charge</b>
                                            </td>
                                            <td>
                                                <b>Total Price</b>
                                            </td>
                                            <td colSpan='2'></td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td colSpan='4'>Name 1</td>
                                            <td>1</td>
                                            <td>1000,23</td>
                                            <td>10,2</td>
                                            <td>1000,23</td>
                                            <td colSpan='2'></td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td colSpan='4'>Name 2</td>
                                            <td>1</td>
                                            <td>1000,23</td>
                                            <td>10,2</td>
                                            <td>1000,23</td>
                                            <td colSpan='2'></td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td colSpan='4'>Name 3</td>
                                            <td>1</td>
                                            <td>1000,23</td>
                                            <td>10,2</td>
                                            <td>1000,23</td>
                                            <td colSpan='2'></td>
                                        </tr>
                                        <tr>
                                            <td colSpan='3'></td>
                                            <td colSpan='13'>
                                                <table className='table'>
                                                    <thead>
                                                        <tr>
                                                            <th>TUBE TYPE</th>
                                                            <th>TUBE SIZE</th>
                                                            <th>LENGTH OF CONTROL</th>
                                                            <th>WITH SPRING</th>
                                                            <th>MATEIRAL WIDTH</th>
                                                            <th>MATEIRAL DROP SIZE</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>type 1</td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><input type='checkbox' /></td>
                                            <td>2</td>
                                            <td>DDF</td>
                                            <td>ROLLER BLIND BWC</td>
                                            <td>1000,22</td>
                                            <td>2,222</td>
                                            <td>M-SILVER GREY</td>
                                            <td>DOWN</td>
                                            <td>L</td>
                                            <td>1</td>
                                            <td>2,800.00</td>
                                            <td>Blue</td>
                                            <td>$ 2,800.00</td>
                                            <td>New</td>
                                            <td>Nga</td>
                                            <ProductActions onClick={() => this.addProduct(true)} />
                                        </tr>
                                        <tr>
                                            <td><input type='checkbox' /></td>
                                            <td>3</td>
                                            <td>BVF</td>
                                            <td>ROLLER BLIND BWC</td>
                                            <td>1000,22</td>
                                            <td>2,222</td>
                                            <td>M-SILVER GREY</td>
                                            <td>DOWN</td>
                                            <td>L</td>
                                            <td>1</td>
                                            <td>2,800.00</td>
                                            <td>Blue</td>
                                            <td>$ 2,800.00</td>
                                            <td>New</td>
                                            <td>Nga</td>
                                            <ProductActions onClick={() => this.addProduct(true)} />
                                        </tr>
                                        <tr>
                                            <td><input type='checkbox' /></td>
                                            <td>4</td>
                                            <td>EFF</td>
                                            <td>ROLLER BLIND BWC</td>
                                            <td>1000,22</td>
                                            <td>2,222</td>
                                            <td>M-SILVER GREY</td>
                                            <td>DOWN</td>
                                            <td>L</td>
                                            <td>1</td>
                                            <td>2,800.00</td>
                                            <td>Blue</td>
                                            <td>$ 2,800.00</td>
                                            <td>New</td>
                                            <td>Nga</td>
                                            <ProductActions onClick={() => this.addProduct(true)} />
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr className='active'>
                                            <td colSpan='12' className='text-red text-right'><b>Grand Total:</b></td>
                                            <td><b className='text-red'>$ 548.00</b></td>
                                            <td colSpan='3'></td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                        <div className='mt-15px'>
                            <button className='btn btn-primary'>Print invoice</button>
                            <button className='btn btn-primary ml-5px'>Services</button>
                        </div>
                    </div>
                </div>
            </PageLayout>
        );
    }
}

class ProductActions extends Component {
    render() {
        return (
            <td className='text-center'>
                <button type="button" className="btn btn-sm btn-menu">
                    <span className="glyphicon glyphicon-cog"></span>
                    <ul className="dropdown-menu right">
                        <li><a onClick={this.props.onClick}>Edit product</a></li>
                        <li><a href="#">Delete product</a></li>
                        <li><a href="#">Something else here</a></li>
                    </ul>
                </button>
            </td>
        );
    }
}

class Info extends Component {
    render() {
        return (
            <tr>
                <td>
                    <b className=''>{this.props.title}:</b>
                </td>
                <td>
                    <span>{this.props.value}</span>
                </td>
            </tr>
        )
    }
}

class ProductItemInfo extends Component {
    render() {
        return (
            <div className='col-md-2'>
                <div>
                    <b>{this.props.title}</b>
                </div>
                <div>{this.props.value}</div>
            </div>
        )
    }
}

export default ViewOrder;