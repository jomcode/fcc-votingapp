import { connect } from 'react-redux';

import PollsList from '../../components/pollslist/pollslist';
import * as actions from '../actions/pollslist';

const mapStateToProps = (state) => ({
  pollsList: state.pollsList
});

const mapDispatchToProps = (dispatch) => ({
  actions,
  dispatch
});

const PollsListContainer = connect(mapStateToProps, mapDispatchToProps)(PollsList);

export default PollsListContainer;
