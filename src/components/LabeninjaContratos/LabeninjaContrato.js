import React, { Component } from 'react'
import { BoxProduto, Header, Img , BoxPrincipal } from './Labeninja.styleContrato'
import iconCart from './../../img/bxs-cart-add.svg'
import axios from 'axios'
import Detalhes from '../Detalhes'
import Carrinho from '../Carrinho'


const url = "https://labeninjas.herokuapp.com"

const headers = {
	headers: {
		Authorization: "089c363c-2449-490e-9e13-234a13327ac2"
	}
}
export default class LabeninjaContrato extends Component {

    state = {
        sort: 'CRESCENTE',
        carrinho: [],
        servico: [],
        pagina: 'Contratos',
        produto: {},

        produtoTitulo : '',
        produtoDesc : '',
        produtoDate : '',
        produtoMetodoPago : [],
        produtoPrice: 0,
        
        minFilter: 0,
        maxFilter: 0,
        nameFilter: ""

    }

    
   // Troca de tela DETALHES =============================================
    irDetalhes = () => {
		console.log("Estou dentro do metodo Detalhes")        
		this.setState({ pagina: "Detalhes" });
        console.log("statePagina", this.state.pagina)
	}

	irCarrinho = () => {
		this.setState({ pagina: "Carrinho" });
        
	}

    renderizaPagina = () => {
        switch (this.state.pagina) {
            case "Carrinho":
                return <Carrinho carrinho={this.state.carrinho} />   
        }
    }
    //=================================================================

    // Parte pegar servicos =============================================
    componentDidMount() {
		this.pegarServico();        
	}
    
	pegarServico = async () => {
		try {
			const res = await axios.get(`${url}/jobs`, headers)
			this.setState({ servico: res.data.jobs })
			console.log("Valor do RES", res)

		} catch (err) {
			alert("Ocorreu um problema, tente novamente")
		}

	}
    //=================================================================

    //DETALHES PRODUTO======================================================================================
    detalhesProduto = (id) => {

		this.irDetalhes()

		const url = "https://labeninjas.herokuapp.com/jobs/" + id
		const authorization = "089c363c-2449-490e-9e13-234a13327ac2"
		axios.get(url, {
			headers: {
				authorization
			}
		}).then((resp) => {
			this.setState({ produto: resp.data })
            this.setState({ produtoTitulo : resp.data.title})
            this.setState({ produtoDesc : resp.data.description})
            this.setState({ produtoDate : resp.data.dueDate})
            this.setState({ produtoMetodoPago : resp.data.paymentMethods})
            this.setState({ produtoPrice : resp.data.price})
            

		}).catch((error) => {
			alert("Erro ao exibir detalhes!")

		})

	}

    adicionaNoCarrinho = (produto) => {
		const produtosAtualizados = [...this.state.carrinho,
			produto
		]
		this.setState({ carrinho: produtosAtualizados })
		alert('Produto adicionado no carrinho.')
	}

   
    //Eventos filtragem ===============================================
    onChangeValorMinimoFiltro = (event) => {
		this.setState({ minFilter: event.target.value })
	}
    onChangeValorMaximoFiltro = (event) => {
		this.setState({ maxFilter: event.target.value })
	}
	onChangeNomeFiltro = (event) => {
		this.setState({ nameFilter: event.target.value })
	}
    onChangeSort = (event) => {
        this.setState({ sort: event.target.value })
    }


    render() {

        const servicosFiltrados = this.state.servico
        .filter(produto => this.state.maxFilter ? produto.price < this.state.maxFilter : true)
		.filter(produto => this.state.minFilter ? produto.price > this.state.minFilter : true)
		.filter(produto => this.state.nameFilter ? produto.title.toLowerCase().includes(this.state.nameFilter.toLowerCase()):true)
        .sort((a, b) => this.state.sort === 'CRESCENTE' ? a.price - b.price : b.price - a.price)

        const componentServico = servicosFiltrados.map((servico) => {
			return <div key={servico.id} className="container d-flex justify-content-center align-items-center h-100 mb-3">
				<div className="row">
					<div className="col-md-13">
						<div className="card">
							<div className="card-body">
								<h5 className="card-title">{servico.title}</h5>
								<p className="card-text">Até { (servico.dueDate).replace('T00:00:00.000Z','') } por <strong>{servico.price}.00 R$</strong></p>
								<button 
                                    onClick={() => this.detalhesProduto(servico.id)}  key={servico.id}
                                    className="btn btn-primary" data-toggle="modal" data-target="#Detalhes">Detalhes</button>
								<Img onClick={() => this.adicionaNoCarrinho(servico)} src={iconCart} className="w-auto p-3 ms-4"/>
							</div>
						</div>
					</div>
				</div>	
            </div>	
        })

       return (

            <div>
                 {/* {this.renderizaPagina()} */}
                <nav className="navbar navbar-expand-md navbar-dark bg-dark container mb-3">
                    <div className="container-fluid">
                        <a className="navbar-brand"
                            href="#"
                            onClick={this.props.irParaPrincipal}>
                            Labeninja
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-lg-0">
                            <input className="form-control ms-5" 
                                   list="datalistOptions" 
                                   id="exampleDataList" 
                                   placeholder="Busca"
                                   onChange={this.onChangeNomeFiltro} 
                                   value={this.state.nameFilter}/>
                            </ul>
                            <span className="navbar-text ms-auto mb-2 mb-lg-0 me-4">
                                 <button type="button" 
                                         className="btn btn-info"
                                         onClick={this.irCarrinho}>Carrinho</button>
                            </span>

                        </div>
                    </div>
                </nav>


                <div  className="modal fade" 
                        id="Detalhes" 
                        data-backdrop="static" 
                        data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="staticBackdropLabel">{this.state.produtoTitulo}</h5>
                                    <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">                                        
                                    <strong><u>Aceita:</u></strong> {this.state.produtoMetodoPago.join()} <br/>
                                    Até { (this.state.produtoDate).replace('T00:00:00.000Z','') } por <strong>{this.state.produtoPrice}.00 R$</strong> <br/>
                                    <strong><u>Descrição:</u></strong>  {this.state.produtoDesc}
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" 
                                            className="btn btn-primary"
                                            onClick={() => this.adicionaNoCarrinho(this.state.produto)}>Adicionar ao carrinho</button>
                                </div>
                            </div>
                    </div>
                </div>


                    <div className="container d-flex justify-content-center mb-3">
                        <div className="form-floating" >                        
                            <select className="form-select" id="floatingSelect" aria-label="Floating label select example"
                                value={this.state.sort} 
                                onChange={this.onChangeSort}>
                                <option value={'CRESCENTE'}>Crescente</option>
                                <option value={'DESCRESCENTE'}>Decrescente</option>
                            </select>
                            <label for="floatingSelect">Ordenar por</label>
                        </div>
                        <div className="form-floating">
                            <input  className="form-control" 
                                    type="number" 
                                    onChange={this.onChangeValorMinimoFiltro} 
                                    value={this.state.minFilter}/>
                            <label for="floatingInput">Valor Mínimo</label>     
                        </div>
                        <div className="form-floating">                           
                            <input className="form-control" 
                                type="number" 
                                onChange={this.onChangeValorMaximoFiltro} 
                                value={this.state.maxFilter} />
                            <label for="floatingInput">Valor Máximo</label> 
                        </div>
                    </div>
                    
                    
             

                <BoxPrincipal>				
					<BoxProduto>
						{componentServico}
					</BoxProduto>
				</BoxPrincipal>

                <div>
                    {this.renderizaPagina()}
                </div>


            </div>

        )
    }
}
