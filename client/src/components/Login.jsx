import { useState } from 'react'
// import {AuthContext} from '../context/AuthContext'
import {useLogin} from '../hooks/useLogin.jsx'
import logo from '../assets/logo.png'


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const { loggedInUser, setLoggedInUser } = useContext(UserContext)
    // const [user, setUser] = useState({})
    const { login, error, isLoading } = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()
       
        await login(email, password)
        // if email and password match the db, setLoggedInUser to the user

        // if not, alert the user that the email and password do not match
    }

    // const handleChange = (e) => {
    //     setUser({ ...user, [e.target.name]: e.target.value })
    //     console.log(user)
    // }

    const handleChange = (e) => {
        const { name, value } = e.target
        if (name === 'email') {
            setEmail(value)
        } else if (name === 'password') {
            setPassword(value)
    
    }
}

    return (
        <div className='login'>
            <div className='login-content'>
            <form className='login-form' onSubmit={handleSubmit}>
                <h3><img src={logo} alt="" /></h3>
                <div className='mb-3 email-input'>
                    <label htmlFor="login-email" className="form-label">Email:</label>
                    <input
                        className='form-control'
                        type='email'
                        id='login-email'
                        name='email'
                        onChange={handleChange}
                        value={email}
                    />
                </div>

                <div className='mb-3 password-input'>
                    <label htmlFor="login-password" className="form-label">Password:</label>
                    <input
                    className='form-control'
                        id='login-password'
                        type='password'
                        name='password'
                        onChange={handleChange}
                        value={password}
                    />
                </div>


                <button type='submit' disabled={isLoading}>Login</button>
                {error && <div className='error'>{error}</div> }

                <button type='submit' className='btn btn-primary my-3'>Login</button>

            </form>
            </div>
            
        </div>
    )
}


export default Login