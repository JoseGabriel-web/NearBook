import React, { useEffect } from 'react'
import "../styles/home.css"
import SignIn from './SignIn'
import { useHistory } from 'react-router'

const Home = ({ accountID, wallet }) => {

    const history = useHistory()

    useEffect(() => {
        if(accountID) {
            history.push("/feed")
        }
    }, [accountID])

    return (
        <div className="home">
            <h2>Welcome to nearbook</h2>
            <SignIn wallet={wallet} />
        </div>
    )
}

export default Home
