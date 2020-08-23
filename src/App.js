import React, {useState} from 'react';
import Pregunta from './components/Pregunta';
import Forumulario from './components/Formulario';

function App() {

  //Definir el state
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarpregunta, actualizarPregunta ] = useState(true);
  const [gastos, guardarGastos] = useState([]);

  //Cuando agreguemos un nuevo gasto
  const agregarNuevoGasto = gasto =>{
    //console.log(gasto);
    guardarGastos([
      ...gastos, 
      gasto
    ])
  }

  //carga condicional en react

  return (
    <div className="container">
      <header>
         <h1>Gasto Semanal</h1>
            <div className="contenido-principal contenido">

              { mostrarpregunta ?  
              
              ( <Pregunta 
                  guardarPresupuesto={guardarPresupuesto}
                  guardarRestante={guardarRestante}
                  actualizarPregunta = {actualizarPregunta}
              />
              ) 
              : 
              ( 
                <div className="row">
                  <div className="one-half column">
                      <Forumulario 
                        agregarNuevoGasto = {agregarNuevoGasto}
                      />
                  </div>
                  <div className="one-half column">2</div>
                </div>
              ) }
              
              
              

            </div>
      </header>
    </div>
  );
}

export default App;
