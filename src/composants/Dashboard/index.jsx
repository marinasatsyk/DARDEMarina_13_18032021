import { useState } from 'react';
import { useSelector } from 'react-redux';

function capitalizeFirstLetter(str) {
    // converting first letter to uppercase
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

    return capitalized;
}
export const HeaderChangeUser = ({ onChageUser, setOnChangeUser }) => {
    const { user, id } = useSelector((store) => store.user);

    function capitalizeFirstLetter(str) {
        // converting first letter to uppercase
        const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

        return capitalized;
    }

    return (
        <div className="header">
            <h1> Welcome back</h1>
            <form>
                <div className="wrapInput-changeUser">
                    <div className="input-wrapper">
                        <input
                            type="text"
                            id="FirstName"
                            name="FirstName"
                            placeholder={capitalizeFirstLetter(user.firstName)}
                        />
                        <button className="edit-button">Save</button>
                    </div>
                    <div className="input-wrapper">
                        <input
                            type="text"
                            id="LastName"
                            name="LastName"
                            placeholder={capitalizeFirstLetter(user.lastName)}
                        />
                        <button
                            className="edit-button"
                            onClick={() => setOnChangeUser(false)}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export const HeaderWelcome = ({ onChageUser, setOnChangeUser }) => {
    const { user, id } = useSelector((store) => store.user);

    return (
        <div className="header">
            <h1>
                Welcome back
                <br />
                {`${capitalizeFirstLetter(
                    user.firstName
                )} ${capitalizeFirstLetter(user.lastName)}!`}
                {/* Tony Jarvis! */}
            </h1>
            <button
                className="edit-button"
                onClick={() => setOnChangeUser(true)}
            >
                Edit Name
            </button>
        </div>
    );
};

const Dashboard = () => {
    const [onChageUser, setOnChangeUser] = useState(false);

    return (
        <main className="main bg-dark">
            {!onChageUser ? (
                <HeaderWelcome
                    onChageUser={onChageUser}
                    setOnChangeUser={setOnChangeUser}
                />
            ) : (
                <HeaderChangeUser
                    onChageUser={onChageUser}
                    setOnChangeUser={setOnChangeUser}
                />
            )}

            <h2 className="sr-only">Accounts</h2>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">
                        Argent Bank Checking (x8349)
                    </h3>
                    <p className="account-amount">$2,082.79</p>
                    <p className="account-amount-description">
                        Available Balance
                    </p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">
                        View transactions
                    </button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">
                        Argent Bank Savings (x6712)
                    </h3>
                    <p className="account-amount">$10,928.42</p>
                    <p className="account-amount-description">
                        Available Balance
                    </p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">
                        View transactions
                    </button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">
                        Argent Bank Credit Card (x8349)
                    </h3>
                    <p className="account-amount">$184.30</p>
                    <p className="account-amount-description">
                        Current Balance
                    </p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">
                        View transactions
                    </button>
                </div>
            </section>
        </main>
    );
};
export default Dashboard;
