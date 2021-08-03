import React, { Component } from 'react'

export default class LabeninjaContrato extends Component {
    render() {
        return (
                  
            <div>
                <nav class="navbar navbar-expand-md navbar-dark bg-dark container">
                    <div class="container-fluid">                  
                            <a class="navbar-brand"
                            href="#"
                            onClick={this.props.irParaPrincipal}>                             
                                 Labeninja                         
                            </a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                            </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active" 
                                       aria-current="page" 
                                       href="#">Procure algum serviço</a>
                                </li>
                            </ul>   
                                <span class="navbar-text ms-auto mb-2 mb-lg-0 me-4">
                                    (55) 11 9453-33234
                                </span>
                            
                        </div>
                    </div>
                </nav>
            </div>
              
        )
    }
}
