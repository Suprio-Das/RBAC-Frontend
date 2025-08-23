import { Outlet, useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const AdminLayouts = () => {
    const user = useSelector((state) => state.Auth.user);
    console.log(user)
    const naviagate = useNavigate();
    useEffect(() => {
        if (!user || user.role !== "admin") {
            naviagate('/login');
        }
    }, [user])
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default AdminLayouts;