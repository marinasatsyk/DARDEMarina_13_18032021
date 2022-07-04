import logo from '../../assets/img/argentBankLogo.png';
import Login from './Login';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { openAuthForm, closeAuthForm } from '../../features/SignInSlice';

const Navbar = () => {
    const dispatch = useDispatch();

    return (
        <nav className="main-nav">
            <Link to="/">
                <div className="main-nav-logo">
                    <img
                        className="main-nav-logo-image"
                        src={logo}
                        alt="Argent Bank Logo"
                        onClick={() => dispatch(closeAuthForm())}
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </div>
            </Link>

            <Link to="/user/login">
                <div className="main-nav-item">
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </div>
            </Link>
        </nav>
    );
};

export default Navbar;
