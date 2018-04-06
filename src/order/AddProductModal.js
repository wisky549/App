import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AppModal } from '../layout/AppModal';
import Select from 'react-select';
import { Data } from '../app/DataMock';

export class AddProductModal extends Component {

    static propTypes = {};

    constructor(props) {
        super(props)

        this.state = { product: null, meterial: null, unitPrice: '' };

        this.onChange = this.onChange.bind(this);
        this.onProductChange = this.onProductChange.bind(this);
        this.onMeterialSelect = this.onMeterialSelect.bind(this);
        this.calculateUnitPrice = this.calculateUnitPrice.bind(this);
    };

    onChange(e) {
        if (['width', 'drop'].includes(e.target.name)) {
            this.setState({ [e.target.name]: e.target.value }, () => this.calculateUnitPrice());
        }
        else {
            this.setState({ [e.target.name]: e.target.value });
        }
    }

    onProductChange(option) {
        this.setState({ 'product': option, 'meterial': option != null ? this.state.meterial : null }, () => {
            this.calculateUnitPrice();
        });
    }

    onMeterialSelect(option) {
        this.setState({ 'meterial': option != null ? option.value : null }, () => {
            this.calculateUnitPrice();
        });
    }

    calculateUnitPrice() {
        if (this.state.meterial != null && this.state.width != null && this.state.drop != null) {
            var unitPrice = this.state.width + this.state.drop
        } else {
            unitPrice = null;
        }

        this.setState({ unitPrice: unitPrice })
    }

    render() {
        return (
            <AppModal {...this.props} rightButton={<RightButton />}>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='form-group'>
                            <label>Product name</label>
                            <Select name='name' value={this.state.product} options={Data.products}
                                onChange={this.onProductChange} />
                        </div>
                    </div>
                    <TextBox name='width' title='Width' value={this.state.width} type='number'
                        onChange={this.onChange} />
                    <TextBox name='drop' title='Drop' value={this.state.drop} type='number'
                        onChange={this.onChange} />
                    <div className='col-md-6'>
                        <div className='form-group'>
                            <label>Meterial</label>
                            <Select name='meterial' value={this.state.meterial} options={Data.products[0].meterials}
                                onChange={this.onMeterialSelect} />
                        </div>
                    </div>
                    <TextBox name='unitPrice' title='UnitPrice' value={this.state.unitPrice} disabled={true} type='number' />
                    <TextBox name='location' title='Location' type='textbox' value={this.state.location}
                        onChange={this.onChange} />
                    <TextBox name='colour' title='Colour' type='textbox' value={this.state.colour}
                        onChange={this.onChange} />
                    <TextBox name='control' title='Control side' type='textbox' value={this.state.control}
                        onChange={this.onChange} />
                    <TextBox name='quantity' title='Quantity' type='number' value={this.state.quantity}
                        onChange={this.onChange} />
                    <ExtendFields product={this.state.product} onChange={this.onChange} state={this.state} />
                </div>
                <ProductComponents product={this.state.product} />
            </AppModal>
        );
    }
}

export default AddProductModal;

class RightButton extends Component {
    render() {
        return (
            <div className='pull-left'>
                <button className='btn btn-default'>Add components</button>
            </div>
        );
    }
}

class ProductComponents extends Component {
    render() {
        const product = this.props.product;
        if (product && product.components) {
            let rows = product.components.map((c, i) => {
                return <tr key={'component_' + i}>
                    <td>{i + 1}</td>
                    <td>{c.title}</td>
                    <td>{1}</td>
                    <td>{c.price}</td>
                    <td>{!c.free ? 'Yes' : 'No'}</td>
                    <th></th>
                </tr>
            });

            return (<table className='table'>
                <thead><tr>
                    <th>.No</th><th>Name</th><th>Quantity</th><th>Unit price</th><th>Extent Charged</th><th></th>
                </tr></thead>
                <tbody>
                    {rows}
                </tbody>
            </table>)
        }

        return (null);
    }
}

class ExtendFields extends Component {
    render() {
        let fields = [];
        if (this.props.product != null) {
            Data.productTypes[this.props.product.typeIndex].fields.forEach(field => {
                let name = 'ext.' + field.name;
                fields.push(<TextBox key={name} name={name} title={field.title}
                    type={field.type} value={this.props.state[name]}
                    onChange={this.props.onChange} />)
            });
        }

        return (fields);
    }
}

class TextBox extends Component {
    render() {
        let value = this.props.value == null ? '' : this.props.value;
        return (
            <div className='col-md-6'>
                <div className='form-group'>
                    <label>{this.props.title}</label>
                    <input name={this.props.name} type={this.props.type}
                        value={value} disabled={this.props.disabled}
                        onChange={(e) => this.props.onChange(e)}
                        className='form-control' />
                </div>
            </div>
        );
    }
}