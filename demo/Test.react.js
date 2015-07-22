import ReactBootstrap, {Panel, Input, Button, ButtonInput, Pagination, Modal} from 'react-bootstrap';
import React, {Component} from 'react';
import Form from '@myfe/react-form';
import Grid from '@myfe/react-grid';
import Dialog from '@myfe/react-dialog';
import ObjectAssign from 'object-assign';


import DemoStore from './stores/DemoStore';
import DemoActions from './actions/DemoActions';

/**
 *  define class HelloDemo
 **/
class HelloDemo extends Component {
    constructor(props) {
        super(props);
        var state = {}
        ObjectAssign(state, {
            headList: this.GridPrepare(),
            subHeadList: this.subGridPrepare()
        }, DemoStore.getState());
        this.state = state;
    };

    componentDidMount() {
        DemoStore.listen(this._onChange.bind(this));
    }

    componentWillUnmount() {
        DemoStore.unlisten(this._onChange.bind(this));
    }

    _onChange(state) {
        console.log(state);
        this.setState(state);
    }

    subGridPrepare() {
        var headList = [{
            label: '#',
            name: 'id'
        }, {
            label: '影片',
            name: 'nm'
        }];
        return headList;
    }

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
                    type: 'button',
                    value: '查看',
                    class: 'info',
                    action: this.matchAction2.bind(this)
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
        DemoActions.showDialog(lineData);
    };

    matchAction2(lineData) {
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
        DemoActions.showDialog2(data);
    }

    matchClose() {
        DemoActions.closeDialog();
    }
    matchClose2() {
        DemoActions.closeDialog2();
    }


    render() {
        let dataList = this.state.dataList,
            subDataList = this.state.subDataList;
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
                        <div className="col-sm-2">
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
                    title={'确认信息'}
                    show={this.state.infoShow}
                    onHide={this.matchClose.bind(this)}
                >
                    {this.state.subInfo}
                </Dialog>
                <Dialog
                    title={'信息表'}
                    show={this.state.infoShow2}
                    onHide={this.matchClose2.bind(this)}
                >
                    <Grid
                        headList={this.state.subHeadList}
                        dataList={subDataList}
                    >
                    </Grid>
                </Dialog>
            </div>
        );
    };
};


/**
 *  render react
 **/
React.render(
    <HelloDemo />,
    document.getElementById('test')
);
