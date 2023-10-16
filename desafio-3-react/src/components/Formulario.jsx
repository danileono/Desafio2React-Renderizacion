import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Alert from "./Alert";
import Button from "react-bootstrap/Button";

function Formulario({ agregarColaborador, setAlertMessage }) {
    const [nuevoColaborador, setNuevoColaborador] = useState({
        nombre: "",
        correo: "",
        edad: "",
        cargo: "",
        telefono: "",
    });

    const { nombre, correo, edad, cargo, telefono } = nuevoColaborador; // Desestructura el objeto

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNuevoColaborador({ ...nuevoColaborador, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nombre === "" || correo === "" || edad === "" || cargo === "" || telefono === "") {
            setAlertMessage("Faltan campos por completar");
        } else {
            agregarColaborador(nuevoColaborador);
            setAlertMessage("Colaborador agregado exitosamente");
            setNuevoColaborador({
                nombre: "",
                correo: "",
                edad: "",
                cargo: "",
                telefono: "",
            });
        }
    };

    return (
        <div className="container">
            <h2>Nuevo colaborador</h2>
            <Form onSubmit={handleSubmit}>
                <div className="d-flex flex-column gap-2">
                    <input type="text" className="form-control" name="nombre" placeholder="Nombre" value={nombre} onChange={handleInputChange} />
                    <input type="email" className="form-control" name="correo" placeholder="Email" value={correo} onChange={handleInputChange} />
                    <input type="text" className="form-control" name="edad" placeholder="Edad" value={edad} onChange={handleInputChange} />
                    <input type="text" className="form-control" name="cargo" placeholder="Cargo" value={cargo} onChange={handleInputChange} />
                    <input
                        type="tel"
                        className="form-control"
                        name="telefono"
                        placeholder="Teléfono"
                        value={telefono}
                        onChange={(e) => {
                            const input = e.target.value;
                            if (/^[0-9]*$/.test(input)) {
                                setNuevoColaborador({ ...nuevoColaborador, telefono: input });
                            }
                        }}
                    />
                    <Button variant="primary" type="submit">
                        Agregar colaborador
                    </Button>
                </div>
            </Form>
            <Alert></Alert>
        </div>
    );
}

export default Formulario;
