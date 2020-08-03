import { connect } from 'react-redux';
import { SetVisibilityFilter } from '../Actions';
import { Link } from '../Components/Link';

type StateProps = { VisibilityFilter : string };
type TOwnProps = { filter : string };

const mapStateToProps = (state : StateProps , ownProps : TOwnProps) => ({
    active : ownProps.filter === state.VisibilityFilter
});

const mapDispatchToProps = (dispatch : Function , ownProps : TOwnProps) => ({
    onClick : () => dispatch(SetVisibilityFilter(ownProps.filter))
});

export const FilterLink = connect(mapStateToProps , mapDispatchToProps)(Link);