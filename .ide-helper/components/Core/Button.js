import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
    static propTypes = {
        render: PropTypes.any,
        children: PropTypes.any,
        name: PropTypes.string,
        onClick: PropTypes.func,
        tooltip: PropTypes.string,
        className: PropTypes.string,
        data: PropTypes.object,
        modal: PropTypes.any,
        modalProps: PropTypes.object,
        modalComponentProps: PropTypes.object,
        disabled: PropTypes.bool,
        type: PropTypes.string,
        onClickLoader: PropTypes.bool,
        buttonName: PropTypes.string
    };

    static defaultProps = {
        name: 'secondary',
        modalProps: {},
        modalComponentProps: {},
        disabled: false,
        type: 'button'
    };
}
