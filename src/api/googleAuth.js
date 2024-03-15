import React from 'react';
import { GoogleLogin } from 'react-google-login';

const clientId = "YOUR_CLIENT_ID.apps.googleusercontent.com";

function Login() {
    const onSuccess = (res) => {
        console.log('Login Success:', res.profileObj);
        // Send res.tokenId to the backend for verification and further processing
    };

    const onFailure = (res) => {
        console.log('Login failed:', res);
    };

    return (
        <div>
            <GoogleLogin
                clientId={clientId}
                buttonText="Login with Google Classroom"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                scope="https://www.googleapis.com/auth/classroom.courses.readonly"
            />
        </div>
    );
}

export default Login;
