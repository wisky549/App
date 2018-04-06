import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class DynamicInput extends Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.props.onChange({ target: { name: e.target.name, value: e.target.value } });
    }

    render() {

        let value = this.props.value != null ? this.props.value : '';
        
        if (this.props.type === 'select') return (
            <select key={this.props.name} name={this.props.name} className='form-control'
                onChange={this.onChange}>
                {this.props.options.map((option, i) => {
                    return <option key={i} value={option.value}>{option.label}</option>
                })}
            </select>
        )
        else return (
            <input key={this.props.name} name={this.props.name} className='form-control'
                type={this.props.type} value={value}
                onChange={this.onChange} />
        )
    }
}

DynamicInput.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    type: PropTypes.string,
    options: PropTypes.array,
    onChange: PropTypes.func
};