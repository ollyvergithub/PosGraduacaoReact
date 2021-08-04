import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

export const Header = () =>{

    const reserveSize = useSelector(state => state.reserve)

    return(
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"> </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link  to={'/'} className="nav-link" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/reservas'} className="nav-link" >Minhas Reservas</Link>
                            </li>
                        </ul>
                        <span className='ml-5'>{reserveSize.length} reservas</span>
                    </div>
                </div>
            </nav>
        </header>
    )
}