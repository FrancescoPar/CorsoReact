import React, { useState } from "react"
import { IRegistrationForm } from "../../lib/interfaces";
import { validationService } from "../../services/validationService";
import { useNavigate } from "react-router";
import { EyeOff } from "lucide-react";

export function Register(){

    const [registerForm, setRegisterForm] = useState<IRegistrationForm>({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confermaPassword: ''
    });

    const [type, setType] = useState<string>("password")

    const navigateTo = useNavigate();

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const validated = validationService.registrationValidator(registerForm);
        if (!validated) {
            return console.log('Compilalo correttamente')
        }

        const {email,firstName,lastName,password} = registerForm;

        fetch('http://localhost:3000/api/register',{
            method: "POST",
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password
            })
        }).then((res) => {
            if (res.ok) {
                navigateTo('/login')
            }
        })
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
        const {name,value,type} = e.target;
        if (type !== 'checkbox') {
            setRegisterForm({...registerForm, [name]:value})
        } 
    }

    const reset = () => {
        setRegisterForm({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confermaPassword: ''
        })
    }
    
    const showPassword = () => {
        if (type === "password") {
            setType("text")
        } else {
            setType("password")
        }
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName">Nome: </label>
                    <input type="text" name="firstName" id="firstName" onChange={handleChange} value={registerForm.firstName} />
                </div>
                <div>
                    <label htmlFor="lastName">Cognome: </label>
                    <input type="text" name="lastName" id="lastName" onChange={handleChange} value={registerForm.lastName} />
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="text" name="email" id="email" onChange={handleChange} value={registerForm.email} />
                </div>
                <div className={'flex-inline'}>
                    <label htmlFor="password">Password: </label>
                    <input type={type} name="password" id="password" onChange={handleChange} value={registerForm.password} />
                    <EyeOff onClick={showPassword}/>
                </div>
                <div>
                    <label htmlFor="confermaPassword">Conferma password: </label>
                    <input type="password" name="confermaPassword" id="confermaPassword" onChange={handleChange} value={registerForm.confermaPassword} />
                </div>
                <button type="submit">Conferma</button>
                <button type="reset" onClick={reset}>Reset</button>
            </form>
        </>
    )
}