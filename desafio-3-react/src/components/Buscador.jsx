import React from 'react';



function Buscador({ setAppAlertMessage }) {
    const [term, setTerm] = React.useState('');

    const handleSearch = (e) => {
        setTerm(e.target.value);
        setAppAlertMessage('');

    };

    return (
        <>
        <input
            type="text"
            placeholder="Buscar colaborador"
            value={term}
            onChange={handleSearch}>
        </input> 


        </>
    );
}

export default Buscador;

    


