import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

function actualizar(){
    const {id}=useParams();
    const [fechaReserva,setfechaReserva]=useState("");
    const [lugar,setlugar]=useState("");
    const [nombreReserva,setnombreReserva]=useState("");
    useEffect(()=>{
        buscarId();
    });
    const buscarId=async()=>{
        const res= await fetch(`http://localhost:3000/api/res/${id}`)
        const data= await res.json();
        // const respuesta=data[0];
        setfechaReserva(data.fechaReserva);
        setlugar(data.lugar);
        setnombreReserva(data.nombreReserva);
    }
    const actualizarReserva=async()=>{
        await fetch(`http://localhost:3000/api/res/${id}`,{
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({fechaReserva,lugar,nombreReserva})
        })};
    
        return (
        <div>
        <form onSubmit={actualizarReserva}>
            <label >Fecha de la Reserva:</label>
            <input type="text" value={fechaReserva} onChange={(event)=>setfechaReserva(event.target.value)} placeholder="Escriba la fecha de reserva" />
            <label >Lugar</label>
            <input type="text" value={lugar} onChange={(event)=>setlugar(event.target.value)} placeholder="Escriba el lugar de reserva" />
            <label >nombreReserva</label>
            <input type="text" value={nombreReserva} onChange={(event)=>setnombreReserva(event.target.value)} placeholder="Escriba el nombre de la reserva" />
            <button type="submit">Actualizar Reserva</button>
        </form>
        </div>
    )
}

export default actualizar;