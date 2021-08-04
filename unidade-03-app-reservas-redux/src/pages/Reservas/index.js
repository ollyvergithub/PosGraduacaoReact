import React from "react";
import {MdDelete, MdAddCircle, MdRemoveCircle} from "react-icons/md";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";

import {removeReserve, updateAmountReserve} from "../../store/modules/reserve/actions";

export const Reservas = () => {

    const reserves = useSelector(state => state.reserve)
    const dispatch = useDispatch()

    const handleRemove = (id) => {
        dispatch(removeReserve(id))
    }

    const decrementAmount = (trip) =>{
        dispatch(updateAmountReserve(trip.id, trip.amount - 1))
    }
    const incrementAmount = (trip) =>{
        console.log("incrementAmount ", trip)
        dispatch(updateAmountReserve(trip.id, trip.amount + 1))
    }

    return(
        <>
            <h1>Você solicitou {reserves.length} reservas</h1>

            {reserves.map((reserve, index) => (
                <div key={index} className='d-flex justify-content-between align-items-center my-3 p-2 border'>
                    <img width='150' className='img-fluid' src={reserve.image} alt={reserve.title}/>
                    <p className='mb-0'><strong>{reserve.title}</strong></p>
                    <div className='mb-0'>
                        <button type='button' onClick={()=>decrementAmount(reserve)} className='btn btn-link mr-2'><MdRemoveCircle/></button>
                        <span>Quantidade: {reserve.amount}</span>
                        <button type='button' onClick={()=>incrementAmount(reserve)} className='btn btn-link mr-2'><MdAddCircle/></button>
                    </div>
                    <button onClick={()=>handleRemove(reserve.id)} className="btn btn-link"><MdDelete size={30} color={'red'}/></button>
                </div>
            ))}

            <footer className='mt-3'>
                <button className='btn btn-info' type='button'>Solicitar reserva</button>
            </footer>
        </>
    )
}