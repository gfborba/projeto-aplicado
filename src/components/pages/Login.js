import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import Logo from "../../img/logo.png";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const formRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault(); 
    console.log("Dados de Login:", { username, password });
    navigate("/search");
  };

  const handleAdminLogin = (event) => {
    event.preventDefault();

    if (formRef.current.reportValidity()) {
      console.log("Login como administrador:", { username, password });
      navigate("/products");
    }
  };

  return (
    <div className={styles.container}>
      <picture className={styles.logocontainer}>
        <img src={Logo} alt="logo" className={styles.logo} />
      </picture>

      
      <form ref={formRef} onSubmit={handleSubmit}>
        <h1>Acesse o sistema</h1>

        <div className={styles.inputfield}>
          <input
            type="text"
            placeholder="E-mail"
            required 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className={styles.inputfield}>
          <input
            type="password"
            placeholder="Senha"
            required 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className={styles.recallForget}>
          <label>
            <input type="checkbox" />
            Lembre de mim
          </label>
          <a href="#">Esqueceu sua senha?</a>
        </div>

        <button className={styles.loginButton} type="submit">
          Login
        </button>
        <button
          className={styles.loginButton}
          type="button"
          onClick={handleAdminLogin}
        >
          Login como administrador
        </button>

        <div className={styles.signupLink}>
          <p>
            Não tem uma conta? <a href="#">Registrar</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
