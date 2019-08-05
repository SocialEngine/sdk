import React from 'react';
import PropTypes from 'prop-types';

export default class Icon extends React.Component {
    static propTypes = {
        className: PropTypes.any.isRequired,
        color: PropTypes.string,
        tooltip: PropTypes.string,
        onClick: PropTypes.func,
        parentClassName: PropTypes.string,
        toggle: PropTypes.string,
        data: PropTypes.object,
        style: PropTypes.object
    };
}
