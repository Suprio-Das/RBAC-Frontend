import React from 'react';
import { Outlet } from 'react-router';
import { useSelector } from 'react-redux';

const AdminLayouts = () => {
    const user = useSelector((state) => state.Auth.user);
    console.log(user);
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default AdminLayouts;