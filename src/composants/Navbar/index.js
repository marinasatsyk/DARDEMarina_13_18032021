import logo from '../../assets/img/argentBankLogo.png';
import Login from './Login';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="main-nav">
            <Link to="/">
                <div className="main-nav-logo">
                    <img
                        className="main-nav-logo-image"
                        src={logo}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </div>
            </Link>

            <Login />
        </nav>
    );
};

export default Navbar;
