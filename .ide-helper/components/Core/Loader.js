import React from 'react';
import PropTypes from 'prop-types';

export default class Loader extends React.Component {
    static propTypes = {
        type: PropTypes.any,
        style: PropTypes.object,
        className: PropTypes.string,
        loaderProps: PropTypes.object
    };

    static defaultProps = {
        style: {},
        loaderProps: {}
    };
}
