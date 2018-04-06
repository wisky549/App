import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

Modal.setAppElement('#root')

export class AppModal extends Component {
    constructor(props) {
        super(props)
    };

    render() {
        return (
            <Modal style={{ content: { width: '50%' } }} isOpen={this.props.isOpen}>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className=''>{this.props.children}</div>
                        <div className="text-right buttons">
                            {this.props.rightButton}
                            <button type="button" className="btn btn-default" onClick={this.props.onClose}>Close</button>
                            {
                                !this.props.isHideSave ? <button hidden={true} type="button" className="btn btn-primary ml-5px">Save</button> : null
                            }
                        </div>
                    </div>
                </div>
            </Modal>
        )
    }
};

AppModal.propTypes = {
    onClose: PropTypes.func,
    isHideSave: PropTypes.bool
}

export default AppModal;