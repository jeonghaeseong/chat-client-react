import React from 'react';
import Header from './Header';

const Login = ({ email, handleChange, handleSubmit }) => {
    return (
        <>
            <Header />
            <form id="login-form" onSubmit={handleSubmit}>
                <input
                    type="email"
                    value={email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                />
                <input type="submit" value="Join" />
            </form>
        </>
    );
};

export default Login;
