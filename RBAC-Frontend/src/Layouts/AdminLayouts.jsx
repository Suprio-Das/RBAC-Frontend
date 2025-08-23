import React from 'react';
import { Outlet } from 'react-router';

const AdminLayouts = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default AdminLayouts;