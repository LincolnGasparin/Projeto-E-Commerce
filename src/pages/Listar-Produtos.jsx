import {Col , Row} from "react-bootstrap"
import api from "../_service/api"
import { useEffect, useState } from "react";
import { ExibirProdutos } from "../componentes/ExibirProdutos";
import { MinhaNavbar } from "../componentes/MinhaNavbar";

function ListarProdutos () {

const [listarProdutos , setProdutos] = useState ([]);

useEffect (() => {
buscarProdutos();
},[])


async function buscarProdutos() {

   try {
    const response = await api.get('/productlistremark/home')

    setProdutos(response.data)
   } catch (error) {
    console.log(error.message)  
   }  
    
}  


    return (
        <>
        <MinhaNavbar/>
        <Row className="justify-content-md-center">
            <Col md={2}>
            <h1>listarProdutos</h1>
            </Col>
        </Row>
        <ExibirProdutos/>
        </>
    )
}

export {ListarProdutos};