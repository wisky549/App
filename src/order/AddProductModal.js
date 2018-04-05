import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {AppModal} from '../layout/AppModal';

export class AddProductModal extends Component {

    static propTypes = {};

    render() {
        return (
            <AppModal {...this.props}>
                <div className='row'>
                    <div className='col-md-6'>
                        <TextBox title='Product name' type='textbox'/>
                        <TextBox title='Width' type='number'/>
                        <TextBox title='Drop' type='number'/>
                        <TextBox title='Meterial' type='textbox'/>
                        <TextBox title='Location' type='textbox'/>
                        <TextBox title='Control side' type='textbox'/>
                        <TextBox title='Quantity' type='number'/>
                        <TextBox title='UnitPrice' type='number'/>
                    </div>
                </div>
            </AppModal>
        );
    }
}

class TextBox extends Component {
    render() {
        return (
            <div className='form-group'>
                <label>{this.props.title}</label>
                <input type={this.props.type} className='form-control'/>
            </div>
        );
    }
}

export default AddProductModal;