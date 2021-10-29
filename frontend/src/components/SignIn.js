import React from 'react'
import { logIn } from '../near'
import '../styles/button.css'

const SignIn = ({wallet}) => {
    return (
        <div className="link button" onClick={() => logIn(wallet)}>
            Login
        </div>
    )
}

export default SignIn
