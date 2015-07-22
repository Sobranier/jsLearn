import alt from '../alt.js';
import TodoActions from '../actions/TodoActions';

class TodoStore {
    constructor() {
        this.bindActions(TodoActions);

        this.state = {
            todos: [{
                id:'1', text:'道士下山'
            }, {
                id: '2', text: '你好'
            }]
        };
    }

    onUpdateTodo(todo) {
        this.setState({todos: this.state.todos.concat(todo)})
        console.log('触发');
        console.log(this.state.todos);
    }
}

export default alt.createStore(TodoStore, 'TodoStore');
