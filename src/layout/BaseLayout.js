import React, {Component} from 'react';
import { PropTypes } from 'prop-types';

export class BaseLayout extends Component {
    constructor(props) {
        super(props);
        document.title = props.title;
    }

    render() {
        return <div>
            {this.props.children}
        </div>;
    }
}

BaseLayout.propTypes = {
    title: PropTypes.string
}