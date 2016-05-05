import React, { Component } from 'react';

const Notification = ({ className, notification }) => (
  <div
    className={
      className ?
        `notification ${className}` :
        'notification'
    }
  >
    {notification.message}
    {
      notification.trigger.error ?
        notification.trigger.error :
        null
    }
  </div>
);

export default Notification;
