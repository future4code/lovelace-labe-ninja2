import React from 'react'


import {Carrinho} from './components/Carrinho'
 
function App() {
	return (
       
		<Carrinho/>
	)
}

import LabeninjaPrincipal from './components/LabeninjaPrincipal/LabeninjaPrincipal'
import LabeninjaContrato from './components/LabeninjaContratos/LabeninjaContrato'
import LabeninjaCadastro from './components/LabeninjaCadastro/LabeninjaCadastro'
import axios from 'axios'
import styled from 'styled-components'
import Detalhes from './components/Detalhes'

const MainContainer = styled.div`





export default class App extends React.Component {

	state = {

		pagina: "Principal",
		
		produto: {}

	}



	detalhesProduto = (id) => {

		const url = "https://labeninjas.herokuapp.com/jobs/" + id
		const authorization = "089c363c-2449-490e-9e13-234a13327ac2"

		axios.get(url, {
			headers: {
				authorization
			}
		}).then((resp) => {
			this.setState({ produto: resp.data })

		}).catch((error) => {
			alert("Erro ao exibir detalhes!")

		})

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



	irCadastro = () => {
		console.log("Estou dentro do metodo Cadastro")
		this.setState({ pagina: "Cadastro" });
	}

	irContratos = () => {
		console.log("Estou dentro do metodo Contratos")
		this.setState({ pagina: "Contratos" });
	}
	irParaPrincipal = () => {
		console.log("Estou dentro do metodo principal")
		this.setState({ pagina: "Principal" })
	}


	

	render() {
		return (
			<MainContainer>

				{this.renderizaPagina()}

				{/* <button type="text" onClick={() => this.detalhesProduto("175cb9cb-e680-4f9b-8fa8-a0addf65523f")}>Exibir detalhes</button>
				<Detalhes produto={this.state.produto}></Detalhes> */}

			</MainContainer>

		)

	}

}