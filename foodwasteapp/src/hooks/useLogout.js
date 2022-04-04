import { useEffect, useState } from 'react'
import { auth, database } from "../firebase/config"
import { useAuthContext } from "./useAuthContext"

export const useLogout = () => {
    const [ error , setError ] = useState(null)
    const [ isPending , setIsPending ] = useState(false)
    const { dispatch } = useAuthContext()
    const [isCancelled, setIsCancelled] = useState(false)

    const logout = async () => {
        setError(null)
        setIsPending(true)

        try{
            await auth.signOut()

            // dispatches logout action
            dispatch({ type: 'LOGOUT' })

            if(!isCancelled) {
            setIsPending(false)
            setError(null)
        }

        }
        catch(err){
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

    return { logout, error, isPending}
}