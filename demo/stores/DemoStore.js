import alt from '../alt';
import DemoActions from '../actions/DemoActions';

class DemoStore {
    constructor() {
        this.bindActions(DemoActions);

        this.state = {
            query: '',
            infoShow: false,
            infoShow2: false,
            headList: this._gridPrepare(),
            dataList: [],
            subHeadList: this._subGridPrepare(),
            subDataList: []
        };
    }

    _gridPrepare() {   
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
                renderer: this._statusRenderer
            }, {
                label: '操作',
                renderer: [{
                    type: 'button',
                    value: '匹配',
                    class: 'primary',
                    action: this._matchAction.bind(this)
                }, {
                    type: 'button',
                    value: '查看',
                    class: 'info',
                    action: this._matchAction2.bind(this)
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
                    action: this._matchAction.bind(this)
                }]
            }, {
                label: '再再操作',
                renderer: [{
                    type: 'input',
                    value: '测试'
                }]
            }];

        return headList;
    };

    _statusRenderer(content) {
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

    _subGridPrepare() {
        var headList = [{
            label: '#',
            name: 'id'
        }, {
            label: '影片',
            name: 'nm'
        }];
        return headList;
    }


    /**
     *  innerActions
     **/
    _matchAction(lineData) {
        DemoActions.showDialog(lineData);
    };

    _matchAction2(lineData) {
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

    /**
     *  Actions
     **/

    onShowDialog(lineData) {
        this.setState({
            infoShow: true,
            subInfo: lineData        
        });
    }
    onShowDialog2(data) {
        var data = [{
            id: '1',
            nm: '捉妖记'
        }, {
            id: '2',
            nm: '捉妖记2'
        }];
        this.setState({
            infoShow2: true,
            subDataList: data
        });
    }
    onCloseDialog() {
        this.setState({
            infoShow: false,
            subInfo: {}
        });
    }
    onCloseDialog2() {
        this.setState({
            infoShow2: false,
            subDataList: []
        });
    }
    onRenderGrid() {
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
            dataList: data
        });
    }
}

export default alt.createStore(DemoStore, 'DemoStore');
