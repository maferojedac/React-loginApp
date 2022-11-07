import React, { useState, useEffect, useRef } from "react";
import "../styles.css";
import { CreateAccount } from "./CreateAccount";

/* useEffect-
OnComponentMount: primer argumento-solo se corre la primera vez que se corra el componente, se ejecute la funcion
OnComponentChange: segundo argumento-para cambiar el valor de alguna variable, puede recibir varios valores
OnComponentDestroy:
 */

/* useRef-hace lo mismo que useState, para datos no responsivos o que no se quieren mostrar*/
/* useState-se hace cambios en la app y se vea en la app*/

const LoginForm = () => {
  /* crea una variable usuario, solo se llama cuando se usa setUsuario y su valor por defecto es "Roberto"
    (se cambio a "undefined" porque no se sabe el nombre de usuario al inicio) */
  const [usuario, setUsuario] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const [state, setState] = useState('start')
  const [timesChanged, setTimesChanged] = useState(0);
  //const otherNumber = useRef(0)

  useEffect(() => {
    /* 1er argumento */ console.log("I loaded for the first time");
    setTimesChanged((t) => t + 1);
  }, [/* 2ndo argumento */ usuario]);

  /* recibe el valor del input y pone el valor puesto en input */
  const handleUsuarioChange = (e) => {
    setUsuario(e.target.value);
    //otherNumber.current = otherNumber.current + 1
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onLoginFormSubmitted = (e) => {
    /* se necesita poner esto, antes de poner un submit, para que no se recarge la pagina */
    e.preventDefault();
  };

  const AddTripButton = (props) => {
    return <button onClick={props.addTrip}>Add a trip</button>
  }

  return (
    <>
    
        {/* Fragment-es como un div pero no se renderiza como uno,  sirve para separar de manera logica pero no se le puede agregar estilos/funciones*/}
        <form onSubmit={onLoginFormSubmitted}>

          <h1>Login Form</h1>
          <div className="form-container">
          <label> Name: </label>
            <input type="text" onChange={handleUsuarioChange} />

            <label> Password: </label>
            <input type="password" onChange={handlePasswordChange} />
          </div>
            
          <div className="button1-container">
            <button className="button1" type="submit">Log In</button>
            {/* <p>{usuario}</p> */}
            {/* <p>{`El usuario se ha cambiado ${otherNumber.current} veces`}</p> */}
          </div>

          <div className="button2-container">
          <AddTripButton addTrip={this.triggerAddTripState} />
          {state === 'start' && (
        <AddTripButton addTrip={() => setState('add-trip') } />
      )}

      {state === 'add-trip' && <CreateAccount />}
            <button className="button2" type="submit">Create Account</button>
            {/* <p>{usuario}</p> */}
            {/* <p>{`El usuario se ha cambiado ${otherNumber.current} veces`}</p> */}
          </div>

        </form>
    </>
  );
};

export default LoginForm;
