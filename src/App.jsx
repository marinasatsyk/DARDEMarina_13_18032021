import Navbar from './composants/Navbar';
import Footer from './composants/Footer';
import Error from './composants/Error';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './router/ProtectedRoute';
import Dashboard from './composants/Dashboard';
import { useState } from 'react';
import SignIn from './composants/AuthForm/Sign_in';
import SignUp from './composants/AuthForm/Sign_up';
import Landing from './composants/Landing';
import { useSelector } from 'react-redux';

function App() {
    const { user } = useSelector((store) => store.user);
    const id = user.id;

    return (
        <>
            <Router>
                <Navbar />

                <Routes>
                    <Route path="/user/login" element={<SignIn />} />
                    <Route path="/user/signup" element={<SignUp />} />
                    <Route
                        path="/user/profile"
                        element={
                            <ProtectedRoute id={id}>
                                <Dashboard />
                            </ProtectedRoute>
                        }
                    />
                    <Route exact path="/" element={<Landing />} />
                    <Route index element={<Landing />} />
                    <Route path="*" element={<Error codeError="404" />} />
                </Routes>
            </Router>
            <Footer />
        </>
    );
}

export default App;
