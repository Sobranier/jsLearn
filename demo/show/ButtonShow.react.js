import React, {Component} from 'react';
import Button from '@myfe/react-button';
import Panel from '@myfe/react-panel';

class ButtonShow extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Panel
                header='按钮组'
            >
                <Button
                    className="text"
                >
                    默认样式
                </Button>
                <Button
                    myStyle="primary"
                >
                    Primary
                </Button>
                <Button
                    myStyle="success"
                >
                    Success
                </Button>
                <Button
                    myStyle="info"
                >
                    Info
                </Button>
                <Button
                    myStyle="warning"
                >
                    Warning
                </Button>
                <Button
                    myStyle="danger"
                >
                    Danger
                </Button>
                <Button
                    myStyle="link"
                >
                    Link
                </Button>

                <hr/>

                <Button
                    mySize="large"
                >
                    Large
                </Button>
                <Button
                >
                    Medium
                </Button>
                <Button
                    mySize="small"
                >
                    Small
                </Button>
                <Button
                    mySize="xsmall"
                >
                    Xsmall
                </Button>

                <hr/>

                <Button
                    block
                >
                    Block
                </Button>

                <hr/>

                <Button
                    href="http://www.meituan.com"
                >
                    A Link in Button
                </Button>
                <Button
                    href="#"
                    myStyle="link"
                >
                    A Link in Link
                </Button>

                <hr/>

                <Button
                    active
                    myStyle="primary"
                >
                    Active
                </Button>
                <Button
                    disabled
                >
                    Disabled
                </Button>
                <Button
                    loading
                >
                    loading
                </Button>
                <Button
                    disabled
                    href="http://www.meituan.com"
                >
                    Disabled
                </Button>
            </Panel>
        );
    }
}

export default ButtonShow;
