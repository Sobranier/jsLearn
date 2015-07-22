import alt from '../alt';

class TodoActions {
    constructor() {
        this.generateActions(
            'updateTodo'
        )
    }
}

export default alt.createActions(TodoActions);
