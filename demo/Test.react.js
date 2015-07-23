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
        this.state = DemoStore.getState();
    };

    componentDidMount() {
        DemoStore.listen(this._onChange.bind(this));
    }

    componentWillUnmount() {
        DemoStore.unlisten(this._onChange.bind(this));
    }

    _onChange(state) {
        this.setState(state);
    }


    /**
     *  actions
     **/
    getFormData(info) {
        console.log('Form对外输出，模拟生成Grid');
        DemoActions.renderGrid(info);
    };
    infoClose() {
        DemoActions.closeDialog();
    }
    infoClose2() {
        DemoActions.closeDialog2();
    }


    /**
     *  render
     **/
    render() {
        let dataList = this.state.dataList,
            subDataList = this.state.subDataList;
        console.log(subDataList);
        return (
            <div className={"helloworld"}>
                <Panel
                    header={"搜索区域"}
                    bsStyle='info'
                    className='container'
                >
                    <Form
                        url="xxx/ooo"
                        className={"form-horizontal row"}
                        onVlidator={this.getFormData.bind(this)}
                    >
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
                    <Grid
                        columns={this.state.headList}
                        rows={dataList}>
                    </Grid>
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
                    onHide={this.infoClose.bind(this)}
                >
                    {this.state.subInfo}
                </Dialog>
                <Dialog
                    title={'信息表'}
                    show={this.state.infoShow2}
                    onHide={this.infoClose2.bind(this)}
                >
                    <Grid
                        columns={this.state.subHeadList}
                        rows={subDataList}
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
