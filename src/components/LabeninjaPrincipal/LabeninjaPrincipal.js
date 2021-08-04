import React, { Component } from 'react';
import LabeninjaImg from './../../img/ninja.png'


export default class LabeninjaPrincipal extends Component {


    render() {
        return (
        
            <div>  
              <div>
                <nav class="navbar navbar-expand-md navbar-dark bg-dark container">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">Labeninja</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">

                            <span class="navbar-text ms-auto mb-2 mb-lg-0 me-4">
                                (55) 11 9453-33234
                            </span>

                        </div>
                    </div>
                </nav>

                <div className="container">
                    <div className="row">

                        <div className="d-flex justify-content-center p-2">
                            <img src={LabeninjaImg} />
                        </div>
                        <div className="d-flex justify-content-center p-2">

                            <button type="button"
                                onClick={this.props.irParaCadastro}
                                className="btn btn-outline-dark">
                                Quero ser um Labeninja
                            </button>


                        
                            <button type="button"
                                onClick={this.props.irParaContrato}
                                className="btn btn-outline-dark">
                                Contratar um Labeninja
                            </button>
                        </div>
                    </div>
                </div>


            </div>
         </div>
        )
    }
}
