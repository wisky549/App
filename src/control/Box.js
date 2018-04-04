import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Box extends Component {

    propTypes = {
        title: PropTypes.string
    }

    render() {
        return (
            <div className="box">
                <div className="box-header with-border">
                    <h3 className="box-title">{this.props.title}</h3>
                </div>
                <div className="box-body">{this.props.children}</div>
            </div>
        );
    };
}

export class BoxHeader extends Component{
    
}