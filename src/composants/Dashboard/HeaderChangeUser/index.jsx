import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { updateUser } from '../../../api/userAPI';
import {
    getUserFail,
    getUserPending,
    getUserSuccess,
} from '../../../features/UserSlice';

function capitalizeFirstLetter(str) {
    // converting first letter to uppercase
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

    return capitalized;
}

/**
 * @param {string} val
 * @returns {string}
 */
const unifyString = (val) => {
    return val.trim().toLowerCase().split(' ').join('');
};
export const HeaderChangeUser = ({ onChageUser, setOnChangeUser }) => {
    const { user, id } = useSelector((store) => store.user);
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
    });
    //function for get the input value
    function handleChange(event) {
        const { name, value, type, checked } = event.target;
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [name]: type === 'checkbox' ? checked : value,
            };
        });
    }

    const { firstName, lastName } = formData;
    const ChangeUser = {
        firstName: unifyString(firstName),
        lastName: unifyString(lastName),
    };
    console.log(ChangeUser);

    const handleSubmit = async (event) => {
        event.preventDefault();
        //if user change just firsName or just lastName
        const dataUpd = {
            firstName:
                formData.firstName.length === 0
                    ? user.firstName
                    : ChangeUser.firstName,
            lastName:
                formData.lastName.length === 0
                    ? user.lastName
                    : ChangeUser.lastName,
        };
        dispatch(getUserPending());
        try {
            const user = await updateUser(dataUpd);
            console.log(user);
            user && dispatch(getUserSuccess(user.body));
            if (user.status === 200) {
                //on dysplay content of profile
                setOnChangeUser(false);
            }
        } catch (error) {
            console.log(error);
            dispatch(getUserFail(error.message));
        }
    };
    return (
        <div className="header">
            <h1 style={{ color: '#243442' }}> Welcome back</h1>
            <form onSubmit={handleSubmit}>
                <div className="wrapInput-changeUser">
                    <div className="input-wrapper left">
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            placeholder={capitalizeFirstLetter(user.firstName)}
                            onChange={handleChange}
                            value={formData.firstName}
                        />
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            placeholder={capitalizeFirstLetter(user.lastName)}
                            onChange={handleChange}
                            value={formData.lastName}
                        />
                    </div>
                    <div className="input-wrapper right">
                        <button className="edit-button change-user">
                            Save
                        </button>
                        <div
                            className="edit-button change-user"
                            onClick={() => setOnChangeUser(false)}
                        >
                            Cancel
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};
export default HeaderChangeUser;
