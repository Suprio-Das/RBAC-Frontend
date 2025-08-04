import { useState } from "react";
import { Link } from "react-router";
import { post } from "../Services/ApiEndPoints";

const Login = () => {
    const [currentUser, setCurrentUser] = useState(null);
    const handleLogin = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        setCurrentUser({ email, password })

        const request = await post('/api/auth/login', currentUser);
        const response = request.data;
        console.log(response);
    }
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div>
                <h1 className="text-3xl text-center font-bold">Login</h1>
                <form onSubmit={handleLogin}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email:</legend>
                        <input type="email" className="input" placeholder="Type here" name="email" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Password:</legend>
                        <input type="password" className="input" placeholder="Type here" name="password" />
                    </fieldset>
                    <button className="btn btn-info w-full my-2">Login</button>
                    <p>Don't have an account? <Link to='/register' className="font-semibold text-orange-500">Register</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;