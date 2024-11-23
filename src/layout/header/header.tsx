import { NavLink } from "react-router-dom"

export function Header({title = "Header"}:{title:string}){

    return(
        <>
        <div className={'flex-inline justify-between'}>
        <h1>{title}</h1>
            <NavLink to={'/'}>Login</NavLink>
        </div>
        </>
    )
}