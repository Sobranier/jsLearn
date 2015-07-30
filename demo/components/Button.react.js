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
        this.state = {
            loading: this.props.loading
        }
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
        if (this.state.loading) {
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
            disabled = (this.props.disabled || this.state.loading) ? true : false;

        if (this.props.counting) {
            let tick = () => {
                this.setState({loading: true});
                setTimeout(() => {
                    this.setState({loading: false});
                }, this.props.counting * 1000);
            }
            return (
                <Component
                    className={classNames}
                    disabled={disabled}
                    onClick={this.props.onClick}
                    onMouseUp={tick.bind(this)}
                >
                    {this.props.children}
                </Component>
            );
        } else {
            return (
                <Component
                    className={classNames}
                    disabled={disabled}
                    onClick={this.props.onClick}
                >
                    {this.props.children}
                </Component>
            );
        }
    }
}

Button.defaultProps = {
    myStyle: 'default',
    mySize: 'medium',
    block: false,
    disabled: false,
    active: false,
    loading: false,
    counting: false
}

export default Button;
