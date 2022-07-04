import axios from 'axios';

const userLogin = (FormData) => {
    // console.log('from userLogin');
    // console.log(FormData);
    const loginUrl = 'http://localhost:3001/api/v1/user/login';

    return new Promise(async (resolve, reject) => {
        try {
            const res = await axios.post(loginUrl, FormData);
            console.log('from axios');
            console.log(res);
            resolve(res.data);
        } catch (error) {
            console.log('err from axios');
            console.log(error.message);
            reject(error);
        }
    });
};
export default userLogin;
