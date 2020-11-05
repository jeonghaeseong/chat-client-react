import React from 'react';

import StatusBar from '../components/StatusBar';
import '../App.css';

export default {
    title: 'Chat/StatusBar',
    component: StatusBar,
};

const Template = (args) => <StatusBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    time: '',
};
