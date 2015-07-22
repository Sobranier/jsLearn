import alt from '../alt';
import DemoActions from '../actions/DemoActions';

class DemoStore {
    constructor() {
        this.bindActions(DemoActions);

        this.state = {
            query: '',
            dataList: [],
            headList: this.subGridPrepare(),
            infoShow: false,
            subShow: false,
            subShow2: false,
            subDataList: [],
            subHeadList: this.subGridPrepare()
        };
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

    mainGridPrepare() {   
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
                    action: this.deleteAction.bind(this)
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

    matchAction(lineData) {
        this.setState({
            subShow: !this.state.subShow,
            subInfo: lineData
        });
    };

    deleteAction(lineData, TdInfo) {
        var dataList = this.state.dataList;
        dataList.splice(TdInfo.lineIndex, 1);
        this.setState({
            dataList: dataList
        });
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
        this.setState({
            subShow2: !this.state.subShow2,
            subDataList: data
        });
    }


    onUpdateDemo(todo) {
        this.setState({todos: this.state.todos.concat(todo)})
        console.log('触发');
        console.log(this.state.todos);
    }
}

export default alt.createStore(DemoStore, 'DemoStore');
