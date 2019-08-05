import React from 'react';
import PropTypes from 'prop-types';

export class Submit extends React.Component {
    static propTypes = {
        value: PropTypes.string.isRequired,
        disabled: PropTypes.bool,
        className: PropTypes.string,
        onClick: PropTypes.func
    };
}

export class Toggle extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        label: PropTypes.string,
        info: PropTypes.any,
        onError: PropTypes.any
    };
}

export class Textarea extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        onChange: PropTypes.func,
        label: PropTypes.string,
        value: PropTypes.any,
        info: PropTypes.string,
        codeEditor: PropTypes.object,
        tinyMce: PropTypes.object
    };
}

export class TextCopy extends React.Component {
    static propTypes = {
        value: PropTypes.string.isRequired,
        iconOnly: PropTypes.bool
    };
}

export class Select extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        options: PropTypes.any.isRequired,
        onChange: PropTypes.func.isRequired,
        placeholder: PropTypes.string,
        label: PropTypes.string,
        value: PropTypes.any,
        info: PropTypes.string,
        multiple: PropTypes.bool,
        maxItems: PropTypes.number
    };
}

export class Editor extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        value: PropTypes.any,
        error: PropTypes.any,
        required: PropTypes.bool,
        placeholder: PropTypes.string,
        activate: PropTypes.bool,
        focus: PropTypes.bool,
        maxLength: PropTypes.any,
        onValidation: PropTypes.func,
        onReset: PropTypes.func,
        onKeyDown: PropTypes.func,
        onChange: PropTypes.func.isRequired,
        onBlur: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
    };
}

export class SelectLoader extends React.Component {}
export class Checkbox extends React.Component {}

export class Password extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        prefix: PropTypes.any,
        info: PropTypes.string,
        label: PropTypes.string,
        value: PropTypes.any,
        required: PropTypes.bool,
        focus: PropTypes.bool,
        placeholder: PropTypes.string,
        error: PropTypes.object,
        acceptPhrases: PropTypes.bool,
        onValidation: PropTypes.func,
        onBlur: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
        onKeyUp: PropTypes.func,
        onClick: PropTypes.func,
        autoComplete: PropTypes.string,
        tooltip: PropTypes.string
    };
}

export class Email extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        prefix: PropTypes.any,
        info: PropTypes.string,
        label: PropTypes.string,
        value: PropTypes.any,
        required: PropTypes.bool,
        focus: PropTypes.bool,
        placeholder: PropTypes.string,
        error: PropTypes.object,
        acceptPhrases: PropTypes.bool,
        onValidation: PropTypes.func,
        onBlur: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
        onKeyUp: PropTypes.func,
        onClick: PropTypes.func,
        autoComplete: PropTypes.string,
        tooltip: PropTypes.string
    };
}

export class Text extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        prefix: PropTypes.any,
        info: PropTypes.string,
        label: PropTypes.string,
        value: PropTypes.any,
        required: PropTypes.bool,
        focus: PropTypes.bool,
        placeholder: PropTypes.string,
        error: PropTypes.object,
        acceptPhrases: PropTypes.bool,
        onValidation: PropTypes.func,
        onBlur: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
        onKeyUp: PropTypes.func,
        onClick: PropTypes.func,
        autoComplete: PropTypes.string,
        tooltip: PropTypes.string
    };
}

export class Number extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        prefix: PropTypes.any,
        info: PropTypes.string,
        label: PropTypes.string,
        value: PropTypes.any,
        required: PropTypes.bool,
        focus: PropTypes.bool,
        placeholder: PropTypes.string,
        error: PropTypes.object,
        acceptPhrases: PropTypes.bool,
        onValidation: PropTypes.func,
        onBlur: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
        onKeyUp: PropTypes.func,
        onClick: PropTypes.func,
        autoComplete: PropTypes.string,
        tooltip: PropTypes.string
    };
}

export class Form extends React.Component {
    static propTypes = {
        render: PropTypes.any.isRequired,
        onSuccess: PropTypes.func,
        onSubmit: PropTypes.func,
        onStart: PropTypes.func,
        onError: PropTypes.func,
        method: PropTypes.string,
        action: PropTypes.string,
        populate: PropTypes.object,
        values: PropTypes.object,
        phrases: PropTypes.object,
        className: PropTypes.string,
        modal: PropTypes.object,
        successMessage: PropTypes.any,
        element: PropTypes.string,
        disableOnSubmit: PropTypes.bool,
        coverOnSubmit: PropTypes.bool,
        captcha: PropTypes.bool,
        resetOnSuccess: PropTypes.bool,
        sendAsJson: PropTypes.bool,
        stickyErrors: PropTypes.bool
    };

    static defaultProps = {
        phrases: {},
        method: 'POST',
        populate: {},
        captcha: false,
        sendAsJson: false,
        stickyErrors: false
    };
}
