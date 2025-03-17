import { useState } from 'react';
function CrearReservas() {
    const [fechaReserva, setfechaReserva] = useState("");
    const [lugar, setlugar] = useState("");
    const [nombreReserva, setnombreReserva] = useState("");
    const handleSubmit =async()=> {
        const respuesta=await fetch("http://localhost:3000/api/res",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({fechaReserva,lugar,nombreReserva})
        })

    }
    return (
        <div>
        <h1>Create Usuarios</h1>
        <form onSubmit={handleSubmit}>
            <label >Fecha de la Reserva:</label>
            <input type="text" onChange={(event)=>setfechaReserva(event.target.value)} placeholder="Escriba la fecha de reserva" />
            <label >Lugar</label>
            <input type="text" onChange={(event)=>setlugar(event.target.value)} placeholder="Escriba el lugar de reserva" />
            <label >nombreReserva</label>
            <input type="text" onChange={(event)=>setnombreReserva(event.target.value)} placeholder="Escriba el nombre de la reserva" />
            <button type="submit">Registrar Reserva</button>
        </form>
    </div>
    )
}

export default CrearReservas;