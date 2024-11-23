import { useState } from "react";
import { Outlet } from "react-router";
import { Header } from "./header/header";

export function Layout(){

    const [title, setTitle] =useState('')

    return(
        <>
        <Header title={title}></Header>
        <Outlet context={[title, setTitle]}></Outlet>
        </>
    )
}