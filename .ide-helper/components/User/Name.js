import React from 'react';
import PropTypes from 'prop-types';

export default class UserName extends React.Component {
    static propTypes = {
        user: PropTypes.object.isRequired,
        link: PropTypes.bool,
        className: PropTypes.string,
        firstName: PropTypes.bool,
        plural: PropTypes.bool,
        ellipsis: PropTypes.bool,
        withUserName: PropTypes.bool,
        linkProps: PropTypes.object,
        acp: PropTypes.bool,
        prefix: PropTypes.any,
        append: PropTypes.any
    };

    static defaultProps = {
        link: true,
        firstName: false,
        plural: false,
        ellipsis: false,
        withUserName: false,
        linkProps: {},
        append: null
    };
}
