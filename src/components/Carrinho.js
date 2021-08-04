import React, { Component } from 'react';
import styled from 'styled-components';
import {ToastContainer, toast} from "react-toastfy";
import { contratarServiço } from './api';




const Propostas = styled``
const Proposta = styled``

// .select {
//    width: 100%
// }
// .center {
//    margin: 0 Auto;
//    align-self: center;
// }
const Total = styled``

const Contratar = styled``

const Desistir = styled``

const InputLabel = styled``

const Select = styled``

const FormControl = styled``

const Button = styled``

const MenuItem = styled``

const Voltar = styled ``







export class Carrinho extends Component {
    state = {
        carrinho: [],
        metodoDePagamento: []
    }

    componentDidMount() {
        const carrinho = JSON.parse(localStorage.getItem("carrinho")) || []
        const metodoDePagamento = carrinho.map(() => "")
        this.setState({
            carrinho,
            metodoDePagamento
        })
    }
    componentDidUpdate() {
        localStorage.setItem("carrinho", JSON.stringify(this.state.carrinho))
    }

    contratou = async () => {
        let erro = false
        let carrinhoFinal = [... this.state.carrinho]
        if (carrinhoFinal.length <= 0)
            return toast.dark("Sem serviço para contratar")

        await Promise.all(this.state.carrinho.map(async (servico) => {
            try {
                await contratarServiço(servico.id)
                carrinhoFinal = carrinhoFinal
                    .filter((servicoFinal) => servicoFinal.id !== servico.id)
            } catch (error) {
                erro = true
                alert = (`Impossivel contratar o serviço\nErro:${JSON.stringify(error)}`)
            }
        }))

        mudarPagamento = (index, event) => {
            const metodoDePagamento = [...this.state.metodoDePagamento]
            metodoDePagamento[index] = event.target.value
            this.setState({ metodoDePagamento })
        }
        limparCarrinho = () => {
            if (!window
                .confirm("certeza que deseja limpar o carrinho?"))
                return
            this.setState({ carrinho: [] })
            toast.dark("Seu carrinho está limpo")
        }

        desistir = (id) => {
            if (!window.confirm("Certeza que quer limpar o carrinho?"))
                return
            const carrinho = this.state.carrinho.filter((servico) => servico.id !== id)
            this.setState({ carrinho })
            toast.dark("Seu carrinho está limpinho!!")
        }

        ordenar = (servicoA, servicoB) => servicoA.title
            .localeCompare(servicoB.title, { ignorePunctuation: true })

        carrinhoDosServiços = () => this.state.carrinho
            .sort(this.ordenar)
            .map((servico, index) => (
                <Proposta key={servico.id}>
                    <h3>{servico.title}</h3>
                    <p>{servico.description}</p>
                    <p>{`R$ ${Servico.price}`}</p>
                    <p>{new Date(servico.dueDate).toLocaleDateString()}</p>
                    <FormControl>
                        <InputLabel >forma de Pagamento</InputLabel>
                        <Select
                            variant="outlined"
                            labelid="pagamento-label"
                            name="metodoDePagamento"
                            label="Forma de Pagamento"
                            value={this.state.metodoDePagamento[index]}
                            onChange={(pagamento) => this.mudarPagamento(index, pagamento)}
                        >
                            <MenuItem key={metodoDePagamento} value={metodoDePagamento}>
                                {metodoDePagamento}
                            </MenuItem>
                        </Select>
                    </FormControl>
                    <Button variant = "contained"
                    classname = "center"
                    onClick = {() => this.desistir(servico.id)}>
                        Desistir
                    </Button>

                </Proposta>
            ))

        render() ; {
            return (
                <main>
                    <Propostas>{this.carrinhoDosServiços()}</Propostas>
                    <Total>
                        <h3>Valor Total</h3>
                        <p>
                            {`R$ ${this.state.carrinho
                                .reduce((tatal, servico) => total += servico.price, 0)}`}
                        </p>
                    </Total>
                    <Desistir>
                        <Button variant="contained" onClick={this.limparCarrinho}>
                            Limpar Carrinho
                        </Button>
                    </Desistir>
                    <Contratar>
                        <Button variant="contained" onClick={this.contratou}>
                            Contratar as propostas
                        </Button>
                    </Contratar>
                    <Voltar>
                        <Button variant="contained" onClick={this.props.voltar}>
                            Voltar para propostas
                        </Button>
                    </Voltar>
                    <ToastContainer 
                    postion = "top-center"
                    autoClose = {2000}
                    hideProgressBar = {false}
                    newestOnTop = {false}
                    closeOnclick
                    rtl = {false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    />
                </main>
            );
        }
    }

}

export default Carrinho