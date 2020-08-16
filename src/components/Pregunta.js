import React, {Fragment, useState} from 'react';

const Pregunta = () => {

    //definir el state

    const [cantidad, guardarCantidad] = useState(0);

    //funcion que define el presupuesto, cuando se lee de un input lo lee como string  a pesar que venga como 
    //number, cuando esta azul esta entero

    const definirPresupuesto = e =>{
        //console.log(parseInt(e.target.value));
        guardarCantidad(parseInt(e.target.value, 10));
    }

    //submit para definir el presupuesto
    const agregarPresupuesto = e =>{
        e.preventDefault();

        //validar

        //si se pasa la validacion
    }

    return (  
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            <form
                onSubmit = {agregarPresupuesto}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange = {definirPresupuesto}
                />

                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir presupuesto"
                />
            </form>
        </Fragment>
    );
}
 
export default Pregunta;