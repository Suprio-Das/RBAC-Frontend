import React from 'react';
import { Outlet, useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

const AdminLayouts = () => {
    const user = useSelector((state) => state.Auth.user);
    const naviagate = useNavigate();
    if (!user || user.role !== 'admin') {
        naviagate('/login');
    }
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default AdminLayouts;