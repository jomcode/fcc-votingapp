import { connect } from 'react-redux';

import PollDetails from '../../components/polldetails/polldetails';
import * as actions from '../actions/polldetails';

const mapStateToProps = (state) => ({
  pollDetails: state.pollDetails
});

const mapDispatchToProps = (dispatch) => ({
  actions,
  dispatch
});

const PollDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(PollDetails);

export default PollDetailsContainer;
