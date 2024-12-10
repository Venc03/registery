import { React, useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'

function StartPage() {
    const { user } = useContext(AuthContext)
    return (
      <div>Logged in as: {user.name}</div>
    )
}

export default StartPage