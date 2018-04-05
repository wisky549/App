import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AppModal } from '../layout/AppModal';
import Select from 'react-select';
import { Data } from '../app/DataMock';

export class AddProductModal extends Component {

    static propTypes = {};

    constructor(props) {
        super(props)

        this.state = {
            name: null,
            meterial: null,
            unitPrice: ''
        };

        this.onSelect = this.onSelect.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onMeterialSelect = this.onMeterialSelect.bind(this);
        this.calculateUnitPrice = this.calculateUnitPrice.bind(this);
    };

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });

        if (['width', 'drop'].includes(e.target.name)) {
            this.calculateUnitPrice();
        }
    }

    onSelect(cp, name, option) {
        let value = option != null ? option.value : '';
        cp.setState({
            [name]: value
        });

        cp.calculateUnitPrice();
    }

    onMeterialSelect(option) {
        var value = option != null ? option.value : '';
        this.setState({
            'meterial': value
        });

        this.calculateUnitPrice();
    }

    calculateUnitPrice() {
        setTimeout(() => {
            if (this.state.meterial != null && this.state.width != null && this.state.drop != null) {
                var unitPrice = this.state.width + this.state.drop
            }
            else {
                unitPrice = null;
            }

            this.setState({
                unitPrice: unitPrice
            })
        })
    }

    render() {
        return (
            <AppModal {...this.props}>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='form-group'>
                            <label>Product name</label>
                            <Select name='name'
                                value={this.state.name}
                                onChange={(e) => this.onSelect(this, 'name', e)}
                                options={Data.products} />
                        </div>
                    </div>
                    <TextBox name='width' title='Width'
                        value={this.state.width} onChange={this.onChange} type='number' />
                    <TextBox name='drop' title='Drop'
                        value={this.state.drop} onChange={this.onChange} type='number' />
                    <div className='col-md-6'>
                        <div className='form-group'>
                            <label>Meterial</label>
                            <Select name='meterial'
                                value={this.state.meterial}
                                onChange={this.onMeterialSelect}
                                options={Data.products[0].meterials} />
                        </div>
                    </div>
                    <TextBox name='unitPrice' title='UnitPrice'
                        value={this.state.unitPrice} disabled={true} type='number' />
                    <TextBox title='Location' type='textbox' />
                    <TextBox title='Control side' type='textbox' />
                    <TextBox title='Quantity' type='number' />
                </div>
            </AppModal>
        );
    }
}

class TextBox extends Component {
    render() {
        let value = this.props.value == null ? '' : this.props.value;
        return (
            <div className='col-md-6'>
                <div className='form-group'>
                    <label>{this.props.title}</label>
                    <input name={this.props.name} onChange={(e) => this.props.onChange(e)}
                        type={this.props.type} value={value} className='form-control' />
                </div>
            </div>
        );
    }
}

export default AddProductModal;