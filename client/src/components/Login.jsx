import React from 'react';
import { useState, useRef, useEffect, useContext  } from 'react'
import { Link } from'react-router-dom'
import AuthContext from './AuthProvider.jsx';
import axios from 'axios';
const LOGIN_URL = 'http://localhost:3001/api/login';
 // from https://mdbootstrap.com/docs/react/extended/login-form/ 

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg('')
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(LOGIN_URL, {
        username: user,
        password: pwd,
      });
      console.log(res.data);
      setAuth({user, pwd})
      setUser('');
      setPwd('');
      setSuccess(true);
    } catch (err) {
      if(!err?.response) {
        setErrMsg('Invalid username or password');
      }
     
    }
  }

  return (
    <>
      {success ? (
        <section>
          <h1>You are logged in</h1>
          <br />
          <p> 
            <Link to="/">Home</Link>
          </p>
        </section>
      ) : (
        
    <div>
      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input 
          type="text" 
          id="username" 
          ref={userRef} 
          value={user} 
          onChange={(e) => setUser(e.target.value)} 
          required/>

        <label htmlFor="password">Password</label>
        <input 
          type="password" 
          id="password" 
          value={pwd} 
          onChange={(e) => setPwd(e.target.value)} 
          required/>   

          <button type="submit">Log In</button>     
      </form>
     
    </div>
      )}
      </>
    )
  }

  export default Login




// import React from 'react';
//  // from https://mdbootstrap.com/docs/react/extended/login-form/ 
// function App() {
//   return (
//     <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

//       <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
//       <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>

//       <div className="d-flex justify-content-between mx-3 mb-4">
//         <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
//         <a href="!#">Forgot password?</a>
//       </div>

//       <MDBBtn className="mb-4">Sign in</MDBBtn>

//       <div className="text-center">
//         <p>Not a member? <a href="#!">Register</a></p>
//         <p>or sign up with:</p>

//         <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
//           <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
//             <MDBIcon fab icon='facebook-f' size="sm"/>
//           </MDBBtn>

//           <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
//             <MDBIcon fab icon='twitter' size="sm"/>
//           </MDBBtn>

//           <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
//             <MDBIcon fab icon='google' size="sm"/>
//           </MDBBtn>

//           <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
//             <MDBIcon fab icon='github' size="sm"/>
//           </MDBBtn>

//         </div>
//       </div>

//     </MDBContainer>
//   );
// }

// export default App;


