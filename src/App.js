import React, { Component } from 'react';
import styled from 'styled-components'
import iconCart from './img/bxs-cart-add.svg'

import LabeninjaPrincipal from './components/LabeninjaPrincipal/LabeninjaPrincipal'
import LabeninjaContrato from './components/LabeninjaContratos/LabeninjaContrato'
import LabeninjaCadastro from './components/LabeninjaCadastro/LabeninjaCadastro'
import axios from 'axios'

import Detalhes from './components/Detalhes'

const MainContainer = styled.div`

`
const Img = styled.img`
cursor: pointer;
`

export const BoxPrincipal = styled.div`
  flex-grow: 1;
  background-color: #f4f3f8;
  border-radius: 20px;
  padding: 15px 20px;
  display: flex;
  justify-content: center;
  margin-left: 20px;
  
`

export const BoxProduto = styled.div`
  display:grid;
  grid-template-columns: repeat(3,2fr);
  row-gap: 20px;
  column-gap: 20px;
  margin:10px;
  padding: 20px 40px; 
  border-right: 1px solid #ebe7fb;
  max-height: calc(130vh - calc(100vh / 2));
  overflow: auto;  
 
`

const url = "https://labeninjas.herokuapp.com"

const headers = {
    headers:{
        Authorization:"089c363c-2449-490e-9e13-234a13327ac2"
    }        
    }


export default class App extends React.Component {

	state = {
		pagina: "Principal",	
		produto: {},
		servico: [],
		carrinho: [],
		minFilter: 0,
        maxFilter: 0,
        nameFilter: '',
	}

	irParaPrincipal = () => {
		console.log("Estou dentro do metodo principal")
		this.setState({ pagina: "Principal" })
	}
	irCadastro = () => {
		console.log("Estou dentro do metodo Cadastro")
		this.setState({ pagina: "Cadastro" });
	}
	irContratos = () => {
		console.log("Estou dentro do metodo Contratos")
		this.setState({ pagina: "Contratos" });
	}
	

	renderizaPagina = () => {
		switch (this.state.pagina) {
			case "Cadastro":
				return <LabeninjaCadastro
					irParaPrincipal={this.irParaPrincipal}
				/>
			case "Contratos":
				return <LabeninjaContrato
					irParaPrincipal={this.irParaPrincipal}
				/>
			case "Principal":
				return <LabeninjaPrincipal
					irParaCadastro={this.irCadastro}
					irParaContrato={this.irContratos}
				/>
		}
	}

	
	componentDidMount(){
        this.pegarServico();
    }


	pegarServico = async () => {

		try {
			const res = await axios.get(`${url}/jobs`, headers)
			this.setState({servico : res.data.jobs})
			console.log("Valor do RES",res)

		} catch (err) {
			alert("Ocorreu um problema, tente novamente")
		}
		

	}




	detalhesProduto = (id) => {
		const url = "https://labeninjas.herokuapp.com/jobs/" + id
		const authorization = "089c363c-2449-490e-9e13-234a13327ac2"
		axios.get(url, {
			headers: {
				authorization
			}
		}).then((resp) => {
			this.setState({ produto: resp.data})

		}).catch((error) => {
			alert("Erro ao exibir detalhes!")

		})

	}
    
	adicionaNoCarrinho = (produto) => {
		const produtosAtualizados = [...this.state.carrinho,
			produto
		]
		this.setState({ carrinho: produtosAtualizados })
	}
	render() {

		const componentServico = this.state.servico.map((servico) =>{
			return <div key={servico.id} className="container d-flex justify-content-center align-items-center h-100 mb-5">
						<div className="row">
							<div className="col-md-12">
								<div className="card">
									<div className="card-body">
										<h5 className="card-title">{servico.title}</h5>
										<p className="card-text">Até {servico.dueDate} por <strong>{servico.price}.00 R$</strong></p>
										<a href="#" className="btn btn-primary">Ver Detalhes</a>
										<Img onClick={() => this.props.onAddProductToCart(servico.id)} src={iconCart} className="w-auto p-3 ms-5"/>
									</div>
								</div>
							</div>	
						</div>		
					</div>
		})

		return (
			<div>
				
				{this.renderizaPagina()}
				
				<BoxPrincipal>
				
					<BoxProduto>
					
						{componentServico}		
						
					</BoxProduto>
				</BoxPrincipal>	
										
				{/* <MainContainer>				
					<button type="text" onClick={() => this.detalhesProduto("175cb9cb-e680-4f9b-8fa8-a0addf65523f")}>Exibir detalhes</button>
					<Detalhes adicionaNoCarrinho={this.adicionaNoCarrinho} produto={this.state.produto}></Detalhes>
					
				</MainContainer> */}	
			</div>
		)

	}

}