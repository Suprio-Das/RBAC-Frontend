const Signup = () => {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div>
                <h1 className="text-3xl text-center font-bold">Signup</h1>
                <form action="">
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
                </form>
            </div>
        </div>
    );
};

export default Signup;