import React, { useState } from "react";
import {RegisterScreen} from "unauthenticated-app/register";
import {LoginScreen} from "unauthenticated-app/login";
import { register } from "auth-provider";

export const UnauthenticatedApp = () => {
    const [isRegister, setIsRegister] = useState(false);

    return <div>
        {
            isRegister ? <RegisterScreen/> : <LoginScreen/>
        }
        <button onClick={() => setIsRegister(!isRegister)}>change to {isRegister ? 'login' : 'register'}</button>
    </div>
}