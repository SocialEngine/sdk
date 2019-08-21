import React from 'react';
import PropTypes from 'prop-types';

export class Modal extends React.Component {
    static propTypes = {
        title: PropTypes.any,
        body: PropTypes.any,
        footer: PropTypes.any,
        whenReady: PropTypes.any,
        type: PropTypes.string,
        url: PropTypes.string,
        component: PropTypes.any,
        size: PropTypes.string,
        className: PropTypes.string,
        children: PropTypes.any,
        progress: PropTypes.bool,
        backdrop: PropTypes.oneOf([PropTypes.string, PropTypes.bool]),
        keyboard: PropTypes.bool,
        bodyAddClass: PropTypes.string,
        center: PropTypes.bool,
        fade: PropTypes.bool
    };

    static defaultProps = {
        backdrop: true,
        keyboard: true,
        center: true,
        fade: true
    };

    close () {}

    setTitle (title) {}

    setFooter (footer) {}
}

export function render (Component, props = {}) {}
