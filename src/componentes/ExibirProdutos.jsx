import React, { useEffect, useState } from "react"
import api from "../_service/api"
import {Row ,Col} from "react-bootstrap"
import "./exibirprodutos.css"


function ExibirProdutos (){

const [produtos, setProdutos] = useState ([]); 


useEffect(() => {
    getProdutos();
}, [])

async function getProdutos (){
    const response = await api.get("/productlistbyremark/home")
    setProdutos(response.data)
}

    return(
        <>
        <div class="container-fluid">
            <Row>
            {produtos.map((produto)=>{
                return (
                    <>
                    <Col md={4}>
                    <div style={{border:"1px solid black", borderRadius:"10px", marginBottom:"5px"}}>
                    <p>{produto.title}</p>
                    <p>R${produto.price}</p>
                    <img width={100} alt={produto.title} src={produto.image}/>
                    </div>
                  
                
                    </Col>
                    </>
                )
            })}
            </Row>
        </div>
        </>
    );
}

export {ExibirProdutos}