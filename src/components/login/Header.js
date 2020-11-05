import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <header className="welcome-header">
                <h1 className="welcome-header__title">Welcome to RootTalk</h1>
                <p className="wlecome-header__text">
                    회사 이메일을 입력하고 입장해주세요.
                </p>
            </header>
        );
    }
}

export default Header;
