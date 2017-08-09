import React from 'react';
import PropTypes from 'prop-types';

function Row(props) {
    const justify = props.justify;
    let className = `row ${props.className}`;

    if(justify) {
        if(justify === 'start' || justify === 'center'|| justify === 'end' || justify === 'around' || justify === 'between') {
            className += ` justify-content-${justify}`;
        }
    }

    return(
        <div className={className} style={props.style}>
            {props.children}
        </div>
    );
}

Row.propTypes = {
    justify: PropTypes.string
};

export default Row;
