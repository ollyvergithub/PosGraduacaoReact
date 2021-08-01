import React from "react";
import {Route} from "react-router-dom";
import {Home} from "./views/Home";
import {MovieDetail} from "./components/MovieDetail";

export const ApplicationRoutes = () =>{
    return(
        <>
            <Route exact path="/" component={Home}/>
            <Route exact path="/movie/:id" component={MovieDetail}/>
        </>
    )
}