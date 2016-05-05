import React, { Component } from 'react';

const Container = ({ notifications, className }) => (
  <div
    className={
      className ?
        `notifications-container ${className}` :
        'notifications-container'
    }
  >
    {notifications}
  </div>
);

export default Container;
