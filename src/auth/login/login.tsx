import { EyeOff } from "lucide-react";
import { useState } from "react";

export function Login(){

    const [loginForm, setLoginForm] = useState({
        email: '',
        password: ''
    })

    const [type, setType] = useState<string>("password")

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
            <h1>Login</h1>
            <form >
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="text" name="email" id="email" onChange={handleChange} value={loginForm.email} />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password" onChange={handleChange} value={loginForm.password}><EyeOff onClick={showPassword}/></input>
                </div>
            </form>
        </>
    )
}