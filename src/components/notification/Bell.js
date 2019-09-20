import React from "react";
import { Popup } from "semantic-ui-react";
import propTypes from "prop-types";
import Notifications from "./Notifications";

const Bell = props => {
  return (
    <button className="btn-notification">
      <Popup
        className="notification-wrapper"
        on="click"
        trigger={<i id="btn-notification" className="fas fa-bell" />}
        content={
          <Notifications
            notification={props.notification}
            readUserNotification={props.readUserNotification}
          />
        }
        position="bottom right"
      />
      {props.totalNotification !== undefined ? (
        <sup>
          <sup>
            {props.totalNotification !== 0 ? (
              <span className="unread-notification">
                {props.totalNotification}
              </span>
            ) : null}
          </sup>
        </sup>
      ) : null}
    </button>
  );
};
export default Bell;

Bell.propTypes = {
  notification: propTypes.any,
  totalNotification: propTypes.number,
  readUserNotification: propTypes.func
};
