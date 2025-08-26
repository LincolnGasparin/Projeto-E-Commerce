import { ExibirProdutos } from "../componentes/ExibirProdutos";
import { MinhaNavbar } from "../componentes/MinhaNavbar";


function Home() {

  return (
    <>
    <MinhaNavbar/>
    <div>
      <p>Bem Vindo Ao Melhor E-Commerce do Brasil</p>
    </div>
    <ExibirProdutos/>
    </>
  );
}

export { Home };
