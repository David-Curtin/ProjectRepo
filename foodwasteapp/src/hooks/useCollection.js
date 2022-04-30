import { useEffect, useState } from "react"
import { database } from "../firebase/config"

export const useCollection = (collection) => {
    const [documents, setDocuments] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        let ref = database.collection(collection)
        const unsubscribe = ref.onSnapshot((snapshot) => {
            let results = []
            snapshot.docs.forEach(doc => {
                results.push({...doc.data(), id: doc.id })
            })

            setDocuments(results)
            setError(null)
        }, (error) => {
            console.log(error)
            setError('Data Not Found')
        })

        //unsubscribe on unmount
        return () => unsubscribe()

    }, [collection])

    return { documents, error }
}