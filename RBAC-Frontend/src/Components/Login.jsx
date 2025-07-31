import { useState } from "react";
import { Link } from "react-router";

const Login = () => {
    const [currentUser, setCurrentUser] = useState(null);
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        setCurrentUser({ email, password })

        fetch('http://localhost:4000/register', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(currentUser)
        })
            .then(data => {
                if (data.status === 'Ok') {
                    alert('User logged in');
                }
            })
            .catch(error => {
                alert(error.message)
            })
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