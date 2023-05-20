
import { useEffect } from "react"

const useTitle= title =>{
    useEffect(()=>{ 
       document.title = `${title} | Gaming Geeks`;
    },[title])
}

export default useTitle