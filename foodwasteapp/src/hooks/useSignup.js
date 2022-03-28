import { useState, useEffect} from "react"
import { auth } from "../firebase/config"
import { useAuthContext } from "./useAuthContext"

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { dispatch } = useAuthContext()
    const [isCancelled, setIsCancelled] = useState(false)

    const signup = async (email, password, displayName) => {
        setError(null)
        setIsPending(true)

        try{
            const res = await auth.createUserWithEmailAndPassword(email, password)

            if (!res) {
                throw new Error('Could not sign up')
            }

            await res.user.updateProfile({ displayName })

            // dispathes login function
            dispatch( {type: 'LOGIN', payload: res.user })

            if(!isCancelled){
            setIsPending(false)
            setError(null)
            }
        }
        catch (err) {
            if(!isCancelled) {
            console.log(err.message)
            setError(err.message)
            setIsPending(false)
            }
        }
    }

    useEffect(() => {
        return () => setIsCancelled(true)
    }, [])

    return { error, isPending, signup }
}