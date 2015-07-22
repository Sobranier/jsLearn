import ReactBootstrap, {Panel, Input, Button, ButtonInput, Pagination, Modal} from 'react-bootstrap';
import React, {Component} from 'react';
import Form from '@myfe/react-form';
import Grid from '@myfe/react-grid';
import Dialog from '@myfe/react-dialog';


/*以下是一段测试，测试alt的store用法*/
import TodoStore from './stores/TodoStore';
import TodoActions from './actions/TodoActions';

class Hello extends Component {
    constructor(props){
        super(props);
        this.state = TodoStore.getState();
    }
    componentDidMount() {
        TodoStore.listen(this._onChange.bind(this));
    }

    componentWillUnmount() {
        TodoStore.unlisten(this._onChange.bind(this));
    }

    render() {
        return (
            <ul>
                {this.state.todos.map((todo) => {
                    return (
                        <li key={todo.id} onClick={this._handleClick}>{todo.text}</li>
                    );
                })}
            </ul>
        );
    }

    _handleClick(e) {
        TodoActions.updateTodo({id:new Date,text:'XXX'});
    }

    _onChange(state) {
        this.setState(state);
    }
}


class HelloDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            dataList: [],
            headList: this.GridPrepare(),
            infoShow: false,
            subShow: false
        };
    };

    GridPrepare() {   
        var headList = [{
                label: '#',
                name: 'id'
            }, {
                label: '影片名',
                name:'nm',
                class: 'col-red'
            }, {
                label: '上映日期',
                name: 'ct'
            }, {
                label: '有效',
                name: 'active',
                renderer: statusRenderer
            }, {
                label: '操作',
                renderer: [{
                    type: 'button',
                    value: '匹配',
                    class: 'primary',
                    action: this.matchAction.bind(this)
                }, {
                    type: 'a',
                    value: '链接',
                    url: 'http://www.meituan.com',
                    class: 'XX'
                }]
            }, {
                label: '再操作',
                renderer: [{
                    type: 'html',
                    value: '测试环境数据',
                    class: 'col-blud'
                }, {
                    type: 'button',
                    value: '删除',
                    class: 'danger',
                    action: this.matchAction.bind(this)
                }]
            }, {
                label: '再再操作',
                renderer: [{
                    type: 'input',
                    value: '测试'
                }]
            }];
        function statusRenderer(content) {
            var ct = '';
            switch(content) {
                case true:
                    ct = '有效';
                    break;
                case false:
                    ct = '无效';
                    break;
            };
            return ct;
        }

        return headList;
    };

    getFormData(info) {
        console.log('Form对外输出，模拟生成Grid');
        var data = [{
                id: '1',
                nm: '道士下山',
                active: true,
                ct: (new Date()).toString()
            }, {
                id: '2',
                nm: '道士下山2',
                active: false,
                ct: (new Date()).toString()
            }];
        this.setState({dataList: data});
    };

    matchAction(lineData) {
        this.setState({
            subShow: !this.state.subShow,
            subInfo: lineData
        });
    };

    subShowToggle() {
        this.setState({
            subShow: !this.state.subShow
        });
    };

    infoShowToggle() {
        this.setState({
            infoShow: !this.state.infoShow
        });
    };

    render() {
        let dataList = this.state.dataList;
        return (
            <div className={"helloworld"}>
                <Panel header={"搜索区域"} bsStyle='info' className='container'>
                    <Form url="xxx/ooo" className={"form-horizontal row"} onVlidator={this.getFormData.bind(this)}>
                        <div className="col-sm-5">
                            <Input
                                type="text"
                                labelClassName="col-xs-4"
                                wrapperClassName="col-xs-8"
                                label="影院ID"
                                placeholder="输入ID"
                                name="id"
                            />
                        </div>
                        <div className="col-sm-5">
                            <Input
                                type="select"
                                labelClassName="col-xs-4"
                                wrapperClassName="col-xs-8"
                                label="有效"
                                placeholder="有效"
                                name="active"
                            >
                                <option value="1">是</option>
                                <option value="0">否</option>
                            </Input>
                        </div>
                        <div className="col-sm-1">
                            <ButtonInput
                                bsStyle="info"
                                bsSize="small"
                                block
                                value="确认"
                                onClick={this.infoShowToggle.bind(this)}
                            />
                        </div>
                        <div className="col-sm-1">
                            <ButtonInput
                                bsStyle='primary'
                                bsSize='small'
                                block
                                type="submit"
                                value="搜索"
                            />
                        </div>                   
                    </Form>
                </Panel>
                <div className="container table-responsive">
                    <Grid headList={this.state.headList} dataList={dataList}></Grid>
                    <div className="col-sm-4 col-sm-offset-8">
                        <Pagination
                            prev={true}
                            next={true}
                            ellipsis={true}
                            maxButtons={5}
                            activePage={this.state.activePage}
                            onSelect={this.handleSelect}
                        />
                    </div>
                </div>

                <Dialog 
                    title={'提示框'}
                    show={this.state.infoShow}
                    onHide={this.infoShowToggle.bind(this)}
                >
                    {'这是一个展示框'}
                </Dialog>
                <Dialog
                    title={'确认信息'}
                    show={this.state.subShow}
                    onHide={this.subShowToggle.bind(this)}
                >
                    {this.state.subInfo}
                </Dialog>
            </div>
        );
    };
};

React.render(
    <Hello />,
    document.getElementById('test')
);
