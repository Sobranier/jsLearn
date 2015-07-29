import React, {Component} from 'react';
import ReactBootstrap, {Modal} from 'react-bootstrap';

class MyDialog extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Modal {...this.props}>        
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {this.props.children}
                </Modal.Body>
            </Modal>
        );
    }
}

export default MyDialog;
