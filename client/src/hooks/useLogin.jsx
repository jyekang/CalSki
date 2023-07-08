import { useState } from "react";
import { useAuthContext } from './useAuthContext';
import axios from 'axios';

export const useLogin = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useAuthContext();

    const login = async (email, password) => {
        setIsLoading(true);
        setError(null);
        console.log({email, password})

       
        await axios.post('http://localhost:3001/api/user/login', { email, password })
            .then(res => {
                
                localStorage.setItem('user', JSON.stringify(response.data));
                
                dispatch({ type: 'LOGIN', payload: response.data });
                setIsLoading(false);
            })
            .catch(error => {
                console.log('fail')
                setIsLoading(false);
                setError(error.message);
            })
    }
      
        return { login, isLoading, error };

//         const response = await fetch('/api/user/login', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ email, password })
//         })
//         const json = await response.json();

//         if (!response.ok) {
//             setIsLoading(false);
//             setError(json.error);
//         }
//         if (response.ok) {
//             // save the user to local storage
//             localStorage.setItem('user', JSON.stringify(json));
//             // update the auth context
//             dispatch({ type: 'LOGIN', payload: json });

//             setIsLoading(false);
//         }
//     }
//     return { login, isLoading, error };
}