import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from 'axios'

export const useSignup = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useAuthContext();

    const signup = async (email, password) => {
        setIsLoading(true);
        setError(null);
        console.log({ email, password })

        await axios.post('http://localhost:3001/api/user/signup', { email, password })
            .then(res => {
                // save the user to local storage
                localStorage.setItem('user', JSON.stringify(response.data));
                // update the auth context
                dispatch({ type: 'LOGIN', payload: response.data });
                setIsLoading(false);
            })
            .catch(error => {
                console.log('fail')
                setIsLoading(false);
                setError(error.message);
            })
    }

    return { signup, isLoading, error };
}