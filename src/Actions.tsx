let nextTodoId : number = 0;

type TAddTodo = {
    type : 'ADD_TODO' ,
    id : number ,
    text : string
};

type TSetVisibilityFilter = {
    type : 'SET_VISIBILITY_FILTER' ,
    filter : string
};

type TToggleTodo = {
    type : 'TOGGLE_TODO' ,
    id : number
};

export type TAction = TAddTodo | TSetVisibilityFilter | TToggleTodo;

export const AddTodo = (text : string) : TAddTodo => ({
    type : 'ADD_TODO' ,
    id : nextTodoId++ ,
    text
});

export const SetVisibilityFilter = (filter : string) : TSetVisibilityFilter => ({
    type : 'SET_VISIBILITY_FILTER' ,
    filter
});

export const ToggleTodo = (id : number) : TToggleTodo => ({
    type : 'TOGGLE_TODO' ,
    id
});

export const VisibilityFilters = {
    SHOW_ALL : 'SHOW_ALL' ,
    SHOW_COMPLETED : 'SHOW_COMPLETED' ,
    SHOW_ACTIVE : 'SHOW_ACTIVE'
};