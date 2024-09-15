import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './register.css';


function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setPasswordError('Las contraseñas no coinciden');
    } else {
      setPasswordError('');
      console.log('Registro con:', name, email, password);
      // Aquí iría la lógica para enviar los datos de registro al servidor
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (confirmPassword && e.target.value !== confirmPassword) {
      setPasswordError('Las contraseñas no coinciden');
    } else {
      setPasswordError('');
    }
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (password && e.target.value !== password) {
      setPasswordError('Las contraseñas no coinciden');
    } else {
      setPasswordError('');
    }
  };

  const handleGoogleRegister = () => {
    // Aquí iría la lógica para manejar el registro con Google
    console.log('Registro con Google');
  };

  const handleFacebookRegister = () => {
    // Aquí iría la lógica para manejar el registro con Facebook
    console.log('Registro con Facebook');
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <h2>Crear Cuenta</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="name"
              placeholder="Nombre completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              placeholder="Contraseña"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirmar contraseña"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
            />
          </div>
          {passwordError && <div className="error-message">{passwordError}</div>}
          <button type="submit">Registrarse</button>
        </form>
        <div className="social-register">
          <button className="google-btn" onClick={handleGoogleRegister}>
            <span className="button-text">Continuar con Google</span>
          </button>
          <button className="facebook-btn" onClick={handleFacebookRegister}>
            <span className="button-text">Continuar con Facebook</span>
          </button>
        </div>
        <div className="register-footer">
          <p>¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Register;