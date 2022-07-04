import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { type } from '@testing-library/user-event/dist/type';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Link, Navigate } from 'react-router-dom';
import { Alert, Spinner } from 'react-bootstrap';
import {
    loginPending,
    loginSuccess,
    loginFail,
} from '../../../features/AuthSlice/LogIn';
import userLogin from '../../../api/userAPI';

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
    const dispatch = useDispatch();
    const { isLoading, isAuth, error } = useSelector((store) => store.login);

    //verification if checkbox "signIUp" is checked, use local state
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        isRemember: false,
    });
    const { username, password } = formData;
    const formRequest = { email: username, password: password };
    // console.log(formRequest);

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
    const handleSubmit = async (event) => {
        event.preventDefault();
        //submit to API
        //add verification of format!!! and isAuth=true
        dispatch(loginPending());
        console.log(formData);
        try {
            const isAuth = await userLogin(formRequest);
            console.log(isAuth);

            dispatch(loginSuccess());

            console.log(isAuth);
        } catch (error) {
            console.log(error);
            dispatch(loginFail(error.message));
        }
    };

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
                {/* {error && <Alert variant='danger'/>} */}
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

                    {
                        <Link to={'/user/signup'}>
                            <div>Sign up</div>
                        </Link>
                    }
                    {/* {isLoading && (
                        <Spinner variant="primary" animation="border" />
                    )} */}
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
