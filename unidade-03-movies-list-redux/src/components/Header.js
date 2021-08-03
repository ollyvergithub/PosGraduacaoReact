import React from "react";
import {MainMenu} from "./MainMenu";

export const Header = () => {
    return(
        <>
            <header>
                <MainMenu/>
                <h1>Bem vindo ao Movies List</h1>
            </header>
        </>
    )
}