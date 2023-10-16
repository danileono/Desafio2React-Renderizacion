import React from 'react'
import Table from 'react-bootstrap/Table';

const Listado = ({ colaboradores }) => {
    return (


        <>
        <h2>Listado de Colaboradores</h2>
        
    <Table striped bordered hover size="sm">
        <thead>
            <tr>
            <th>ID</th>
            <th className="mb-5">Nombre</th>
            <th>Correo</th>
            <th>Edad</th>
            <th>Cargo</th>
            <th>Teléfono</th>
            </tr>
        </thead>
    <tbody>
    {colaboradores.map((colaborador) => (
        <tr key={colaborador.id}>
            <td>{colaborador.id}</td>
            <td>{colaborador.nombre}</td>
            <td>{colaborador.correo}</td>
            <td>{colaborador.edad}</td>
            <td>{colaborador.cargo}</td>
            <td>{colaborador.telefono}</td>
        </tr>
        ))}
    </tbody>
    </Table>
    </>
);

}

export default Listado