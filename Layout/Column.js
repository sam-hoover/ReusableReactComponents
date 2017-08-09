import React from 'react';
import PropTypes from 'prop-types';

function Column(props) {
    let className = props.className ? `${props.className}` : '';

    if(props.size) {className += ` col-${props.size}`}
    if(props.xs) {className += ` col-xs-${props.xs}`}
    if(props.sm) {className += ` col-sm-${props.sm}`}
    if(props.md) {className += ` col-md-${props.md}`}
    if(props.lg) {className += ` col-lg-${props.lg}`}
    if(props.offsetSm) {className += ` offset-sm-${props.offsetSm}`}
    if(props.offsetMd) {className += ` offset-md-${props.offsetMd}`}
    if(props.offsetLg) {className += ` offset-lg-${props.offsetLg}`}
    if(props.pushSm) {className += ` push-sm-${props.pushSm}`}
    if(props.pushMd) {className += ` push-md-${props.pushMd}`}
    if(props.pushLg) {className += ` push-lg-${props.pushLg}`}
    if(props.pullSm) {className += ` pull-sm-${props.pullSm}`}
    if(props.pullMd) {className += ` pull-md-${props.pullMd}`}
    if(props.pullLg) {className += ` pull-lg-${props.pullLg}`}
    if(props.flex === 'first' || props.flex === 'last' || props.flex === 'unordered') {
        className += ` flex-${props.flex}`
    }

    if(className === '') {className = 'col'}

    return(
        <div className={className}>
            {props.children}
        </div>
    );
}

Column.propTypes = {
    size: PropTypes.number,
    xs: PropTypes.number,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
    offsetSm: PropTypes.number,
    offsetMd: PropTypes.number,
    offsetLg: PropTypes.number,
    pushSm: PropTypes.number,
    pushMd: PropTypes.number,
    pushLg: PropTypes.number,
    pullSm: PropTypes.number,
    pullMd: PropTypes.number,
    pullLg: PropTypes.number,
    flex: PropTypes.string,
};

export default Column;