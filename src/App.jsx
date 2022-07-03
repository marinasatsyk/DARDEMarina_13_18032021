import Navbar from './composants/Navbar';
import Footer from './composants/Footer';
import Main from './composants/Main';
import Error from './composants/Error';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    useLocation,
    Navigate,
} from 'react-router-dom';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route
                        path="/user/login"
                        element={<Main isOpen={true} />}
                    />
                    <Route
                        path="/user/signup"
                        element={<Main isSignup={true} />}
                    />
                    <Route
                        path="/user/profile"
                        element={<Main isProfile={true} />}
                    />
                    <Route exact path="/" element={<Main />} />
                    <Route path="*" element={<Error codeError="404" />} />
                </Routes>
            </Router>
            <Footer />
        </>
    );
}

export default App;
