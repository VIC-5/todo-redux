import React from 'react';
import { Todo } from './Todo';

type Todo = {
    id : number ,
    completed : boolean ,
    text : string
};

type TodoListProps = {
    todos : Array<Todo> ,
    toggleTodo : Function
};

export const TodoList = ({ todos , toggleTodo } : TodoListProps) => (
    <ul>
        {todos.map(todo => (
            <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
        ))}
    </ul>
);