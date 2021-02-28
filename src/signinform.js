import React, { Component } from 'react';

class Login extends Component {


    render() {
        return (
            <div>
                <div className='authcontainer'>



                    <div>
                        <h1 className='authText'>Log In</h1>
                    </div>

                    <p className='authhelp'>Email:</p>

                    <div>
                        <input id='email' type='email' placeholder='Email' onChange={this.logContents} className='authbox'></input>
                    </div>

                    <p className='authhelp'>Password:</p>

                    <div>
                        <input id='password' type='password' placeholder='Password' onChange={this.logContents} className='authbox'></input>
                    </div>

                    <div>
                        <button onClick={this.logIn} className='authbutton'>Log In</button>
                    </div>
                </div>
            </div>
        );

    }
}


export default Login;