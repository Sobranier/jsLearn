import ReactBootstrap, {Panel, Input, Button, ButtonInput, Pagination} from 'react-bootstrap';
import React, {Component} from 'react';
import Form from '@myfe/react-form';
import Grid from '@myfe/react-grid';

class HelloDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            dataList: [],
            headList: this.GridPrepare()
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
                    action: matchAction
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
                    class: 'danger'
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
        function matchAction() {
            console.log(1);
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

    render() {
        var dataList = this.state.dataList;
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
            </div>
        );
    };
};

React.render(
    <HelloDemo />,
    document.getElementById('test')
);
