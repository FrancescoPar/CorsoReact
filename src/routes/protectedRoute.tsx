import { useEffect } from "react"
import { useNavigate, useOutlet } from "react-router"

export function ProtectedRoute(
    // {children}:{children: React.ReactNode}
){

    const navigateTo = useNavigate();

    const outlet = useOutlet();

    useEffect(()=>{
        console.log('pippo')
    },[])

    return(
        <>
            {outlet}
        </>
    )
}