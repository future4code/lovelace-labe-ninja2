import React from "react"
import styled from "styled-components"


const FiltroContainer = styled.div`
display: flex;
`


export default class Filtro extends React.Component {
    render() {
        return (
            <FiltroContainer>
                <textoContainer><h3><p>Filtros: </p></h3></textoContainer>

                <label> Valor Mínimo:
                    <input type="number" onChange={this.props.onChangeValorMinimoFiltro} value={this.props.valorMinimoFiltro} placeholder="R$ 0.00"></input></label>

                <label>Valor Máximo:
                    <input type="number" onChange={this.props.onChangeValorMaximoFiltro} value={this.props.valorMaximoFiltro} placeholder="R$ 1000.00"></input></label>

                <label>Busca por Nome:
                    <input type="text" onChange={this.props.onChangeNomeFiltro} value={this.props.nomeFiltro} placeholder="Produto"></input></label>


            </FiltroContainer>
        )
    }
}

