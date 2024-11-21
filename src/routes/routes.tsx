import { Home } from "../app/home/home";
import { Login } from "../auth/login/login";
import { Register } from "../auth/register/register";
import { RoutesType } from "../lib/types";
import { ProtectedRoute } from "./protectedRoute";

export const routes: RoutesType[] = [
    {
        path: '/',
        children: [
            {
                path: '',
                element: <ProtectedRoute><Home/></ProtectedRoute>
            },
            {
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