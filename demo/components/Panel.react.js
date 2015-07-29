import React, {Component} from 'react';

class Panel extends Component {
    constructor(props) {
        super(props);
    }

    renderHeading() {
        if (!this.props.header) {
            return null;
        } else {
            return (
                <div className="panel-heading">
                    {this.props.header}
                </div>
            );
        }
    }

    renderFooter() {
        if (!this.props.footer) {
            return null;
        } else {
            return (
                <div className="panel-footer">
                    {this.props.footerer}
                </div>
            );
        }
    }

    render() {
        let classNames = ['panel'];
        classNames.push(this.props.className);
        classNames.push('panel-' + this.props.myStyle);
        return (
            <div
                className={classNames.join(' ')}
            >
                {this.renderHeading()}
                <div className="panel-body">
                    {this.props.children}
                </div>
                {this.renderFooter()}
            </div>        
        );
    }
}

Panel.defaultProps = {
    myStyle: 'default'
}

export default Panel;
