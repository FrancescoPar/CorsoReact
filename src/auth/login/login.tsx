import { EyeOff } from "lucide-react";
import { useEffect, useState } from "react";

export function Login(){

    
    const [loginForm, setLoginForm] = useState({
        email: '',
        password: ''
    })

    useEffect(()=>{
        console.log(loginForm)
    },[loginForm])

    const [type, setType] = useState<string>("password")

    const showPassword = () => {
        if (type === "password") {
            setType("text")
        } else {
            setType("password")
        }
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
        const {name,value} = e.target;
        if (type !== 'checkbox') {
            setLoginForm({...loginForm, [name]:value})
        } 
    }

    return(
        <>
            <h1>Login</h1>
            <form >
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="text" name="email" id="email" onChange={handleChange} value={loginForm.email} />
                </div>
                <div className={'flex-in'}>
                    <label htmlFor="password">Password: </label>
                    <input type={type} name="password" id="password" onChange={handleChange} value={loginForm.password}/>
                    <EyeOff onClick={showPassword}/>
                </div>
            </form>
        </>
    )
}