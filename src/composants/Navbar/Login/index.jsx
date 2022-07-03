import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { openAuthForm, closeAuthForm } from '../../../features/SignInSlice';

const Login = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <Link to="/user/login">
                <div
                    className="main-nav-item"
                    onClick={() => dispatch(openAuthForm())}
                >
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </div>
            </Link>
        </div>
    );
};
export default Login;
