import { useEffect } from "react"
import { useNavigate } from "react-router"

export function ProtectedRoute({children}:{children: React.ReactNode}){

    const navigateTo = useNavigate();

    useEffect(()=>{
        navigateTo('/register')
    },[])

    return(
        <>
            {children}
        </>
    )
}