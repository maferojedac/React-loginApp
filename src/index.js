import React from 'react';
import ReactDOM from 'react-dom/client';
import LoginForm from './Components/LoginForm'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> {/* para que React no "explote" si hacemos algo realmente malo acerca de la RAM */}
    <LoginForm /> 
  </React.StrictMode>
);
