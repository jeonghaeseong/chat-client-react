import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleLeft,
    faSearch,
    faBars,
    faPlusSquare,
    faSmileWink,
    faArrowUp,
} from '@fortawesome/free-solid-svg-icons';
import dayjs from 'dayjs';

import Message from './Message';

function getDayOfWeek(idx) {
    switch (idx) {
        case 0:
            return '일';
        case 1:
            return '월';
        case 2:
            return '화';
        case 3:
            return '수';
        case 4:
            return '목';
        case 5:
            return '금';
        case 6:
            return '토';
        default:
            return '';
    }
}

const Chat = ({ socket, user, logOut }) => {
    const [messages, setMessages] = useState([
        {
            type: 'info',
            user,
            message: `${dayjs(new Date()).format(
                'YYYY년 MM월 DD일',
            )} ${getDayOfWeek(dayjs(new Date()).day())}요일`,
        },
    ]);
    const [sendMessage, setSendMessage] = useState('');

    const mainRef = useRef();

    const handleLogOut = () => {
        logOut();
    };

    const handleChange = (e) => {
        setSendMessage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        socket.emit('message', sendMessage);
        setSendMessage('');
    };

    useEffect(() => {
        socket.emit('add-user', user.email);
    }, [user, socket]);

    useEffect(() => {
        // 메세지 응답
        socket.on('message', (message) => {
            setMessages((messages) => [...messages, message]);
        });

        return () => {
            console.log('unmount');
            socket.disconnect();
        };
    }, [socket]);

    useEffect(() => {
        mainRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'start',
        });
    }, [messages]);

    return (
        <>
            <header className="alt-header">
                <div className="alt-header__column">
                    <FontAwesomeIcon
                        icon={faAngleLeft}
                        className="fa-lg"
                        onClick={handleLogOut}
                        style={{
                            cursor: 'hand',
                        }}
                    />
                </div>
                <div className="alt-header__column">
                    <h1 className="alt-header__title">rootsoft</h1>
                </div>
                <div className="alt-header__column">
                    <span>
                        <FontAwesomeIcon icon={faSearch} />
                    </span>
                    <span>
                        <FontAwesomeIcon icon={faBars} />
                    </span>
                </div>
            </header>
            <main className="main-screen main-chat" ref={mainRef}>
                {messages.map((message, idx) => {
                    return <Message message={message} user={user} key={idx} />;
                })}
            </main>
            <form className="reply" onSubmit={handleSubmit}>
                <div className="reply__column">
                    <FontAwesomeIcon icon={faPlusSquare} />
                </div>
                <div className="reply__column">
                    <input
                        type="text"
                        value={sendMessage}
                        onChange={handleChange}
                        placeholder={'Write a message...'}
                    />
                    <FontAwesomeIcon icon={faSmileWink} />
                    <button>
                        <FontAwesomeIcon icon={faArrowUp} />
                    </button>
                </div>
            </form>
        </>
    );
};

export default React.memo(Chat);
