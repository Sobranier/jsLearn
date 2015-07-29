import React, {Component} from 'react';

class MyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            className: props.className || 'form-horizontal',
            method: props.method || 'post',
            action: props.action
        }
    }

    _handleSubmit(event) {
        event.preventDefault();
        event.stopPropagation();
        this.props.onVlidator('data form form');
    }

    render() {
        return (
            <form
                ref="form"
                method={this.state.method}
                className={this.state.className}
                onSubmit={this._handleSubmit.bind(this)}
            >
                {this.props.children}
            </form>
        );
    }
}

export default MyForm;
