import { EyeOff } from "lucide-react";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router";

export function Login(){

    
    const [type, setType] = useState<string>("password")
    const [loginForm, setLoginForm] = useState({
        email: '',
        password: ''
    })

    const [title, setTitle] = useOutletContext() // questo serve per settare il titolo negli header
    useEffect(()=>{
        setTitle("Login")
    },[])

    const showPassword = () => {
        if (type === "password") {
            setType("text")
        } else {
            setType("password")
        }
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
        const {name,value,type} = e.target;
        if (type !== 'checkbox') {
            setLoginForm({...loginForm, [name]:value})
        } 
    }

    return(
        <>
            <form >
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="text" name="email" id="email" onChange={handleChange} value={loginForm.email} />
                </div>
                <div className={'flex-inline'}>
                    <label htmlFor="password">Password: </label>
                    <input type={type} name="password" id="password" onChange={handleChange} value={loginForm.password}/>
                    <EyeOff onClick={showPassword}/>
                </div>
            </form>
        </>
    )
}