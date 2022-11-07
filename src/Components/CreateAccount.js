import React, { useState }from 'react'
import '../styles.css'

export const CreateAccount = () => {

  const [name, setName] = useState(undefined)
  const [password, setPassword] = useState(undefined)

  const saveName = (e) => {
    setName(e.target.value);
  }

  const savePassword = () => {
    setPassword(e.target.value);
  }

  const confirmPassword = () => {
    if(psswrd===confirmPassword)
      savePassword()
    else
      console.error('Password doesnt match')
  }

  const onCreateAccountFormSubmitted = (e) => {
    /* se necesita poner esto, antes de poner un submit, para que no se recarge la pagina */
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={onCreateAccountFormSubmitted}>
        <h1>Create your Account</h1>
        <label>Name: </label>
        <input type="text" onChange={saveName}/>
        <label>Password: </label>
        <input id="psswrd" type="password"/>
        <label>Confirm your password: </label>
        <input id="confirmPassword" type="password" onChange={confirmPassword}/>
        <button onClick={ () => {con }}>Accept</button>
      </form>
      

      
    </div>
  )
}
