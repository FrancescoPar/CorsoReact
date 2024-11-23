import { Home } from "../app/home/home";
import { Login } from "../auth/login/login";
import { Register } from "../auth/register/register";
import { Layout } from "../layout/layout";
import { RoutesType } from "../lib/types";
import { ProtectedRoute } from "./protectedRoute";

export const routes: RoutesType[] = [
    {
        element: <Layout/>, // imposto il layout alla radice delle rotte per averlo sempre
        children: [
            {
                element: <ProtectedRoute/>, // imposto le rotte protette solo sulle rotte applicative
                children: [
                    {
                        path: '',
                        element: <Home/>
                    },
                    {
                        path: 'corsi',
                        children:[
                            {

                            }
                        ]
                    }
                ]
            },
            { // non metto la protezione sulle rotte di login e di registrazione perché non è necessario
                path: 'login',
                element: <Login/>
            },
            {
                path: 'register',
                element: <Register/>
            }
        ]
    },
    {
        path: '*',
        element: <h1>Pagina non trovata</h1>
    }
]