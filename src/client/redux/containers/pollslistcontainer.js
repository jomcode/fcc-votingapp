import { connect } from 'react-redux';

import PollsList from '../../components/pollslist/pollslist';
import * as actions from '../actions/polls';

const mapStateToProps = (state) => ({
  pollsList: state.polls.pollsList
});

const mapDispatchToProps = (dispatch) => ({
  actions,
  dispatch
});

const PollsListContainer = connect(mapStateToProps, mapDispatchToProps)(PollsList);

export default PollsListContainer;
