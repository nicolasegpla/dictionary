import { useEffect, useState } from "react"

function useGetData(url) {

    const [ dataWord, setDataWord ] = useState('')

    useEffect(() => {
        fetch(url)
        .then((res) =>  res.json())
        .then((data) => setDataWord(data))
        .catch(error => console.log(`tenemos este error: ${error}`))
    }, [url])
    
    return {dataWord};
    
}

export { useGetData }