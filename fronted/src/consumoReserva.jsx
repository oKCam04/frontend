import { useState } from "react";
import { useEffect } from "react";
import "./estilo.css"

function ConsumoReserva(){
    const [reserva,setReserva]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:3000/api/res")
        .then(res=>res.json())
        .then(data=>setReserva(data))
    },[]);
    return (
        <div>
            <h1 className="h1">Lista de usuarios</h1>
            <table className="tablaUser">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Fecha Reserva</th>
                        <th>Lugar</th>
                        <th>opcion</th>
                        <th>Nombre Reserva</th>
                    </tr>
                </thead>
                <tbody>
                    {reserva.map(res => (
                        <tr>
                            <td>{res.id}</td>
                            <td>{res.fechaReserva}</td>
                            <td>{res.lugar}</td>
                            <td><button className="edit">Edit</button><button className="delete">Delete</button></td>
                            <td>{res.nombreReserva}</td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ConsumoReserva;