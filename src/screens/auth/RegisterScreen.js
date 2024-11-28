import React, { useEffect } from 'react'
import RegisterComponent from '../../components/auth/RegisterComponent'

const RegisterScreen = () => {
  useEffect(() => {
    document.title = "Signup";
  }, [])
  return (
    <div>
      <RegisterComponent/>
    </div>
  )
}

export default RegisterScreen