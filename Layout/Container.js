import React from 'react';
import PropTypes from 'prop-types';

function Container(props) {
    const className = props.fluid ? 'container-fluid' : 'container';

    return(
        <div className={className}>
            {props.children}
        </div>
    );
}

Container.propTypes = {
    fluid: PropTypes.bool,
};

export default Container;
