import React, { Component } from 'react';


class Register extends Component {

    render() {
        return (
            <div>
                <div className='authcontainer'>

                    <div>
                        <h1 className='authText'>Create Account</h1>
                    </div>

                    <p className='authhelp'>Email:</p>

                    <div>
                        <input id='email' type='email' placeholder='Email' onChange={this.logContents} className='authbox'></input>
                    </div>

                    <p className='authhelp'>Password:</p>

                    <div>
                        <input id='password' type='password' placeholder='Password' onChange={this.logContents} className='authbox'></input>
                    </div>

                    <p className='authhelp'>Password Confirmation:</p>
                    <div>
                        <input id='password' type='password' placeholder='Password' onChange={this.logContents} className='authbox'></input>
                    </div>

                    <div>
                        <button className='authbutton'>Create Account</button>
                    </div>

                </div>
            </div>
        );
    }
}


export default Register;