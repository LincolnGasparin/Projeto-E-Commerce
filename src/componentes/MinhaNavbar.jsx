import { useEffect, useState } from "react";

function MinhaNavbar () {
    // Inicializa o estado buscando o token diretamente do localStorage
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [nomeUser, setNomeUser] = useState("");
    const [email, setEmail] = useState("");

    // Busca os dados do usuário apenas se o token existir
    useEffect(() => {
        if (token) {
            setNomeUser(localStorage.getItem("nomeUsuario") || "");
            setEmail(localStorage.getItem("email") || "");
        }
    }, [token]); // O efeito roda sempre que o token mudar

    function sair(){
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        localStorage.removeItem("nomeUsuario");
        setToken(null); // Limpa o estado para a UI atualizar instantaneamente
        window.location.reload();
    }

    return (
        <nav className="navbar navbar-dark bg-info">
             <div className="container-fluid">
                {/* Links à esquerda */}
                <div>
                    <a className="navbar-brand" href="/">Home</a>
                    <a className="navbar-brand" href="/produtos">Produtos</a>
                    <a className="navbar-brand" href="/carrinho">Carrinho</a>
                </div>

                {/* Seção à direita (usuário ou login) */}
                <div className="d-flex align-items-center">
                    {token ? (
                        <>
                            <div className="text-white me-3 text-end">
                                <div className="fw-bold">{nomeUser}</div>
                                <div className="small">{email}</div>
                            </div>
                            <button className="btn btn-outline-light" onClick={sair}>Sair</button>
                        </>
                    ) : (
                        <a className="btn btn-outline-light" href="/login">Login</a>
                    )}
                </div>
             </div>
        </nav>
    );
}

export {MinhaNavbar}