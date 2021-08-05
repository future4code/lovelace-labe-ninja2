import React, { Component } from 'react'
import Axios from 'axios'
import iconCart from './../../img/bxs-cart-add.svg'
import styled from 'styled-components'

const Img = styled.img`
cursor: pointer;
`

export default class LabeninjaCardProduto extends Component {

    render() {
        const product = this.props.product
        return (
            <div key={product.id}className="container d-flex justify-content-center align-items-center h-100 bg-info mb-5">   
                <div className="row">
                    <div className="col-md-7">
                        <div className="card">
                            <div className="card-body" >
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">Até {product.dueDate} por <strong>{product.price}</strong></p>
                                <a href="#" className="btn btn-primary">Ver Detalhes</a>
                                <Img onClick={() => this.props.onAddProductToCart(product.id)} src={iconCart} className="w-auto p-3 ms-5"/>
                                
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
        )
    }
}
