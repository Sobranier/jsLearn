import alt from '../alt';

class DemoActions {
    constructor() {
        this.generateActions(
            'showDialog',
            'showDialog2',
            'closeDialog',
            'closeDialog2',
            'getData'
        )
    }
}

export default alt.createActions(DemoActions);
