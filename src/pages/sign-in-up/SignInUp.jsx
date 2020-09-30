import React from "react";
import {SignIn} from "../../components/sign-in/SignIn";
import {SignUp} from "../../components/sign-up/SignUp";
import './SignInUp.scss'

export const SignInUp = () => (
    <div className='sign-in-up'>
        <SignIn/>
        <SignUp/>
    </div>
)