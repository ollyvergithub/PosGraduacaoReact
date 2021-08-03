import React from "react";
import {Route} from "react-router-dom";
import {Home} from "./views/Home";
import {MovieDetail} from "./components/MovieDetail";
import {Favorites} from "./views/Favorites";

export const ApplicationRoutes = () =>{
    return(
        <>
            <Route exact path="/" component={Home}/>
            <Route exact path="/movie/:id" component={MovieDetail}/>
            <Route exact path="/favoritos" component={Favorites}/>
        </>
    )
}