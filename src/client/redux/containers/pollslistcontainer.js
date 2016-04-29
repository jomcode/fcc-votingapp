import { connect } from 'react-redux';

import PollsList from '../../components/pollslist/pollslist';

const mapStateToProps = (state) => ({
  pollsList: state.polls.pollsList
});

const mapDispatchToProps = (dispatch) => ({});

const PollsListContainer = connect(mapStateToProps, mapDispatchToProps)(PollsList);

export default PollsListContainer;
