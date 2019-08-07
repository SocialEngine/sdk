import React from 'react';
import PropTypes from 'prop-types';

export default class Card extends React.Component {
    static propTypes = {
        html: PropTypes.any,
        onMount: PropTypes.string,
        title: PropTypes.any,
        titleAfter: PropTypes.any,
        className: PropTypes.string,
        children: PropTypes.any,
        header: PropTypes.any,
        element: PropTypes.string,
        useH1: PropTypes.bool,
        footer: PropTypes.any,
        body: PropTypes.any,
        nav: PropTypes.any,
        onClick: PropTypes.func,
        ready: PropTypes.bool,
        canToggle: PropTypes.any,
        isToggled: PropTypes.bool
    };

    static defaultProps = {
        element: 'div',
        useH1: false,
        ready: true,
        canToggle: false,
        isToggled: false
    };
}
