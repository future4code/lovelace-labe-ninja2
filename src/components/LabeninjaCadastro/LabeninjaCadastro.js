import Axios from 'axios'
import React, { Component } from 'react'
import Select from 'react-select'

const url = "https://labeninjas.herokuapp.com/jobs/"

const headers = {
    headers:{
        Authorization:"089c363c-2449-490e-9e13-234a13327ac2"
    }        
    }

let FormaPagamento = [
    { value:1, label:"Cartão de Crédito"},
    { value:2, label:"Cartão de Débito"},
    { value:3, label:"Pix"},
    { value:4, label:"Paypal"},
    { value:5, label:"Boleto"}
]



export default class LabeninjaCadastro extends Component {

    state = {
        inputTitulo : "",
        inputDesc : "",
        inputPreco : 0,
        inputDate : "",
        itemEscolhido : []
    }
    
    

    mudaInputTitulo = (e) => {
        this.setState({inputTitulo: e.target.value})
    }
    mudaInputDesc = (e) => {
        this.setState({inputDesc: e.target.value})
    }
    mudaInputPreco = (e) => {
        this.setState({inputPreco: e.target.value})
    }
    mudaInputDate = (e) => {
        this.setState({inputDate: e.target.value})
    }       
    mudaInputFormaPagamento = (e) => {      
         this.setState({itemEscolhido : Array.isArray(e)?e.map((x)=>x.label):[] })
         // console.log(e)
        // console.log(this.state.itemEscolhido)      
    }

    criarServico = () =>{
        const body = {
            title: this.state.inputTitulo,
            description:this.state.inputDesc,   
            price: Number(this.state.inputPreco),
            paymentMethods: this.state.itemEscolhido,
            dueDate: this.state.inputDate
        }
        console.log(body.title)
        console.log(body.description)
        console.log(body.price)
        console.log(body.paymentMethods)
        console.log(body.dueDate)

        Axios.post(url,body,headers)
             .then((res)=>{
                 alert("Serviço criado com succeso")
                 this.setState({inputTitulo: ""})
                 this.setState({inputDesc: ""})
                 this.setState({inputPreco: ""})
                 this.setState({itemEscolhido: []})
                 this.setState({inputDate: ""})
                 console.log(res)
             })
             .catch((err)=>{
                alert(err.response.data.message)
                this.setState({inputTitulo: ""})
                this.setState({inputDesc: ""})
                this.setState({inputPreco: ""})
                this.setState({itemEscolhido: []})
                this.setState({inputDate: ""})
                console.log(err)
             })

    }

    render() {

        
  
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark container">
                    <div className="container-fluid">
                            <a 
                               className="navbar-brand"     
                               href="#"                           
                               onClick={this.props.irParaPrincipal}>
                                   Labeninja</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-lg-0">
                                <li className="nav-item">
                                </li>
                            </ul>   
                                <span className="navbar-text ms-auto mb-2 mb-lg-0 me-4">
                                    (55) 11 9453-33234
                                </span>
                            
                        </div>
                    </div>
                </nav>

            <div className="container">
                <div className="row justify-content-center mt-4">
                    <div className="col-md-7">
                        <h1 className="display-4">Cadastre o seu serviço</h1>
                        <hr className="bg-info"/>
                        <p className="pb-0 mb-3">Preencha os seguintes dados para publicar no site do Labeninja</p>
                            <form action="">
                                <div className="row form-group">
                                    <div className="form-floating mb-3">
                                        <input className="form-control" 
                                               value={this.state.inputTitulo}
                                               onChange={this.mudaInputTitulo}
                                               id="floatingInput" 
                                               placeholder="Título"/>
                                        <label for="floatingInput">Título</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input className="form-control" 
                                               value={this.state.inputDesc}             
                                               onChange={this.mudaInputDesc}
                                               id="floatingInput" 
                                               placeholder="Descrição"/>
                                        <label for="floatingPassword">Descrição</label>
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text">R$</span>
                                        <input className="form-control" 
                                               value={this.state.inputPreco}
                                               onChange={this.mudaInputPreco}                 
                                               id="floatingInput" 
                                               type="number"
                                               aria-label="Amount (to the nearest Real)"
                                               placeholder="Preço"/>
                                        <span className="input-group-text">.00</span>
                                    </div>
                                    
                                    <div className="nput-group mb-3">                                       
                                        <Select                                             
                                            isMulti                                             
                                            options={FormaPagamento}
                                            placeholder="Formas de Pagamento.."
                                            className="selectpicker w-100"
                                            onChange={this.mudaInputFormaPagamento}
                                            onSelect={this.mudaInputFormaPagamento}>
                                        </Select>                                                                                      
                                    </div>


                                    <div className='input-group mb-4' id='datetimepicker'>
                                    <label className="input-group-text" 
                                           for="inputGroupSelect01">Prazo</label>
                                        <input type='date' 
                                               value={this.state.inputDate}
                                               onChange={this.mudaInputDate}
                                               className="form-control" />
                                    </div>
                                    <button type="button" 
                                            className="btn btn-success"
                                            onClick={this.criarServico}>Cadastrar</button>

                                </div>
                            </form>
                    </div>  
                </div>
            </div>


            </div>
        )
    }
}
