import React from "react"
import styled from "styled-components"


const Main = styled.div`
`

export default class Carrinho extends React.Component {


    render() {
        let total = 0
        const listaServicos = this.props.carrinho.map((produto) => {
            total += produto.price
            return <div>
                <span>{produto.title}</span>
                <span>{produto.price}</span>
            </div>
        })

        return (
            <Main>

                {listaServicos}
                <span>Total: {total}</span>

                <button type="text">Contratar Serviços</button>

            </Main>
        )

    }

}