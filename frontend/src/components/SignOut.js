import React from 'react'
import { logOut } from '../near'

const SignOut = ({ wallet, setAccountID }) => {
    return (
        <div className="link" onClick={() => {
            setAccountID()
            logOut(wallet)
        }}>
            Logout
        </div>
    )
}

export default SignOut
