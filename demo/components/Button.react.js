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
        let renderer,
            classNames = ['btn'];
        classNames.push(this.props.className);
        classNames.push('btn-' + this.props.myStyle);
        classNames.push('btn-' + this.sizes[this.props.mySize]);
        if (this.props.block) {
            classNames.push('btn-block');
        }

        renderer = this.props.href || this.props.target ? 'renderA' : 'renderButton';

        return this[renderer](classNames.join(' '));
    }

    renderA(classNames) {
        let Component = this.props.componentClass || 'a',
            href = this.props.href || '#',
            target = this.props.target || '_blank';

        return (
            <Component
                {...this.props}
                href={href}
                target={target}
                className={classNames}
            >
                {this.props.children}
            </Component>
        );
    }

    renderButton(classNames) {
        let Component = this.props.componentClass || 'button';

        return (
            <Component
                {...this.props}
                className={classNames}
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
    disabled: false
}

export default Button;
