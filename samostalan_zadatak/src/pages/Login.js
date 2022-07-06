import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate(); //hook za navigaciju na home
  const Admin = {
    //hardcode korisnički podaci
    username: "jbrnjak",
    password: "Inicijalni1",
  };
  const [user, setUser] = useState({ username: "", password: "" }); // U state prosljeđena vrijednost koju je korisnik unio pod username i password
  const [error, setError] = useState(""); // u state prosljeđena početna vrijednost errora ako postoji

  const login = (details) => {
    console.log(details, "details");
    if (
      details.username === Admin.username &&
      details.password === Admin.password
    ) {
      alert("Successful login!"); //ako su podaci ispravni otvara se prozor
      navigate("/Home"); //ako su podaci ispravni, navigiramo na stranicu home
      setUser({ username: details.username });
    } else if (details.username === "" && details.password === "") {
      setError("Please enter your username and password!");
    } else if (details.username === "") {
      setError("Please enter your username!");
    } else if (details.password === "") {
      setError("Please enter your password!");
    } else setError("The username or password is incorrect!");
  };
  return <LoginForm login={login} error={error} setError={setError} />; //prikazuje cijelu stranicu login form
}
