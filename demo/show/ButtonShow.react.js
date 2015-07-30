import React, {Component} from 'react';
import Button from '../components/Button.react';
import Panel from '../components/Panel.react';

class ButtonShow extends Component {
    constructor(props) {
        super(props);
    }

    Cn() {
        console.log('你点击了按钮');
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
                    onClick={this.Cn.bind(this)}
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
                    onClick={this.Cn.bind(this)}
                >
                    Disabled  点击无效
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

                <hr/>

                <Button
                    counting="5"
                >
                    Counting in 5
                </Button>
            </Panel>
        );
    }
}

export default ButtonShow;
