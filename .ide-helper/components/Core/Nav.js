import React from 'react';
import PropTypes from 'prop-types';

export default class Nav extends React.Component {
    static propTypes = {
        location: PropTypes.any.isRequired,
        navbar: PropTypes.bool,
        className: PropTypes.any,
        viewer: PropTypes.string,
        type: PropTypes.string,
        columns: PropTypes.bool,
        element: PropTypes.any,
        onClick: PropTypes.func,
        setActive: PropTypes.func,
        prepend: PropTypes.any,
        append: PropTypes.any,
        clickActivate: PropTypes.bool,
        iconClassName: PropTypes.string,
        limit: PropTypes.number,
        h1OnActive: PropTypes.bool,
        replace: PropTypes.object,
        filter: PropTypes.func,
        viewport: PropTypes.string,
        useDropDown: PropTypes.bool,
        dropdownClass: PropTypes.string
    };
}
