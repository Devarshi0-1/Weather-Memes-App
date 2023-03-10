import { useState, useEffect } from "react"

const useFetch = (url) => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [apiData, setApiData] = useState(null)

    useEffect(() => {

        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw Error("Could Not Fetch Data From The Resource")
                }
                return res.json()
            })
            .then((data) => {
                setApiData(data)
                setLoading(false)
                setError(null)
            }).catch((err) => {
                setLoading(false)
                setError(err.message)
            })

    }, [url])

    const refetch = () => {
        setLoading(true)
        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw Error("Could Not Fetch Data From The Resource")
                }
                return res.json()
            })
            .then((data) => {
                setApiData(data)
                setLoading(false)
                setError(null)
            }).catch((err) => {
                setLoading(false)
                setError(err.message)
            })
    }
    return [error, loading, apiData, refetch]
}

export default useFetch;