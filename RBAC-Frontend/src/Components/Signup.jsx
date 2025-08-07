import { useState } from "react";
import { Link } from "react-router";
import { post } from "../Services/ApiEndPoints";
import toast from "react-hot-toast";

const Signup = () => {
    const handleSignup = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const payload = { name, email, password };

        try {
            const request = await post('/api/auth/register', payload);
            if (request.status) {
                toast.success("User Registration Successfull")
            }
        } catch (error) {
            toast.error(error.response.data.message);
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