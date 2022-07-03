import { useDispatch, useSelector } from 'react-redux';
import { openSignIn, closeSignUp } from '../../features/SignInSlice';

const SignUp = () => {
    const dispatch = useDispatch();
    // const { isSignIn, isSignUp } = useSelector((store) => store.login);

    function handeleCheck(event) {
        const { checked } = event.target;
        console.log(checked);
        if (checked) {
            dispatch(openSignIn());
            dispatch(closeSignUp());
        }
    }

    return (
        <section className="sign-up-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign Up</h1>
            <form>
                <div className="input-wrapper">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input type="text" id="password" />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" />
                </div>
                <div className="input-sign-in">
                    <input
                        type="checkbox"
                        id="sign-in"
                        onChange={handeleCheck}
                        name="isSignUp"
                    />
                    <label htmlFor="sign-in">Sign In</label>
                </div>
                <button className="sign-up-button">Sign Up</button>
            </form>
        </section>
    );
};

export default SignUp;
