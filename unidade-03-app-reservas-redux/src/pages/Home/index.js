import React, {useState, useEffect} from "react";
import {useDispatch} from "react-redux";
import {api} from "../../services/api";
import {MdLocalAirport} from "react-icons/md";

import {addReserve} from "../../store/modules/reserve/actions";

export const Home = () => {

    const dispatch = useDispatch()

    const [trips, setTrips] = useState([])

    useEffect(() => {
        const loadApi = async () => {
            const response = await api.get('trips')
            console.log("TRIPS ", response)
            setTrips(response.data)
        }
        loadApi()
    }, [])

    const handleAdd = (trip) => {
        dispatch(addReserve(trip))
    }

    return (
        <>
            <h1>Página Home</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {trips.map(trip => (
                    <div className="col" key={trip.title}>
                        <div className="card">
                            <img src={trip.image} className="card-img-top" alt={trip.title}/>
                            <div className="card-body">
                                <h5 className="card-title">{trip.title}</h5>
                                <p className="card-text">Status: {trip.status ? "Disponível" : "Indisponível"}</p>
                                <button
                                    onClick={()=> handleAdd(trip)}
                                    className='btn btn-primary'
                                    type='button'
                                >
                                    <MdLocalAirport size={20}/> Solicitar reserva
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}