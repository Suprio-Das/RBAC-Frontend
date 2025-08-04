import { useState } from "react";
import { Link } from "react-router";
import { post } from "../Services/ApiEndPoints";

const Signup = () => {
    const [newUser, setNewUser] = useState(null);
    const handleSignup = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        setNewUser({ name, email, password })

        try {
            const request = await post('/api/auth/register', newUser);
            const response = request.data;
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div>
                <h1 className="text-3xl text-center font-bold">Signup</h1>
                <form onSubmit={handleSignup}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Name:</legend>
                        <input type="text" className="input" placeholder="Type here" name="name" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email:</legend>
                        <input type="email" className="input" placeholder="Type here" name="email" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Password:</legend>
                        <input type="password" className="input" placeholder="Type here" name="password" />
                    </fieldset>
                    <button className="btn btn-info w-full my-2">Signup</button>
                    <p>Already have an account? <Link to='/login' className="text-orange-400 font-semibold">Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Signup;