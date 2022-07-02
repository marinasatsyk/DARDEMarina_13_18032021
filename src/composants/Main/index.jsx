import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../Navbar';
import SignIn from '../Sign_in';
import Welcome from './Welcome';

const Main = () => {
    const { isOpen } = useSelector((store) => store.login);
    // return isOpen ? <SignIn /> : <Welcome />;
    return (
        <>
            <Navbar />
            {isOpen ? <SignIn /> : <Welcome />}
        </>
    );
};

export default Main;
