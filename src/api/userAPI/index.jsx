import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getUserFail } from '../../features/UserSlice';
const rootURL = 'http://localhost:3001/api/v1';
const loginUrl = rootURL + '/user/login';
const userUrl = rootURL + '/user/profile';
const signUpUrl = rootURL + '/user/signup';

const userLogin = (FormData, isRemember) => {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await axios.post(loginUrl, FormData);
            resolve(res.data);
            if (res.data.status === 200) {
                //if user click "remember me"
                isRemember
                    ? localStorage.setItem(
                          'JWT',
                          JSON.stringify(res.data.body.token)
                      )
                    : sessionStorage.setItem(
                          'JWT',
                          JSON.stringify(res.data.body.token)
                      );
            }
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
        // const isJWT = localStorage.getItem('JWT');

        const JWT = JSON.parse(sessionStorage.getItem('JWT'));
        console.log(JWT);
        try {
            console.log('in try');
            if (!JWT) {
                reject('Token non found!');
            }
            // const res = await axios.post(userUrl, {
            //     headers: {
            //         'Content-Type': 'application/json',
            //         Authorization: `Bearer ${JWT}`,
            //     },
            // });
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

export default userLogin;
