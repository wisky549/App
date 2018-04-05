import React, { Component } from 'react';
import { PageLayout } from '../layout/PageLayout';

class CreateOrder extends Component {
    render() {
        return (
            <PageLayout title='Create order'>
                <div className="box">
                    <div className="box-body">
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className='form-group'>
                                    <label>Type of order</label>
                                    <select className='form-control'>
                                        <option>Bán lẻ</option>
                                        <option>Bán buôn</option>
                                    </select>
                                </div>
                                <div className='form-group'>
                                    <label>Order Id</label>
                                    <input type='text' className='form-control' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </PageLayout>
        );
    }
}

export default CreateOrder;