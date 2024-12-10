import { React, useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'

function Login() {
    const { user } = useContext(AuthContext)
  return (
    <div>{user.name}</div>
  )
}

export default Login