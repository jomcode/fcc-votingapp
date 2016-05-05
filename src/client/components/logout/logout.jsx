import React, { Component } from 'react';
import { withRouter } from 'react-router';

class Logout extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { router, isAuthenticated } = this.props;
    if (!isAuthenticated) router.push('/');
  }

  componentDidMount() {
    const { actions: { logoutUser }, dispatch } = this.props;
    dispatch(logoutUser());
  }

  componentDidUpdate() {
    const { router, isAuthenticated } = this.props;
    if (!isAuthenticated) router.push('/');
  }

  _renderLoading = () => {
    return (<p>Logging out...</p>);
  };

  render() {
    const { logout: { isFetching } } = this.props;

    if (isFetching) return this._renderLoading();

    return (
      <div>
        <p>Logged out successfully</p>
      </div>
    );
  }
}

Logout = withRouter(Logout);

export default Logout;
