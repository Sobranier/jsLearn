/*以下是一段测试，测试alt的store用法*/
import TodoStore from './stores/TodoStore';
import TodoActions from './actions/TodoActions';

class Hello extends Component {
    constructor(props){
        super(props);
        this.state = TodoStore.getState();
    }
    componentDidMount() {
        TodoStore.listen(this._onChange.bind(this));
    }

    componentWillUnmount() {
        TodoStore.unlisten(this._onChange.bind(this));
    }

    render() {
        return (
            <ul>
                {this.state.todos.map((todo) => {
                    return (
                        <li key={todo.id} onClick={this._handleClick}>{todo.text}</li>
                    );
                })}
            </ul>
        );
    }

    _handleClick(e) {
        TodoActions.updateTodo({id:new Date,text:'XXX'});
    }

    _onChange(state) {
        this.setState(state);
    }
}
