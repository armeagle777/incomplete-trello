import React, {useEffect, useState} from 'react';

function UseFetch(url) {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (url) {
            setIsLoading(true)
            fetch(url).then(res => res.json()).then(data => setData(data)).catch(err => setError(err)).finally(() => setIsLoading(false))
        }
    }, [url])
    const dataEditMethods = (newUrl,fetchSettings=null) =>{
        return fetch(newUrl,fetchSettings).then(res => res.json()).then(data => setData(data)).catch(err => setError(err)).finally(() => setIsLoading(false))
    }

    return {data, isLoading, error, dataEditMethods}
}

export default UseFetch;