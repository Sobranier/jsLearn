import React, {Component} from 'react';

class Button extends Component {
    constructor(props) {
        super(props);
        this.sizes = {
            'large': 'lg',
            'medium': '',
            'small': 'sm',
            'xsmall': 'xs'
        };
    }

    render() {
        let renderer = this.props.href || this.props.target ? 'renderA' : 'renderButton',
            classNames = this.getClassName();

        return this[renderer](classNames.join(' '));
    }

    getClassName() {
        let classNames = ['btn'];

        classNames.push(this.props.className);
        classNames.push('btn-' + this.props.myStyle);
        if (this.props.mySize !== 'medium')
        {
            classNames.push('btn-' + this.sizes[this.props.mySize]);
        }
        if (this.props.block) {
            classNames.push('btn-block');
        }
        if (this.props.active) {
            classNames.push('active');
        }
        if (this.props.loading) {
            classNames.push('loading');
        }

        return classNames;
    }

    renderA(classNames) {
        let Component = this.props.componentClass || 'a',
            href = this.props.href || '#',
            target = this.props.target || '_blank';

        if (this.props.disabled) {
            classNames += ' disabled';
        }

        return (
            <Component
                href={href}
                target={target}
                className={classNames}
            >
                {this.props.children}
            </Component>
        );
    }

    renderButton(classNames) {
        let Component = this.props.componentClass || 'button',
            disabled = (this.props.disabled || this.props.loading) ? true : false;

        return (
            <Component
                className={classNames}
                disabled={disabled}
            >
                {this.props.children}
            </Component>
        );
    }

}

Button.defaultProps = {
    myStyle: 'default',
    mySize: 'medium',
    block: false,
    disabled: false,
    active: false,
    loading: false
}

export default Button;
