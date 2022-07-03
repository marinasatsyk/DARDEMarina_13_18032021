import { useState } from 'react';
import SignUp from '../Sign_up';
import { useDispatch, useSelector } from 'react-redux';
import { closeSignIn, openSignUp } from '../../features/SignInSlice';

const SignIn = () => {
    //verification if checkbox "signIUp" is checked, use local state
    const dispatch = useDispatch();
    const { isSignIn, isSignUp } = useSelector((store) => store.login);

    function handeleCheck(event) {
        const { checked } = event.target;
        console.log(checked);
        if (checked) {
            dispatch(closeSignIn());
            dispatch(openSignUp());
        }
    }

    return (
        <main className="main bg-dark">
            {isSignUp && <SignUp />}
            {isSignIn && (
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <form>
                        <div className="input-wrapper">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" />
                        </div>
                        <div className="input-remember">
                            <input type="checkbox" id="remember-me" />
                            <label htmlFor="remember-me">Remember me</label>
                        </div>
                        <div className="input-sign-in">
                            <input
                                type="checkbox"
                                id="sign-in"
                                onChange={handeleCheck}
                                name="isSignUp"
                            />
                            <label htmlFor="sign-in">Sign up</label>
                        </div>
                        <button className="sign-in-button">Sign In</button>
                    </form>
                </section>
            )}
        </main>
    );
};

export default SignIn;
