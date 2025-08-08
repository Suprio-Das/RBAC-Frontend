import { useEffect } from "react";
import { get } from "../Services/ApiEndPoints";

const Admin = () => {
    useEffect(() => {
        const GetUser = async () => {
            try {
                const request = await get('/api/admin/getuser');
                const response = request.data;
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        }
        GetUser();
    }, [])
    return (
        <div>
            <h1>Admin</h1>
        </div>
    );
};

export default Admin;