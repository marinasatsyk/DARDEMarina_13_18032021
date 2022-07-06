import { Navigate } from 'react-router';

const ProtectedRoute = ({ id, children }) => {
    if (!id) {
        return <Navigate to="/" replace />;
    }
    return children;
};

export default ProtectedRoute;
