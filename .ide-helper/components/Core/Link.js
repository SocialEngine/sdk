import React from 'react';
import PropTypes from 'prop-types';

export default class Link extends React.Component {
    static propTypes = {
        to: PropTypes.any,
        body: PropTypes.any,
        forward: PropTypes.bool,
        className: PropTypes.any,
        span: PropTypes.bool,
        style: PropTypes.object,
        data: PropTypes.object,
        tooltip: PropTypes.any,
        onClick: PropTypes.func,
        children: PropTypes.any,
        withState: PropTypes.object,
        element: PropTypes.string,
        modal: PropTypes.any,
        modalProps: PropTypes.object,
        target: PropTypes.string,
        setToActive: PropTypes.bool,
        locationHref: PropTypes.bool,
        confirm: PropTypes.object,
        role: PropTypes.string,
        aria: PropTypes.object
    };

    static defaultProps = {
        body: '',
        forward: false,
        className: '',
        span: false,
        style: {},
        modal: false,
        setToActive: false,
        locationHref: false,
        modalProps: {},
        role: null
    };
}
