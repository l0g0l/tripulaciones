import React, { Component } from 'react'
import Footer from '../components/Footer';
import Encabezadocomun from '../components/Encabezadocomun';
import { useHistory } from 'react-router-dom';
import Botoncuadradopeq from '../components/botones/Botoncuadradopeq';
import DesplegableOptions from '../components/DesplegableOptions';
import Botonovalado from '../components/botones/Botonovalado';
import Desplegableperiodico from '../components/Desplegableperiodico'
import flor1 from '../images/flor1.svg';
import euro from '../images/euro.svg';
import calendarioblanco from '../images/calendarioblanco.svg';



import '../styles/_periodic.scss'

export class Periodic extends Component {
  constructor(props) {
    super(props);

    this.updateBotonesMultiplicador = this.updateBotonesMultiplicador.bind(this);
    this.send = this.send.bind(this);

    this.state = {
        botones_multiplicador: {},
        siguiente_disabled: true
    }
  }

  updateBotonesMultiplicador(newBotones) {
    console.log('NEW BOTONES')
    console.log(newBotones)
    this.setState({botones_multiplicador: newBotones});
    console.log(this.state.multiplicador)
    console.log('NEW BOTONES END')

  }
  
  send = () => {
    this.props.history.push('/periodic');
  }

  render () {
    let multiplicadorpulsado = false
    let siguiente_disabled = this.state.siguiente_disabled
    for (const btn in this.state.botones_multiplicador) {
      if (this.state.botones_multiplicador[btn].clicked == true) {
        multiplicadorpulsado = true
      }
    }
    if (multiplicadorpulsado) {
      siguiente_disabled = false
    }
    return (
      <div className="containerperiodica">
        <Encabezadocomun texto={'Donación periódica'} src={calendarioblanco} />

        <div className="periodica">
          <img className="periodica-img" src={flor1} alt="" />
          <input className="periodica-input" type="text" />
          <img className="periodica-img-2" src={euro} alt="" />

        </div>

        <div className="periodica-btnmed">
          <Botoncuadradopeq valor={'Día'} state={this.state.botones_multiplicador} set_state={this.updateBotonesMultiplicador} btn_id={1}/>
          <Botoncuadradopeq valor={'Semana'} state={this.state.botones_multiplicador} set_state={this.updateBotonesMultiplicador} btn_id={2}/>
          <Botoncuadradopeq valor={'Mes'} state={this.state.botones_multiplicador} set_state={this.updateBotonesMultiplicador} btn_id={3}/>
        </div>

        <div className="periodica-txt-2">
          <p>Otros usuarios de la comunidad con tus mismas características donan una media de 1€ al día</p>
        </div>


        <Desplegableperiodico/>

        <div >
          <p className="periodica-txt">Tipo de donación</p>
        </div>

        <div className="desplegable2">
          <DesplegableOptions />

        </div>

        <div className="btnguardar">

          <div className="btnguardar-1">
            <Botonovalado pulsar={this.send} texto={'Guardar'} color='btn-ovalado-pink' disabled={siguiente_disabled}/>

          </div>

          <div >
            <button className="btndesactivar">Desactivar</button>
          </div>

        </div>

        <Footer />
      </div>
    )
  }
}

export default Periodic