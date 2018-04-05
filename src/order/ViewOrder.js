import React, {Component} from 'react';
import {PageLayout} from '../layout/PageLayout';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import '../../node_modules/react-tabs/style/react-tabs.css';

class ViewOrder extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <PageLayout title='Order details'>
                <div className="box">
                    <div className="box-body">
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
                                                <Info title='Order Type' value='Bán lẻ'/>
                                                <Info title='Order ID' value={this.props.match.params.id}/>
                                                <Info title='Customer Name' value='Albert King'/>
                                                <Info title='Customer Address' value='13 abc'/>
                                                <Info title='Customer Email' value='albert@gmail.com'/>
                                                <Info title='Customer Phone' value='9084555433'/>
                                                <Info title='Order ID REF' value='N/A'/>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className='col-md-6'>
                                        <table className='table table-striped table-bordered'>
                                            <tbody>
                                                <Info title='Order Status' value='Proposal'/>
                                                <Info title='Employee Name' value='Hoang Hai'/>
                                                <Info title='Order Date' value='04/03/2018 22:31'/>
                                                <Info title='Pickup Date' value='05/03/2018 22:31'/>
                                                <Info title='Complete Date' value='05/13/2018 22:31'/>
                                                <Info title='Invoice No.' value='ACB20314'/>
                                                <Info title='Invoice Date' value='30/03/2018'/>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-12 text-right'>
                                        <button className='btn btn-primary'>Edit order info</button>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <table className='table table-striped table-bordered'>
                                            <tbody>
                                                <Info title='Payment Type' value='C.O.D'/>
                                                <Info title='Taxes(GST)' value='10%'/>
                                                <Info title='Discount?' value='10%'/>
                                                <Info title='Surcharged' value='30$'/>
                                                <Info title='Ship Fee' value=''/>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className='col-md-6'>
                                        <table className='table table-striped table-bordered'>
                                            <thead>
                                                <tr>
                                                    <th>.No</th>
                                                    <th>Values</th>
                                                    <th>Date Applied</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>$100</td>
                                                    <td>3/15/2018</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>$100</td>
                                                    <td>3/15/2018</td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>$100</td>
                                                    <td>3/15/2018</td>
                                                </tr>
                                                <tr>
                                                    <td>4</td>
                                                    <td>$100</td>
                                                    <td>3/15/2018</td>
                                                </tr>
                                                <tr>
                                                    <td>5</td>
                                                    <td>$100</td>
                                                    <td>3/15/2018</td>
                                                </tr>
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <td>Amount Applied</td>
                                                    <td>$550</td>
                                                    <td></td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-12 text-right'>
                                    <button className='btn btn-primary'>Edit payment info</button>
                                    </div>
                                </div>
                            </TabPanel>
                        </Tabs>
                        <hr/>
                        <div className='product-list'>
                            <h2>Product list of Order</h2>
                            <div className='action-items form-group'>
                                <button className='btn btn-primary'>Add product</button>
                            </div>
                            <table className='table'>
                                <thead>
                                    <tr>
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
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>1</td>
                                        <td>ROLLER BLIND BWC</td>
                                        <td>1000,22</td>
                                        <td>2,222</td>
                                        <td>M-SILVER GREY</td>
                                        <td>DOWN</td>
                                        <td>L</td>
                                        <td>1</td>
                                        <td>2,800.00</td>
                                        <td>Blue</td>
                                        <td>2,800.00</td>
                                        <td>New</td>
                                        <td>Nga</td>
                                    </tr>
                                    <tr>
                                        <td rowSpan='5' colSpan='3'/>
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
                                            <b>Extent Charged</b>
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
                                        <td></td>
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
                                                        <th>FLAP</th>
                                                        <th>FLAP TYPE</th>
                                                        <th>FLAP SIZE</th>
                                                        <th>BOTTOM RAIL</th>
                                                        <th>HOOD SIZE</th>
                                                        <th>FRAME</th>
                                                        <th>MESH</th>
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
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>2</td>
                                        <td>ROLLER BLIND BWC</td>
                                        <td>1000,22</td>
                                        <td>2,222</td>
                                        <td>M-SILVER GREY</td>
                                        <td>DOWN</td>
                                        <td>L</td>
                                        <td>1</td>
                                        <td>2,800.00</td>
                                        <td>Blue</td>
                                        <td>2,800.00</td>
                                        <td>New</td>
                                        <td>Nga</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>2</td>
                                        <td>ROLLER BLIND BWC</td>
                                        <td>1000,22</td>
                                        <td>2,222</td>
                                        <td>M-SILVER GREY</td>
                                        <td>DOWN</td>
                                        <td>L</td>
                                        <td>1</td>
                                        <td>2,800.00</td>
                                        <td>Blue</td>
                                        <td>2,800.00</td>
                                        <td>New</td>
                                        <td>Nga</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>2</td>
                                        <td>ROLLER BLIND BWC</td>
                                        <td>1000,22</td>
                                        <td>2,222</td>
                                        <td>M-SILVER GREY</td>
                                        <td>DOWN</td>
                                        <td>L</td>
                                        <td>1</td>
                                        <td>2,800.00</td>
                                        <td>Blue</td>
                                        <td>2,800.00</td>
                                        <td>New</td>
                                        <td>Nga</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </PageLayout>
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