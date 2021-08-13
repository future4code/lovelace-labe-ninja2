import React, { Component } from 'react';
import styled from 'styled-components'
import iconCart from './img/bxs-cart-add.svg'
import LabeninjaPrincipal from './components/LabeninjaPrincipal/LabeninjaPrincipal'
import LabeninjaContrato from './components/LabeninjaContratos/LabeninjaContrato'
import LabeninjaCadastro from './components/LabeninjaCadastro/LabeninjaCadastro'
import axios from 'axios'
import Carrinho from './components/Carrinho';

import Detalhes from './components/Detalhes'





export default class App extends React.Component {

	state = {
		pagina: "Principal",
		produto: {},
		carrinho: [],
		minFilter: 0,
		maxFilter: 0,
		nameFilter: '',
		valorMinimoFiltro: "",
		valorMaximoFiltro: "",
		nomeFiltro:""
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
	irCarrinho = () => {
		console.log("Estou dentro do metodo Carrinho")
		this.setState({ pagina: "Carrinho" });
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
					irParaCarrinho={this.irCarrinho}
				/>
			case "Detalhes":
				return <Detalhes
					adicionaNoCarrinho={this.adicionaNoCarrinho}
					produto={this.state.produto}
					irParaContrato={this.irContratos}
					irParaCarrinho={this.irCarrinho} />
			case "Carrinho":
				return <Carrinho carrinho={this.state.carrinho} />   
		}
	}


	render() {
		return (
			<div>
				{this.renderizaPagina()}	
			</div>
		)

	}

}