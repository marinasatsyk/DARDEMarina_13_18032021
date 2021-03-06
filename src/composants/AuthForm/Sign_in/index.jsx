import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';

import {
    getUserPending,
    getUserSuccess,
    getUserFail,
} from '../../../features/UserSlice';

import userLogin, { fetchUser } from '../../../api/userAPI';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { error } = useSelector((store) => store.user);

    //verification if checkbox "signIUp" is checked, use local state
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        isRemember: false,
    });
    const { username, password, isRemember } = formData;
    const formRequest = { email: username, password: password };

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
        //add verification of format!!!
        dispatch(getUserPending());
        console.log(formData);
        try {
            const isAuth = await userLogin(formRequest, isRemember);
            console.log(isAuth);
            const user = await fetchUser();
            console.log(user);
            user && dispatch(getUserSuccess(user.body));
            navigate('/user/profile');
        } catch (error) {
            console.log('from handle submit');
            console.log(error);
            dispatch(getUserFail(error.response.data.message));
        }
    };

    function openDashboard() {
        return <Navigate to="/user/profile" replace />;
    }

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                {error &&
                    (error.includes('Password') || error.includes('User') ? (
                        <div className="error">{error}</div>
                    ) : null)}

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
                            <div onClick={() => dispatch(getUserFail(''))}>
                                Sign up
                            </div>
                        </Link>
                    }

                    <button
                        className="sign-in-button"
                        onClick={() => openDashboard()}
                    >
                        Sign In
                    </button>
                </form>
            </section>
        </main>
    );
};

export default SignIn;
