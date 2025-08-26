function Navbar () {
    return (
        <>
        <div className="">
        <nav class="navbar navbar-dark bg-info">
             <div class="container-fluid">
                <div>
                <a class="navbar-brand text-white" href="/carrinho">Carrinho</a>
                <a class="navbar-brand text-white" href="/">Home</a>
                <a class="navbar-brand text-white" href="/produtos">Produtos</a>
                </div>

             </div>
        </nav>
        </div>
        </>
    );
}

export {Navbar}