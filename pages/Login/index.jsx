import React from 'react';

import './style.css';

function Login(){
    return(
        <div id="login-content">
            <div className="signIn-section">
                <aside>
                    <h3>Hello,Friend</h3>
                    <p>Enter your personal details to Sign-in</p>
                    <button>Sign Up</button>
                </aside>
                <div>
                    <form>
                        <h3>Sign In</h3>

                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" placeholder="Enter email" />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" />
                        </div>

                        <div className="form-group button-group">
                            <small className="forgot-password">
                                Forgot <a href="#">password?</a>
                            </small>
                            <button type="submit" className="btn btn-info">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;