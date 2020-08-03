import { combineReducers } from 'redux';
import { Todos } from './Todos';
import { VisibilityFilter } from './VisibilityFilter';

export const Reducer = combineReducers({
    Todos ,
    VisibilityFilter
});