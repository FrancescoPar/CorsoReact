import { useOutlet } from "react-router";
import { Header } from "./header/header";

export function Layout(){

    const outlet = useOutlet();

    return(
        <>
        <Header></Header>
        <main>
            {outlet}
        </main>
        </>
    )
}