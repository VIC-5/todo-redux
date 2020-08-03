import { connect } from 'react-redux';
import { ToggleTodo } from '../Actions';
import { VisibilityFilters } from '../Actions';
import { TodoList } from '../Components/TodoList';

type Todo = {
    id : number ,
    completed : boolean ,
    text : string
};

type StateProps = {
    Todos : Array<Todo> ,
    VisibilityFilter : string
};

const GetVisibleTodos = (todos : Array<Todo> , filter : string) => {
    switch(filter)
    {
        case VisibilityFilters.SHOW_ALL :
            return todos;
        case VisibilityFilters.SHOW_COMPLETED :
            return todos.filter(t => t.completed);
        case VisibilityFilters.SHOW_ACTIVE :
            return todos.filter(t => !t.completed);
        default :
            throw new Error('Unknown filter : ' + filter);
    }
};

const mapStateToProps = (state : StateProps) => ({
    todos : GetVisibleTodos(state.Todos , state.VisibilityFilter)
});

const mapDispatchToProps = (dispatch : Function) => ({
    toggleTodo : (id : number) => dispatch(ToggleTodo(id))
});

export const VisibleTodoList = connect(mapStateToProps , mapDispatchToProps)(TodoList);