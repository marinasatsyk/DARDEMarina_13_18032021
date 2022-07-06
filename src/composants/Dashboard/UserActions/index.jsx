import {
    getUserPending,
    getUserSuccess,
    getUserFail,
} from '../../../features/UserSlice';
import { fetchUser } from '../../../api/userAPI';

//function for get  logged user's  information and post it in the state

const getUserProfile = () => async (dispatch) => {
    try {
        dispatch(getUserPending());
        //we call user api
        const user = await fetchUser();
        console.log(user);
        //we populate state of current user api
        user && dispatch(getUserSuccess(user.body));
    } catch (err) {
        dispatch(getUserFail(err.message));
    }
};

export default getUserProfile;
