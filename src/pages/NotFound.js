import React from "react";
import "../styles/notFound.css";
import platzi_log from "../images/notfound.png"
import { Link } from "react-router-dom";

function NotFound() {
  return (
      <div className="Badges__notFound">
          <div className="text__notFound">
        <h1>404 Error</h1>
        <h2>¡Page Not Found!</h2>
        <p>You are flying!</p>
        <Link className="btn btn-primary" to="/">Regresar al Inicio</Link>
        </div>
        <img src={platzi_log} alt="platzilogo"/>
      </div>
  );
}

export default NotFound;
