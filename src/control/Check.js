import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Check extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value
        };
    }

    render() {
        var message = '';
        if (this.props.value != this.state.value) {
            var value = this.props.value,
                display = this.props.display || 'This field';

            if (this.props.rules != null) {
                var rules = this.props.rules;
                if (rules.includes('required') && !value) {
                    message = display + ' is a required field.';
                }
            }
        }

        this.state.value = this.props.value;

        return (
            <div className='error-message'>{message}</div>
        );
    }
}

Check.propTypes = {
    value: PropTypes.any,
    rules: PropTypes.array,
    display: PropTypes.string
};

export default Check;