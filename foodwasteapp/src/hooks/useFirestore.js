import { useReducer, useEffect, useState } from "react";
import { database } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

let initState = {
    document: null,
    isPending: false,
    error: null,
    success: null
}

const databaseReducer = (state, action) => {
    switch (action.type) {
        case 'IS_PENDING':
            return { isPending: true, document: null, success: false, error: null }
        case 'ADDED_DOCUMENT':
            return { isPending: false, document: action.payload, success: true, error: null}
        case 'ERROR':
            return { isPending: false, document: null, success: false, error: action.payload }
        default:
            return state
    }
}

export const useFirestore = (collection) => {
    const [res, dispatch] = useReducer(databaseReducer, initState)
    const [isCancelled, setIsCancelled] = useState(false)
    
    const ref = database.collection(collection)

    const dispatchIfNotCancelled = (action) => {
        if(!isCancelled){
            dispatch(action)
        }
    }

    const addDocument = async (doc) => {
        dispatch({type: 'IS_PENDING'})

        try {
            const addedDocument = await ref.add(doc)
            dispatchIfNotCancelled({ type: 'ADDED_DOCUMENT', payload: addedDocument })
        }
        catch (err) {
            dispatchIfNotCancelled({ type: 'ERROR', payload: err.message })
        }
    }

    const deleteDocument = async (id) => {

    }

    useEffect(() => {
        return () => setIsCancelled(true)
    }, [])

    return {addDocument, deleteDocument, res}
}