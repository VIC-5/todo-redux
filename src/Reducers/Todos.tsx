import { TAction } from '../Actions';

type State = {
    id : number ,
    text : string ,
    completed : boolean
};

export const Todos = (state : Array<State> = [] , action : TAction) => {
    switch(action.type)
    {
        case 'ADD_TODO' :
            return [
                ...state ,
                {
                    id : action.id ,
                    text : action.text ,
                    completed : false
                }
            ]
        case 'TOGGLE_TODO' :
            return state.map(todo =>
                todo.id === action.id ? { ...todo , completed : !todo.completed } : todo
            );
        default :
            return state;
    }
};