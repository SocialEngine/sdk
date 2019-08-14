import React from 'react';
import PropTypes from 'prop-types';

export default class Post extends React.Component {
    static propTypes = {
        post: PropTypes.object.isRequired,
        preload: PropTypes.bool,
        showHeader: PropTypes.bool,
        showActions: PropTypes.bool,
        showChannels: PropTypes.bool,
        showComments: PropTypes.bool,
        showCommentForm: PropTypes.bool,
        showStats: PropTypes.bool,
        showExtra: PropTypes.bool,
        showRePost: PropTypes.bool,
        showSubject: PropTypes.bool,
        maxHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
        isRepost: PropTypes.bool,
        onPostDelete: PropTypes.func,
        isViewing: PropTypes.bool,
        handleStartReply: PropTypes.func,
        isNew: PropTypes.bool,
        commentAction: PropTypes.object,
        headerLocation: PropTypes.string,
        children: PropTypes.any,
        element: PropTypes.string,
        className: PropTypes.string,
        actionNav: PropTypes.func
    };
}
