import React, { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para manejar el inicio de sesión
    console.log('Inicio de sesión con:', email, password);
  };

  const handleGoogleLogin = () => {
    // Aquí iría la lógica para manejar el inicio de sesión con Google
    console.log('Inicio de sesión con Google');
  };

  const handleFacebookLogin = () => {
    // Aquí iría la lógica para manejar el inicio de sesión con Facebook
    console.log('Inicio de sesión con Facebook');
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Iniciar Sesión</h2>
        <form className="login-form" onSubmit={handleSubmit}>
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
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Iniciar Sesión</button>
        </form>
        <div className="social-login">
          <button className="google-btn" onClick={handleGoogleLogin}>
            <span className="button-text">Google</span>
          </button>
          <button className="facebook-btn" onClick={handleFacebookLogin}>
            <span className="button-text">Facebook</span>
          </button>
        </div>
        <div className="login-footer">
          <a href="#">¿Olvidaste tu contraseña?</a>
          <p>¿No tienes una cuenta? <Link to="/register">Regístrate</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Login;
