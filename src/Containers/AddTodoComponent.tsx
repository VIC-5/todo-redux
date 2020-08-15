import React from 'react';
import { connect } from 'react-redux';
import { AddTodo } from '../Actions';

type AddTodoComponentsProps = {
    dispatch : Function
};

const AddTodoComponents = ({ dispatch } : AddTodoComponentsProps) => {
    let input : HTMLInputElement;

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    if(!input.value.trim()) {
                        return;
                    }
                    dispatch(AddTodo(input.value));
                    input.value = '';
                }}
            >
                <input ref={(node : HTMLInputElement) => (input = node)} />
                <button type='submit'>Add Todo</button>
            </form>
        </div>
    )
};

export const AddTodoComponent = connect()(AddTodoComponents);