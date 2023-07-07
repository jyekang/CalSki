import { useState, useContext } from 'react'
import UserContext from '../context/UserContext'
import logo from '../assets/logo.png'

const Login = () => {
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    const { loggedInUser, setLoggedInUser } = useContext(UserContext)
    const [user, setUser] = useState({})

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(user.email, user.password)
        // if email and password match the db, setLoggedInUser to the user

        // if not, alert the user that the email and password do not match
    }

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
        console.log(user)
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
                        value={user.email}
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
                        value={user.password}
                    />
                </div>
                <button type='submit' className='btn btn-primary my-3'>Login</button>
            </form>
            </div>
            
        </div>

    )
}

export default Login