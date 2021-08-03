import React, { Component } from 'react'
import LabeninjaPrincipal from './components/LabeninjaPrincipal/LabeninjaPrincipal'
import LabeninjaContrato from './components/LabeninjaContratos/LabeninjaContrato'
import LabeninjaCadastro from './components/LabeninjaCadastro/LabeninjaCadastro'



export default class App extends React.Component {

		state = {
			pagina : "Principal"
		}

		renderizaPagina = () => {
			switch(this.state.pagina){
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
							irParaCadastro = {this.irCadastro}
							irParaContrato = {this.irContratos}
							/>	
			}
		}

		irCadastro = () => {
			console.log("Estou dentro do metodo Cadastro")
			this.setState({ pagina : "Cadastro"});
		}
		
		irContratos = () => {
			console.log("Estou dentro do metodo Contratos")
			this.setState({ pagina : "Contratos"});
		}
		irParaPrincipal = () => {
			console.log("Estou dentro do metodo principal")
			this.setState({ pagina : "Principal"})
		}

	render(){
		return (		
			<div>
				{this.renderizaPagina()}
			</div>

		)

	}

}


