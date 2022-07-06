import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { putDataNewUser } from '../../../api/userAPI';

const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    //verification if checkbox "signIUp" is checked, use local state
    const [payloadSignUp, setPayloadSignUp] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
    });

    const [isEmailValidate, setIsEmailValidate] = useState(true);
    const [isPasswordValidate, setIsPasswordIsValidate] = useState(true);
    const [isFirstNameValidate, setIsFirstNameIsValidate] = useState(true);
    const [isLastNameValidate, setIsLastNameIsValidate] = useState(true);
    // const { email, password, firstName, lastName } = payloadSignUp;
    // const formRequest = { email: email, password: password, firstName:firstName,  lastName:lastName};

    //function for get the input value . Composants sont controlés
    function handleChange(event) {
        const { name, value, type, checked } = event.target;

        setPayloadSignUp((prevFormData) => {
            return {
                ...prevFormData,

                [name]: type === 'checkbox' ? checked : value,
            };
        });
    }
    console.log(payloadSignUp);
    //func   unified characters for first & last names
    const unifyString = (val) => {
        return val.trim().toLowerCase().split(' ').join('');
    };
    const { email, password, firstName, lastName } = payloadSignUp;
    // store correct values for do  API  put request
    const formRequest = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
    };

    //VALIDATEION PART

    function validateEmail(email) {
        console.log('validateEmail WORK');
        let re =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    //minimum 6 caracteres 1 lettre 1 chiffre
    function validatePassword(password) {
        console.log('validatepassword WORK');
        let re = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{6,}$/;
        return re.test(password);
    }

    //verification of form data + post axios
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('handleSubmit');
        if (validateEmail(payloadSignUp.email) === false) {
            setIsEmailValidate(false);
        }
        if (validatePassword(payloadSignUp.password) === false) {
            setIsPasswordIsValidate(false);
        }
        if (payloadSignUp.firstName.length < 2) {
            setIsFirstNameIsValidate(false);
        }
        if (payloadSignUp.lastName.length < 2) {
            setIsLastNameIsValidate(false);
        }

        if (
            isEmailValidate &&
            isPasswordValidate &&
            isFirstNameValidate &&
            isLastNameValidate
        ) {
            formRequest.email = email;
            formRequest.password = password;
            formRequest.firstName = unifyString(firstName);
            formRequest.lastName = unifyString(lastName);
            console.log('*********formRequest from validate*********');
            console.log(formRequest);
            //API new user
            putDataNewUser(navigate, formRequest);
        }
    };

    //VALIDATEION PART
    return (
        <main className="main bg-dark">
            <section className="sign-up-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <label htmlFor="email">Email</label>
                        {isEmailValidate ? (
                            <input
                                type="text"
                                className="text-control"
                                id="email"
                                required
                                name="email"
                                onChange={handleChange}
                                value={payloadSignUp.email}
                            />
                        ) : (
                            <>
                                <input
                                    type="text"
                                    className="text-control bg-error"
                                    id="email"
                                    required
                                    name="email"
                                    onChange={handleChange}
                                    onClick={() => setIsEmailValidate(true)}
                                    value={payloadSignUp.email}
                                    style={{ background: '#edcecc' }}
                                />
                                <div style={{ color: 'red', fontSize: '10px' }}>
                                    Make sure to enter correct mail
                                </div>
                            </>
                        )}
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        {isPasswordValidate ? (
                            <input
                                type="text"
                                className="text-control"
                                id="password"
                                required
                                name="password"
                                minLength="6"
                                onChange={handleChange}
                                value={payloadSignUp.password}
                            />
                        ) : (
                            <>
                                <input
                                    type="text"
                                    className="text-control"
                                    id="password"
                                    required
                                    name="password"
                                    minLength="6"
                                    onChange={handleChange}
                                    value={payloadSignUp.password}
                                    onClick={() =>
                                        setIsPasswordIsValidate(true)
                                    }
                                    style={{ background: '#edcecc' }}
                                />
                                <div style={{ color: 'red', fontSize: '10px' }}>
                                    Make shure to use at least 1 letter, 1
                                    number, 6 characters
                                </div>
                            </>
                        )}
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="firstName">First Name</label>
                        {isFirstNameValidate ? (
                            <input
                                type="text"
                                className="text-control"
                                id="firstName"
                                required
                                name="firstName"
                                minLength="2"
                                onChange={handleChange}
                                value={payloadSignUp.firstName}
                            />
                        ) : (
                            <>
                                <input
                                    type="text"
                                    className="text-control"
                                    id="firstName"
                                    required
                                    name="firstName"
                                    minLength="2"
                                    onChange={handleChange}
                                    value={payloadSignUp.firstName}
                                    onClick={() =>
                                        setIsFirstNameIsValidate(true)
                                    }
                                    style={{ background: '#edcecc' }}
                                />
                                <div style={{ color: 'red', fontSize: '10px' }}>
                                    Make shure to use at 2 characters
                                </div>
                            </>
                        )}
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="lastName">Last Name</label>

                        {isLastNameValidate ? (
                            <input
                                type="text"
                                className="text-control"
                                id="lastName"
                                required
                                name="lastName"
                                minLength="2"
                                onChange={handleChange}
                                value={payloadSignUp.lastName}
                            />
                        ) : (
                            <>
                                <input
                                    type="text"
                                    className="text-control"
                                    id="lastName"
                                    required
                                    name="lastName"
                                    minLength="2"
                                    onChange={handleChange}
                                    value={payloadSignUp.lastName}
                                    onClick={() =>
                                        setIsLastNameIsValidate(true)
                                    }
                                    style={{ background: '#edcecc' }}
                                />
                                <div style={{ color: 'red', fontSize: '10px' }}>
                                    Make shure to use at 2 characters
                                </div>
                            </>
                        )}
                    </div>

                    <Link to="/user/login">
                        <div>Sign In</div>
                    </Link>
                    <button className="sign-up-button">Sign Up</button>
                </form>
            </section>
        </main>
    );
};

export default SignUp;
