import React, { useEffect } from 'react'
import LoginComponent from '../../components/auth/LoginComponent'

const LoginScreen = () => {
  useEffect(() => {
    document.title = "Signin";
  }, [])
  return (
    <div>
        <LoginComponent/>
    </div>
  )
}

export default LoginScreen