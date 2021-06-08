import React, { useState } from 'react';
import './custom.css';

function Index(props) {
    const {handleLoginFormSubmit,handleSignupClick}= props;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signupClick=()=>{
        handleSignupClick();
    }

    const handleSubmit = (e) => {
        //cancel reload form
        e.preventDefault();

        const formValues = {
            email: email,
            password: password
        }

        handleLoginFormSubmit(formValues);


        // submit len app
        setEmail('');
        setPassword('');
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    return (
        <div className="signup-form">
            <form onSubmit={handleSubmit} className="form-horizontal">
                <div className="row">
                    <div className="col-8 offset-4">
                        <h2>Log In</h2>
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

                <div className="form-group row">
                    <div className="col-8 offset-4">
                        <p><label className="form-check-label"><input type="checkbox" required="required" /> Remember me</label></p>
                        <button type="submit" className="btn btn-primary btn-lg">Log in</button>
                    </div>
                </div>
            </form>
            <div className="text-center">Don't have an account? <a  href="javascript:void(0)" onClick={signupClick}>Signup here</a></div>
        </div>
    );
}

export default Index;