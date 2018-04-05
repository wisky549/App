import React, { Component } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import AppModal from '../layout/AppModal';
import { OrderForm } from './OrderForm';

export class EditOrderModal extends Component {
    constructor(props) {
        super(props)
    };

    static propTypes = {
        isOpen: PropTypes.bool,
        user: PropTypes.object,
        onClose: PropTypes.func,
    };

    render() {
        return <AppModal isOpen={this.props.isOpen} onClose={this.props.onClose}>
            <OrderForm isEdit={true} user={this.props.user} />
        </AppModal>
    };
}

export default EditOrderModal;