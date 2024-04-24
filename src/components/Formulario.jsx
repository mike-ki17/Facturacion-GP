
import { useState } from 'react';
import Tabla from './Tabla';
import '../css/Formulario.css'

function Formulario() {

    const [name, setName] = useState('');
    const [cedula, setCedula]  = useState(0);
    const [direccion, setDireccion] = useState('');
    const [telefono, setTelefono] = useState('');
    const [torresC, setTorresC] = useState(0);
    const [torresB, setTorresB] = useState(0);
    const [torresA, setTorresA] = useState(0);
    const [torresAA, setTorresAA] = useState(0);
    const [torresExtra, setTorresExtra] = useState(0);
    const [torresYumbo, setTorresYumbo] = useState(0);

    const [visible, setVisible] = useState(false)


  return (
    <div>
      <div className="container">
        <div className="contentForm">
            <h2 className="title">Granja campesina - Facturación</h2>
            <form action="" id="form" onSubmit={e => {
                e.preventDefault();
                setName(e.target.name.value)
                setCedula(e.target.cedula.value)
                setDireccion(e.target.direccion.value)
                setTelefono(e.target.telefono.value)
                setTorresC(e.target.torresC.value)
                setTorresB(e.target.torresB.value)
                setTorresA(e.target.torresA.value)
                setTorresAA(e.target.torresAA.value)
                setTorresExtra(e.target.torresExtra.value)
                setTorresYumbo(e.target.torresYumbo.value)
            }}>
                <div className="contenData" id="contenData">
                    <div className="contentField" id="contentFIeld">
                        <input type="text " name="name" className="name infoPersonal" placeholder="Nombre" id="name" />
                        <input type="number" name="cedula" className="cedula infoPersonal" placeholder="Cédula" id="cedula" />
                        <input type="text" name="direccion infoPersonal" className="direccion infoPersonal"
                            placeholder="Dirección" id="direccion" />
                        <input type="text" name="telefono" className="telefono infoPersonal" placeholder="Telefono"
                            id="telefono" />
                        <input type="number" name="torresC" className="torres" placeholder="Torres" id="torresC" />
                        <label >Tipo C</label>
                        <input type="number" name="torresB" className="torres" placeholder="Torres" id="torresB" />
                        <label >Tipo B</label>
                        <input type="number" name="torresA" className="torres" placeholder="Torres" id="torresA" />

                        <label >Tipo A</label>
                        <input type="number" name="torresAA" className="torres" placeholder="Torres" id="torresAA" />
                        <label >Tipo AA</label>
                        <input type="number" name="torresExtra" className="torres" placeholder="Torres" id="torresExtra" />
                        <label >Extra</label>
                        <input type="number" name="torresYumbo" className="torres" placeholder="Torres" id="torresYumbo" />
                        <label >Yumbo</label>
                    </div>
                    <div className="btns" >
                        <input className="submit" type='submit' value='Calcular' onClick={() => setVisible(true)}/>
                    </div>
                </div>
            </form>
            {/* <p id="total" className="total">Total: {name}</p> */}
            {
                visible ?  <Tabla 
                name = {name}
                cedula = {cedula}
                direccion = {direccion}
                telefono = {telefono}
                torres = {[torresC, torresA, torresB, torresAA, torresExtra, torresYumbo]} />: ''
               
            }
           
        </div>
    </div>
    </div>
  );
}

export default Formulario;
