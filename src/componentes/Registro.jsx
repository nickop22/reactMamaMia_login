import { useState } from "react";

const Registro = () => {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState();

  const handleLogin = (e) => {
    e.preventDefault();

    if (usuario === "" || password === "" || password2 === "") {
      setError("Por favor, ingrese un usuario y contraseña.");
      return;
    }

    if (
      usuario === "admin" &&
      password === "a123456" &&
      password2 === "a123456"
    ) {
      alert("Inicio de sesión exitoso");
      setError("");
    } else {
      setError("Usuario o contraseña incorrectos.");
    }
  };

  return (
    <>
      <form className="formulario" onSubmit={handleLogin}>
        {error ? <p>{error}</p> : null}
        <div>
          <label htmlFor="">Usuario</label>
          <input
            type="text"
            name="usuario"
            className="form-control"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Contraseña</label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Repita contraseña</label>
          <input
            type="password"
            name="password2"
            className="form-control"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </>
  );
};

export default Registro;
