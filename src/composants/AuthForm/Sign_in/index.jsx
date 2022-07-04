import { useState } from 'react';
import SignUp from '../Sign_up';
import { useDispatch, useSelector } from 'react-redux';
import { closeSignIn, openSignUp } from '../../../features/SignInSlice';
import { type } from '@testing-library/user-event/dist/type';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Link, Navigate } from 'react-router-dom';

//===============================AXIOS FOR TRANSFER
// export const getCartItems = createAsyncThunk(
//     'cart/getCartItems',
//     async (name, thunkAPI) => {
//         try {
//             // console.log(name);
//             // console.log(thunkAPI.getState());
//             // thunkAPI.dispatch(openModal());
//             const resp = await axios(url);

//             console.log(resp);
//             return resp.data;
//         } catch (error) {
//             return thunkAPI.rejectWithValue(
//                 'something went wrong getCartItems'
//             );
//         }
//     }
// );

//===============================AXIOS FOR TRANSFER

const SignIn = () => {
    //verification if checkbox "signIUp" is checked, use local state
    // const dispatch = useDispatch();
    // const { isSignIn, isSignUp } = useSelector((store) => store.authForm);
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        isRemember: false,
    });
    // function handeleCheck(event) {
    //     const { checked } = event.target;
    //     if (checked) {
    //         dispatch(closeSignIn());
    //         dispatch(openSignUp());
    //     }
    // }

    //function for get the input value
    function handleChange(event) {
        const { name, value, type, checked } = event.target;
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [name]: type === 'checkbox' ? checked : value,
            };
        });
    }
    //submit information
    function handleSubmit(event) {
        event.preventDefault();
        //submit to API
        //verification of format
        console.log(formData);
    }

    function openDashboard() {
        return <Navigate to="/user/profile" replace />;
    }

    return (
        <main className="main bg-dark">
            {/* {isSignUp && <SignUp />}
            {isSignIn && ( */}
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            onChange={handleChange}
                            value={formData.username}
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            onChange={handleChange}
                            value={formData.password}
                        />
                    </div>
                    <div className="input-remember">
                        <input
                            type="checkbox"
                            id="remember-me"
                            name="isRemember"
                            value={formData.isRemember}
                            onChange={handleChange}
                        />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>

                    {/* <div className="input-sign-in">
                            <input
                                type="checkbox"
                                id="sign-in"
                                name="isSignUp"
                                onChange={handeleCheck}
                            />
                            <label htmlFor="sign-in">Sign up</label>
                        </div> */}
                    {
                        <Link to={'/user/signup'}>
                            <div>Sign up</div>
                        </Link>
                    }
                    <button className="sign-in-button" onClick={openDashboard}>
                        Sign In
                    </button>
                </form>
            </section>
            {/* )} */}
        </main>
    );
};

export default SignIn;
