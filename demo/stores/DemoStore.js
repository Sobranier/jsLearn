import alt from '../alt';
import DemoActions from '../actions/DemoActions';

class DemoStore {
    constructor() {
        this.bindActions(DemoActions);

        this.state = {
            query: '',
            dataList: [],
            infoShow: false,
            infoShow2: false,
            subDataList: [],
        };
    }

    onShowDialog(lineData) {
        console.log('展示信息');
        console.log(this.state);
        this.setState({
            infoShow: true,
            subInfo: lineData        
        });
    }
    onShowDialog2(data) {
        console.log('展示列表');
        console.log(this.state);
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
}

export default alt.createStore(DemoStore, 'DemoStore');
