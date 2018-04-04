import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Validator from '../utility/Validator';

class AppInput extends Component {
    constructor() {
        super();

        this.onChange = this
            .onChange
            .bind(this);
    }

    onChange(e) {
        if (this.props.onChange != undefined) {
            this
                .props
                .onChange(e, {
                    name: e.target.name,
                    value: e.target.value
                });
        }

        //Validator.showInputError(this, e.target.name);

        
    }

    render() {
        return (
            <div className="form-group has-feedback">
                <label id={this.props.name + "Label"}>{this.props.display}</label>
                <input
                    defaultValue={this.props.value}
                    ref={this.props.name}
                    name={this.props.name}
                    type={this.props.type}
                    onChange={this.onChange}
                    placeholder={this.props.display}
                    className="form-control"/>
                <span
                    className={'glyphicon-' + this.props.icon + " glyphicon form-control-feedback"}></span>
                <div className='error-message' id={this.props.name + 'Error'}/>
            </div>
        );
    }
}

AppInput.propTypes = {
    value: PropTypes.any,
    type: PropTypes.string,
    name: PropTypes.string,
    icon: PropTypes.string,
    display: PropTypes.string,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    validations: PropTypes.object,
};

export default AppInput;