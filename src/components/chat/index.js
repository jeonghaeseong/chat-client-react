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
import util from '../../lib/util';

const Chat = ({ socket, user, logOut }) => {
    const [messages, setMessages] = useState([
        {
            type: 'info',
            user,
            message: `${dayjs(new Date()).format(
                'YYYY년 MM월 DD일',
            )} ${util.getDayOfWeek()}요일`,
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
                {messages.map((message, idx) => (
                    <Message message={message} user={user} key={idx} />
                ))}
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
