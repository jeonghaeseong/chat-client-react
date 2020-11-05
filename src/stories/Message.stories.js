import React from 'react';
import Message from '../components/chat/Message';
import '../App.css';

export default {
    title: 'Chat/Message',
    component: Message,
};

const Template = (args) => <Message {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    message: {
        type: 'info',
        message: '메세지',
        user: {
            email: 'briskly0415@rootsoft.kr',
        },
    },
    user: {
        email: 'briskly0415@rootsoft.kr',
    },
};

export const MyMessage = Template.bind({});
MyMessage.args = {
    message: {
        type: 'message',
        message: '안녕하세요',
        user: {
            email: 'briskly0415@rootsoft.kr',
            name: '정해성',
        },
    },
    user: {
        email: 'briskly0415@rootsoft.kr',
    },
};

export const OtherMessage = Template.bind({});
OtherMessage.args = {
    message: {
        type: 'message',
        message: '안녕하세요',
        user: {
            email: 'root@rootsoft.kr',
            name: '한정훈',
        },
    },
    user: {
        email: 'briskly0415@rootsoft.kr',
    },
};
