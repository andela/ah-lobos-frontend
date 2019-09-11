/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import propTypes from "prop-types";
import moment from "moment";
import Img from "../../assets/images/user.png";

const Notifications = props => {
  const inApp = [];
  if (props.notification !== undefined) {
    inApp.push(props.notification.filter(type => type.preference === "inApp"));
  }
  return (
    <>
      {inApp[0] !== undefined
        ? inApp[0].map(notify => (
            <a
              className="notification"
              key={notify.id}
              href={notify.url}
              onClick={() => {
                props.readUserNotification(notify.id);
              }}
            >
              <div className="notification-details">
                <div className="notification-img">
                  <img src={Img} alt="" />
                </div>
                <div className="notification-info">
                  <div className="notification-msg">{notify.message}</div>
                  <div className="notification-time">
                    {moment(moment(notify.createdAt).format("LLL")).fromNow()}
                  </div>
                </div>
              </div>
            </a>
          ))
        : null}
    </>
  );
};

export default Notifications;

Notifications.propTypes = {
  notification: propTypes.any,
  readUserNotification: propTypes.func
};
