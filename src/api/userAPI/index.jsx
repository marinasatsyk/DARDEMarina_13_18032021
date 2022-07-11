import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getUserFail } from '../../features/UserSlice';
const rootURL = 'http://localhost:3001/api/v1';
const loginUrl = rootURL + '/user/login';
const userUrl = rootURL + '/user/profile';
const signUpUrl = rootURL + '/user/signup';

export const getJWT = () => {
    const l_sessionStorage = sessionStorage.getItem('JWT');
    if (l_sessionStorage) return JSON.parse(l_sessionStorage);
    const l_localStorage = localStorage.getItem('JWT');
    return l_localStorage ? JSON.parse(l_localStorage) : '';
};

const userLogin = (FormData, isRemember) => {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await axios.post(loginUrl, FormData);
            if (res.data.status === 200) {
                //if user click "remember me"
                sessionStorage.setItem(
                    'JWT',
                    JSON.stringify(res.data.body.token)
                );

                if (isRemember)
                    localStorage.setItem(
                        'JWT',
                        JSON.stringify(res.data.body.token)
                    );
            }
            resolve(res.data);

            console.log(JSON.parse(localStorage.getItem('JWT')));
        } catch (error) {
            console.log('err from axios');
            console.log(error.message);
            reject(error);
        }
    });
};

export const fetchUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const JWT = getJWT();
            if (!JWT) reject('Token non found!');

            console.log('in try');
            console.log(JWT);

            const res = await axios({
                method: 'post',
                url: userUrl,
                headers: { Authorization: 'Bearer ' + JWT },
            });
            console.log(res);
            resolve(res.data);
        } catch (error) {
            // dispatch(getUserFail(error));
            console.log(error);
            reject(error.message);
        }
    });
};

export const putDataNewUser = async (navigate, formRequest) => {
    console.log('putData function');

    return new Promise(async (resolve, reject) => {
        try {
            const res = await axios.post(signUpUrl, formRequest);
            console.log(res);
            if (res.data.status === 200) {
                navigate('/user/login');
            }
            resolve(res.data);
        } catch (error) {
            console.log('from putData');
            console.log(error);
            console.log(error.response.data.message);
            // dispatch(getUserFail(error.response.data.message));
            reject(error.response.data.message);
        }
    });
};

export const updateUser = (formUpdate) => {
    console.log('formUpdate update User');
    console.log(formUpdate);
    return new Promise(async (resolve, reject) => {
        try {
            const JWT = getJWT();
            if (!JWT) reject('Token non found!');

            console.log('in try UPDATE');
            console.log('update ' + JWT);

            const res = await axios({
                method: 'put',
                url: userUrl,
                data: formUpdate,
                headers: {
                    Authorization: 'Bearer ' + JWT,
                },
            });

            console.log(res);
            resolve(res.data);
        } catch (error) {
            // dispatch(getUserFail(error));
            console.log(error);
            reject(error.message);
        }
    });
};

export default userLogin;
