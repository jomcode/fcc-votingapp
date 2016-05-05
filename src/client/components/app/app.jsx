import React, { Component } from 'react';
import { InlineNotification } from 'react-redux-notifications';

import NavBar from '../nav/navbar';
import Notification from '../notification/notification';
import NotificationContainer from '../notification/container';
import * as ActionTypes from '../../redux/constants';

class App extends Component {
  render() {
    const { auth: { isAuthenticated, username } } = this.props;

    return (
      <div className="votingapp-container">
        <NavBar isAuthenticated={isAuthenticated} username={username} />

        <InlineNotification
          hideAfter={2000}
          defaultMessage="Error: "
          triggeredBy={ActionTypes.LOGIN_FAILURE}
          renderContainer={
            (notifications) =>
              <NotificationContainer
                notifications={notifications}
              />
          }
          renderNotification={
            (notification) =>
              <Notification
                key={notification.key}
                notification={notification}
                className="error"
              />
          }
        />

        <InlineNotification
          hideAfter={2000}
          defaultMessage="Error: "
          triggeredBy={ActionTypes.LOGOUT_FAILURE}
          renderContainer={
            (notifications) =>
              <NotificationContainer
                notifications={notifications}
              />
          }
          renderNotification={
            (notification) =>
              <Notification
                key={notification.key}
                notification={notification}
                className="error"
              />
          }
        />

        <InlineNotification
          hideAfter={2000}
          defaultMessage="Error: "
          triggeredBy={ActionTypes.FETCH_POLLS_FAILURE}
          renderContainer={
            (notifications) =>
              <NotificationContainer
                notifications={notifications}
              />
          }
          renderNotification={
            (notification) =>
              <Notification
                key={notification.key}
                notification={notification}
                className="error"
              />
          }
        />

        <InlineNotification
          hideAfter={2000}
          defaultMessage="Error: "
          triggeredBy={ActionTypes.FETCH_POLL_DETAILS_FAILURE}
          renderContainer={
            (notifications) =>
              <NotificationContainer
                notifications={notifications}
              />
          }
          renderNotification={
            (notification) =>
              <Notification
                key={notification.key}
                notification={notification}
                className="error"
              />
          }
        />

        <InlineNotification
          hideAfter={2000}
          defaultMessage="Error: "
          triggeredBy={ActionTypes.CAST_VOTE_FAILURE}
          renderContainer={
            (notifications) =>
              <NotificationContainer
                notifications={notifications}
              />
          }
          renderNotification={
            (notification) =>
              <Notification
                key={notification.key}
                notification={notification}
                className="error"
              />
          }
        />

        <InlineNotification
          hideAfter={2000}
          defaultMessage="Error: "
          triggeredBy={ActionTypes.CREATE_POLL_FAILURE}
          renderContainer={
            (notifications) =>
              <NotificationContainer
                notifications={notifications}
              />
          }
          renderNotification={
            (notification) =>
              <Notification
                key={notification.key}
                notification={notification}
                className="error"
              />
          }
        />

        <InlineNotification
          hideAfter={2000}
          defaultMessage="Error: "
          triggeredBy={ActionTypes.SIGN_UP_FAILURE}
          renderContainer={
            (notifications) =>
              <NotificationContainer
                notifications={notifications}
              />
          }
          renderNotification={
            (notification) =>
              <Notification
                key={notification.key}
                notification={notification}
                className="error"
              />
          }
        />

        <InlineNotification
          hideAfter={2000}
          defaultMessage="Error: "
          triggeredBy={ActionTypes.FETCH_USER_POLLS_FAILURE}
          renderContainer={
            (notifications) =>
              <NotificationContainer
                notifications={notifications}
              />
          }
          renderNotification={
            (notification) =>
              <Notification
                key={notification.key}
                notification={notification}
                className="error"
              />
          }
        />

        <InlineNotification
          hideAfter={2000}
          defaultMessage="Error: "
          triggeredBy={ActionTypes.DELETE_POLL_FAILURE}
          renderContainer={
            (notifications) =>
              <NotificationContainer
                notifications={notifications}
              />
          }
          renderNotification={
            (notification) =>
              <Notification
                key={notification.key}
                notification={notification}
                className="error"
              />
          }
        />

        <InlineNotification
          hideAfter={2000}
          defaultMessage="Error: "
          triggeredBy={ActionTypes.EDIT_POLL_FAILURE}
          renderContainer={
            (notifications) =>
              <NotificationContainer
                notifications={notifications}
              />
          }
          renderNotification={
            (notification) =>
              <Notification
                key={notification.key}
                notification={notification}
                className="error"
              />
          }
        />

        <InlineNotification
          hideAfter={2000}
          defaultMessage="Success: Logged in"
          triggeredBy={ActionTypes.LOGIN_SUCCESS}
          renderContainer={
            (notifications) =>
              <NotificationContainer
                notifications={notifications}
              />
          }
          renderNotification={
            (notification) =>
              <Notification
                key={notification.key}
                notification={notification}
                className="success"
              />
          }
        />

        <InlineNotification
          hideAfter={2000}
          defaultMessage="Success: Logged out"
          triggeredBy={ActionTypes.LOGOUT_SUCCESS}
          renderContainer={
            (notifications) =>
              <NotificationContainer
                notifications={notifications}
              />
          }
          renderNotification={
            (notification) =>
              <Notification
                key={notification.key}
                notification={notification}
                className="success"
              />
          }
        />

        <InlineNotification
          hideAfter={2000}
          defaultMessage="Success: Vote cast"
          triggeredBy={ActionTypes.CAST_VOTE_SUCCESS}
          renderContainer={
            (notifications) =>
              <NotificationContainer
                notifications={notifications}
              />
          }
          renderNotification={
            (notification) =>
              <Notification
                key={notification.key}
                notification={notification}
                className="success"
              />
          }
        />

        <InlineNotification
          hideAfter={2000}
          defaultMessage="Success: Poll created"
          triggeredBy={ActionTypes.CREATE_POLL_SUCCESS}
          renderContainer={
            (notifications) =>
              <NotificationContainer
                notifications={notifications}
              />
          }
          renderNotification={
            (notification) =>
              <Notification
                key={notification.key}
                notification={notification}
                className="success"
              />
          }
        />

        <InlineNotification
          hideAfter={2000}
          defaultMessage="Success: New user signed up"
          triggeredBy={ActionTypes.SIGN_UP_SUCCESS}
          renderContainer={
            (notifications) =>
              <NotificationContainer
                notifications={notifications}
              />
          }
          renderNotification={
            (notification) =>
              <Notification
                key={notification.key}
                notification={notification}
                className="success"
              />
          }
        />

        <InlineNotification
          hideAfter={2000}
          defaultMessage="Success: Poll deleted"
          triggeredBy={ActionTypes.DELETE_POLL_SUCCESS}
          renderContainer={
            (notifications) =>
              <NotificationContainer
                notifications={notifications}
              />
          }
          renderNotification={
            (notification) =>
              <Notification
                key={notification.key}
                notification={notification}
                className="success"
              />
          }
        />

        <InlineNotification
          hideAfter={2000}
          defaultMessage="Success: Poll edited"
          triggeredBy={ActionTypes.EDIT_POLL_SUCCESS}
          renderContainer={
            (notifications) =>
              <NotificationContainer
                notifications={notifications}
              />
          }
          renderNotification={
            (notification) =>
              <Notification
                key={notification.key}
                notification={notification}
                className="success"
              />
          }
        />

        {this.props.children}
      </div>
    );
  }
}

export default App;
