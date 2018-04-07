import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ProcessBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        let percent = 100 / this.props.steps.length;
        var options = this.props.steps.map((op, i) => {
            let pb = i > this.props.current ? 'progress-bar-default' : '';
            return <div key={i} className={"progress-bar " + pb} style={{ width: percent + '%' }}>{op}</div>
        });

        return (
            <div className="progress">
                {options}
            </div>
        );
    }
}

ProcessBar.propTypes = {
    current: PropTypes.number,
    steps: PropTypes.array,
};

export default ProcessBar;