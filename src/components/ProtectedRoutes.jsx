import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const ProtectedRoutes = () => {
    const user = useSelector(state => state.user);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/', { replace: false }); 
        }
    }, [user, navigate]);

    return user ? <Outlet /> : null;
};

export default ProtectedRoutes;