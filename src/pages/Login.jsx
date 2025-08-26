
import { useNavigate } from "react-router-dom";
import { Navbar } from "../componentes/Navbar";
import "./login.css"
import { useState } from "react";


function Login () {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    let navigate = useNavigate()


    async function enviarForm(){
        try {
        const form = new FormData();
        form.append("email", email);
        form.append("password", password);

        console.log(email , password)
        const response = await fetch("http://webapp353621.ip-45-79-142-173.cloudezapp.io/api/login",
            {
                method: "POST",
                mode: "cors",
                body: form,
    
            }
        );
        const data = await response.json();
        localStorage.setItem("email",data.user.email);
        localStorage.setItem("nomeUsuario",data.user.name);
        localStorage.setItem("token",data.token);
        navigate('/')
        } catch (error) {
            alert("erro ao enviar os dados");
            console.log(error);
        }   
    }


    return (
        <>
        <Navbar/>
        <div class ="container-fluid">
            <div class="d-flex flex-column justify-content-center align-items-center vh-100">
            <div class="login-container">
            <form>
                <div class="input-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="seu@email.com" onChange={(event)=>setEmail(event.target.value)} required/>
            </div>
            <div class="input-group">
                <label for="password">Senha</label>
                <input type="password" id="password" name="password" placeholder="••••••••" onChange={(event)=> setPassword(event.target.value)} required/>
            </div>
            <button type="button" onClick={enviarForm} class="login-btn">Entrar</button>
            <a href="#" class="forgot-password">Esqueceu sua senha?</a>
        </form>
        </div>    
                
            </div>
        </div>
        </>
    )
}
export {Login};