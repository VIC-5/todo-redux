import { TAction , VisibilityFilters } from '../Actions';

export const VisibilityFilter = (state = VisibilityFilters.SHOW_ALL , action : TAction) => {
    switch(action.type)
    {
        case 'SET_VISIBILITY_FILTER' :
            return action.filter;
        default :
            return state;
    }
};