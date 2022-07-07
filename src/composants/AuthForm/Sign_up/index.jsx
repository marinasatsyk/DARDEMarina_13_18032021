import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { putDataNewUser } from '../../../api/userAPI';
import ManagedInput from '../../generic/ManagedInput';

//func   unified characters for first & last names
const unifyString = (v) => v.trim().toLowerCase().split(' ').join('');

//VALIDATEION PART
const Validator = {
    email: (e) =>
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            String(e).toLowerCase()
        ),
    name: (n) => n.trim().length > 1,
    password: (p) => /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{6,}$/.test(p),
};

const SignUp = () => {
    const navigate = useNavigate();

    //verification if checkbox "signIUp" is checked, use local state
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const [isEmailValidate, setIsEmailValidate] = useState(false);
    const [isPasswordValidate, setIsPasswordIsValidate] = useState(false);
    const [isFirstNameValidate, setIsFirstNameIsValidate] = useState(false);
    const [isLastNameValidate, setIsLastNameIsValidate] = useState(false);

    //verification of form data
    const handleSubmit = (event) => {
        event.preventDefault();
        setIsEmailValidate(Validator.email(email));
        setIsPasswordIsValidate(Validator.password(password));
        setIsFirstNameIsValidate(Validator.name(firstName));
        setIsLastNameIsValidate(Validator.name(lastName));
    };

    // post axios when everything is ok
    useEffect(() => {
        if (
            isEmailValidate &&
            isPasswordValidate &&
            isFirstNameValidate &&
            isLastNameValidate
        ) {
            // API new user
            putDataNewUser(navigate, {
                email: email,
                password: password,
                firstName: unifyString(firstName),
                lastName: unifyString(lastName),
            });
        }
    }, [
        isEmailValidate,
        isPasswordValidate,
        isFirstNameValidate,
        isLastNameValidate,
        email,
        password,
        firstName,
        lastName,
        navigate,
    ]);

    //VALIDATEION PART
    return (
        <main className="main bg-dark">
            <section className="sign-up-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign Up</h1>

                <form onSubmit={(e) => handleSubmit(e)}>
                    <ManagedInput
                        id="email"
                        type="email"
                        name="email"
                        value={email}
                        setValue={setEmail}
                        errorMessage="Make sure to enter correct mail"
                        validateField={Validator.email}
                    />
                    <ManagedInput
                        id="password"
                        type="password"
                        name="password"
                        value={password}
                        setValue={setPassword}
                        errorMessage="Make sure to use at least 1 letter, 1 number, 6 characters"
                        validateField={Validator.password}
                    />
                    <ManagedInput
                        id="firstName"
                        name="First Name"
                        value={firstName}
                        setValue={setFirstName}
                        errorMessage="Make sure to enter correct name"
                        validateField={Validator.name}
                    />
                    <ManagedInput
                        id="lastName"
                        name="Last Name"
                        value={lastName}
                        setValue={setLastName}
                        errorMessage="Make sure to enter correct name"
                        validateField={Validator.name}
                    />
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
