import React, { useState } from 'react';
import socketio from 'socket.io-client';
import './variables.css';
import './reset.css';
import './App.css';

import axios from 'axios';

import StatusBar from './components/StatusBar';
import Login from './components/login';
import Chat from './components/chat';

function App() {
    const [email, setEmail] = useState('');

    const [chatInfo, setChatInfo] = useState({
        socket: null,
        isLoggedIn: false,
        user: null,
    });

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    // 로그인
    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .get('http://192.168.0.41:4000/login', {
                params: {
                    email,
                },
            })
            .then((res) => {
                console.log('login handleSubmit : ', res);

                setEmail('');
                setChatInfo({
                    ...chatInfo,
                    socket: socketio.connect('http://192.168.0.41:4000'),
                    isLoggedIn: true,
                    user: res.data.user,
                });
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const logOut = () => {
        setChatInfo({
            ...chatInfo,
            isLoggedIn: false,
        });
    };

    return (
        <div id={chatInfo.isLoggedIn ? 'chat-screen' : ''}>
            <StatusBar />
            {chatInfo.isLoggedIn ? (
                <Chat
                    socket={chatInfo.socket}
                    logOut={logOut}
                    user={chatInfo.user}
                />
            ) : (
                <Login
                    email={email}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                />
            )}
        </div>
    );
}

export default App;
