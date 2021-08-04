import React from "react"
import styled from "styled-components"

const Container = styled.div`
display: inline;
`


export default class Detalhes extends React.Component {



    render() {
        return (
            <Container>
                <div>
                    <b>Título:</b> {this.props.produto.title}
                    <p></p>
                </div>
                <div>
                    <b>Descrição:</b> {this.props.produto.description}
                    <p></p>
                </div>
                <div>
                    <b>Preço:</b> {this.props.produto.price}
                    <p></p>
                </div>
                <div>
                    <b>Formas de Pagamento:</b>{this.props.produto.paymentMethods}
                    <p></p>
                </div>

                <button onClick={() => this.props.adicionaNoCarrinho(this.props.produto)} type="text">Adicionar ao Carrinho</button>
                <button type="text">Voltar para Lista</button>
            </Container>
        )
    }

}