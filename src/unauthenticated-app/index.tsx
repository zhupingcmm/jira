import React, { useState } from "react";
import {RegisterScreen} from "unauthenticated-app/register";
import {LoginScreen} from "unauthenticated-app/login";
import { register } from "auth-provider";
import { Card } from "antd";

export const UnauthenticatedApp = () => {
    const [isRegister, setIsRegister] = useState(false);

    return <div style={{display:"flex", justifyContent:"center"}}>
        <Card>
            {
                isRegister ? <RegisterScreen/> : <LoginScreen/>
            }
            <button onClick={() => setIsRegister(!isRegister)}>change to {isRegister ? 'login' : 'register'}</button>
        </Card>

    </div>
}