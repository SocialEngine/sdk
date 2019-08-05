import React from 'react';
import PropTypes from 'prop-types';

export default class UserImage extends React.Component {
    static propTypes = {
        user: PropTypes.object.isRequired,
        className: PropTypes.any,
        link: PropTypes.bool,
        size: PropTypes.string,
        tooltip: PropTypes.bool,
        acp: PropTypes.bool
    };

    static defaultProps = {
        className: '',
        link: false,
        size: 'small'
    };
}
