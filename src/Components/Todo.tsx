import React from 'react';

type TodoProps = {
    onClick : VoidFunction ,
    completed : boolean ,
    text : string
};

export const Todo = ({ onClick , completed , text } : TodoProps) => (
    <li
        onClick={onClick}
        style={{
            textDecoration : completed ? 'line-through' : 'none'
        }}
    >
        { text }
    </li>
);