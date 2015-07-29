import React, {Component} from 'react';
import Button from '../components/Button.react.js';

class ButtonShow extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">按钮组</div>
                <div className="panel-body">
                    <Button
                        mySize="large"
                        className="text"
                    >
                        按钮
                    </Button>
                    <Button
                        myStyle='link'
                        href="http://www.meituan.com"
                    >
                        按钮
                    </Button>
                    <Button
                        myStyle='primary'
                        disabled='true'
                    >
                        按钮
                    </Button>
                    <Button
                        block
                    >
                        按钮
                    </Button>
                    
                </div>
            </div>
        );
    }
}

export default ButtonShow;
