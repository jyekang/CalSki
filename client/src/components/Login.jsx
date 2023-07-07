import { useState, useContext } from 'react'
import UserContext from '../context/UserContext'
import {useLogin} from '../hooks/useLogin'

const Login = () => {
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    const { loggedInUser, setLoggedInUser } = useContext(UserContext)
    const [user, setUser] = useState({})
    const { login, error, isLoading } = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()
       
        await login(email, password)
        // if email and password match the db, setLoggedInUser to the user
        
        // if not, alert the user that the email and password do not match
    }

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
        console.log(user)
    }

    return (
        <div className='login'>
            <form className='login-form' onSubmit={handleSubmit}>
                <h3>Login</h3>

                <div className='mb-3 email-input'>
                    <label htmlFor="login-email" className="col-form-label">Email:</label>
                    <input
                        id='login-email'
                        type='email'
                        name='email'
                        onChange={handleChange}
                        value={user.email}
                    />
                </div>

                <div className='mb-3 password-input'>
                    <label htmlFor="login-password" className="col-form-label">Password:</label>
                    <input
                        id='login-password'
                        type='password'
                        name='password'
                        onChange={handleChange}
                        value={user.password}
                    />
                </div>

                <button disabled={isLoading}>Login</button>
                {error && <div className='error'>{error}</div> }
            </form>
        </div>

    )
}

export default Login