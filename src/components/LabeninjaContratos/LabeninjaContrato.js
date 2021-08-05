import React, { Component } from 'react'
import { BoxProduto, Header } from './Labeninja.styleContrato'
import LabeninjaCardProduto from './LabeninjaCardProduto'

export default class LabeninjaContrato extends Component {

    state = {
        sort: 'DECRESCENTE'
      }

    getFilteredAndOrderedList = () => {
        return this.props.products
        .filter((product) => this.props.maxFilter ? product.valor < this.props.maxFilter : true)
        .filter((product) => this.props.minFilter ? product.valor > this.props.minFilter : true)
        .filter((product) => this.props.nameFilter ? product.nome.includes(this.props.nameFilter) : true)
        .sort((a, b) => this.state.sort === 'CRESCENTE' ? a.valor - b.valor : b.valor - a.valor)
      }
    
    onChangeSort = (event) => {
        this.setState({sort: event.target.value})
      } 

    render() {        
        
        return (
           <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark container">
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
                                <li className="nav-item">
                                    <a className="nav-link active"
                                        aria-current="page"
                                        href="#">Procure algum serviço</a>
                                </li>
                            </ul>
                            <span className="navbar-text ms-auto mb-2 mb-lg-0 me-4">
                                (55) 11 9453-33234
                            </span>

                        </div>
                    </div>
                </nav>

            <Header>
                        
                <label>               
                Ordenar por:
                    <select value={this.state.sort} onChange={this.onChangeSort}>
                        <option value={'CRESCENTE'}>Crescente</option>
                        <option value={'DESCRESCENTE'}>Decrescente</option>
                    </select>
                </label>              
            </Header>   

           </div>

        )
    }
}
