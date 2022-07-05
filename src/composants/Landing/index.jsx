import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';

import Features from './Features';
import Hero from './Hero';

import { fetchUser } from '../../api/userAPI';
import {
    getUserPending,
    getUserSuccess,
    getUserFail,
} from '../../features/UserSlice';

const Landing = () => {
    // //autoconnetion for remember me
    // const [logged, setLogged] = useState(false);
    // const navigate = useNavigate();
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(getUserPending());
    //     fetchUser()
    //         .then((userData) => {
    //             setLogged(true);
    //             dispatch(getUserSuccess(userData.body));
    //             navigate('/user/profile');
    //         })
    //         .catch((err) => {
    //             // setLogged(false)
    //             console.log('not connected');
    //             dispatch(getUserFail(err));
    //         });
    // }, [logged]);

    return (
        <main>
            <Hero />
            <Features />
        </main>
    );
};
export default Landing;
