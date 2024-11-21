import { RouterProvider } from "react-router-dom";
import { router } from "./router";

export function NavigationProvider(){
    return(
        <>
            <RouterProvider router={router}></RouterProvider>
        </>
    )
}