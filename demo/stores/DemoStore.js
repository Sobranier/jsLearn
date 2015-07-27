import alt from '../alt';
import DemoActions from '../actions/DemoActions';

class DemoStore {
    constructor() {
        this.bindActions(DemoActions);

        this.state = {
            query: '',
            infoShow: false,
            infoShow2: false,
            dataList: [],
            subDataList: []
        };
    }

    /**
     *  Actions
     **/

    onShowDialog(lineData) {
        this.setState({
            infoShow: true,
            subInfo: lineData.nm
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
    onGetData() {
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
