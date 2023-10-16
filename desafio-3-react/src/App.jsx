import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Listado from './components/Listado';
import Formulario from './components/Formulario';
import Buscador from './components/Buscador';
import Alert from './components/Alert';
import { BaseColaboradores } from "./assets/js/BaseColaboradores"; 




function App() {
  const [AlertMessage, setAlertMessage] = useState('');
  const [AlertType, setAlertType] = useState('');
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);

  const agregarColaborador = (nuevoColaborador) => {
    if (
      nuevoColaborador.nombre === '' ||
      nuevoColaborador.correo === '' ||
      nuevoColaborador.edad === '' ||
      nuevoColaborador.cargo === '' ||
      nuevoColaborador.telefono === ''
    ) {
      setAlertMessage('Completa todos los campos!');
    } else {
      setColaboradores([...colaboradores, nuevoColaborador]);

      setAlertMessage('Colaborador agregado con éxito');
      setAlertType('success');
    }
  };

  return (
    <>
    <Buscador></Buscador>
    <Listado colaboradores={colaboradores}></Listado>


    <Formulario agregarColaborador={agregarColaborador} setAlertMessage={setAlertMessage} />
    <Alert message={AlertMessage} type={AlertType} />
    </>
  );
}

export default App;