import React from 'react';
import dayjs from 'dayjs';

import InfoMessage from './InfoMessage';
import userEmpty from '../../images/user-empty.png';

/**
 * 자신의 메세지
 * @param {Object} message
 * @param {Object} item
 */
const MyMessage = ({ message, time }) => {
    return (
        <div className="message-row message-row--own">
            <div className="message-row__content">
                <div className="message__info">
                    <span className="message__bubble">{message}</span>
                    <span className="message__time">{time}</span>
                </div>
            </div>
        </div>
    );
};

const OtherMessage = ({ name, message, time, profile }) => {
    return (
        <div className="message-row">
            <img
                src={
                    profile
                        ? `http://192.168.0.41:4000/upload/profile/${profile}`
                        : userEmpty
                }
                alt=""
            />
            <div className="message-row__content">
                <span className="message__author">{name}</span>
                <div className="message__info">
                    <span className="message__bubble">{message}</span>
                    <span className="message__time">{time}</span>
                </div>
            </div>
        </div>
    );
};

const Message = ({ message, user }) => {
    const now = dayjs(new Date());
    let msg;

    if (message.type === 'info') {
        msg = <InfoMessage message={message.message} />;
    } else {
        console.log(message, user);
        if (message.user.email === user.email) {
            msg = (
                <MyMessage
                    message={message.message}
                    time={now.format('HH:mm')}
                />
            );
        } else {
            msg = (
                <OtherMessage
                    message={message.message}
                    name={message.user.name}
                    time={now.format('HH:mm')}
                    profile={message.user.profile}
                />
            );
        }
    }

    return <>{msg}</>;
};

export default React.memo(Message);
