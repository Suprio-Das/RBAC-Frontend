import { Link } from "react-router";
import { post } from "../Services/ApiEndPoints";
import { toast } from "react-hot-toast";
import { useSelector, useDispatch } from 'react-redux'
import { SetUser } from "../Redux/AuthSlice";

const Login = () => {
    const dispatch = useDispatch();
    const handleLogin = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const payload = { email, password };

        try {
            const request = await post('/api/auth/login', { email, password });
            console.log(request);
            const response = request;
            if (response.status === 200) {
                toast.success('Log in Successfull');
                dispatch(SetUser(response.data.user))
            }
        } catch (error) {
            const err = await error.response;
            if (err) {
                toast.error(err.data.message);
            }
        }
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