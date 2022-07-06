import logo from '../../assets/img/argentBankLogo.png';
import Login from './Login';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../features/UserSlice';
import { useEffect, useState } from 'react';

import { fetchUser } from '../../api/userAPI';
import {
    getUserPending,
    getUserSuccess,
    getUserFail,
} from '../../features/UserSlice';

const Navbar = () => {
    const { user, id } = useSelector((store) => store.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    function capitalizeFirstLetter(str) {
        // converting first letter to uppercase
        const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

        return capitalized;
    }

    const signOut = () => {
        localStorage.removeItem('JWT');
        sessionStorage.removeItem('JWT');
        dispatch(logout());
        navigate('/');
    };

    const viewProfile = () => {
        navigate('/user/profile');
    };

    //autoconnetion for remember me
    const [logged, setLogged] = useState(false);
    useEffect(() => {
        dispatch(getUserPending());
        fetchUser()
            .then((userData) => {
                console.log('CONNECT !!!');
                setLogged(true);
                dispatch(getUserSuccess(userData.body));
                navigate('/user/profile');
            })
            .catch((err) => {
                console.log('not connected');
                dispatch(getUserFail(err));
            });
    }, [logged]);

    return (
        <nav className="main-nav">
            <Link to={!(user && user.id) ? '/' : '/user/profile'}>
                <div className="main-nav-logo">
                    <img
                        className="main-nav-logo-image"
                        src={logo}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </div>
            </Link>
            {!(user && user.id) ? (
                <Link to="/user/login">
                    <div className="main-nav-item">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </div>
                </Link>
            ) : (
                <>
                    <div
                        className="main-nav-item"
                        onClick={() => {
                            viewProfile();
                        }}
                    >
                        {/* <i className="fa fa-user-circle"></i> */}
                    </div>

                    <div
                        className="main-nav-item"
                        onClick={() => {
                            signOut();
                        }}
                    >
                        <div>
                            <i className="fa fa-user-circle"></i>
                            {capitalizeFirstLetter(user.firstName)}
                        </div>

                        <div>
                            <i class="fa fa-sign-out"></i>
                            Sign Out
                        </div>
                    </div>
                </>
            )}
        </nav>
    );
};

export default Navbar;
