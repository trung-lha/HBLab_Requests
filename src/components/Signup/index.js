import React, { useState } from 'react';
import './custom.css';


function Index(props) {

    const { handleSignupFormSubmit, handleLoginClick } = props;
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const [confirmPassword, setConfirmPassword] = useState('');

    const loginClick = () => {
        handleLoginClick();
    }

    const handleSubmit = (e) => {
        //cancel reload form
        e.preventDefault();

        const formValues = {
            name: username,
            email: email,
            password: password
            // confirmPassword: confirmPassword
        }
        // submit data len app

        handleSignupFormSubmit(formValues);

        //set cac field bang rong
        setEmail('');
        // setConfirmPassword('');
        setPassword('');
        setUsername('');

    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
    // const handleConfirmPasswordChange = (e) => {
    //     setConfirmPassword(e.target.value);
    // }

    return (
        <div className="signup-form">
            <form onSubmit={handleSubmit} className="form-horizontal">
                <div className="row">
                    <div className="col-8 offset-4">
                        <h2>Sign Up</h2>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-form-label col-4">Username</label>
                    <div className="col-8">
                        <input type="text" className="form-control" value={username} required="required" onChange={handleUsernameChange} />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-form-label col-4">Email Address</label>
                    <div className="col-8">
                        <input type="email" className="form-control" value={email} required="required" onChange={handleEmailChange} />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-form-label col-4">Password</label>
                    <div className="col-8">
                        <input type="password" className="form-control" value={password} required="required" onChange={handlePasswordChange} />
                    </div>
                </div>
                {/* <div className="form-group row">
                    <label className="col-form-label col-4">Confirm Password</label>
                    <div className="col-8">
                        <input type="password" className="form-control" value={confirmPassword} required="required" onChange={handleConfirmPasswordChange} />
                    </div>
                </div> */}
                <div className="form-group row">
                    <div className="col-8 offset-4">
                        <p><label className="form-check-label"><input type="checkbox" required="required" /> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a>.</label></p>
                        <button type="submit" className="btn btn-primary btn-lg">Sign Up</button>
                    </div>
                </div>
            </form>
            <div className="text-center">Already have an account? <a href="javascript:void(0)" onClick={loginClick}>Login here</a></div>
        </div>
    );
}

export default Index;