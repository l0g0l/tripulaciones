import React, { Component } from 'react'
import Footer from '../components/Footer';
import Encabezadocomun from '../components/Encabezadocomun';
import Botoncuadradopeq from '../components/botones/Botoncuadradopeq';
import Desplegableredondeo from '../components/Desplegableredondeo';
import DesplegableOptions from '../components/DesplegableOptions';
import Botonovalado from '../components/botones/Botonovalado';
import quesitoblanco from '../images/quesitoblanco.svg';
import Modal from '../components/Modal'
import { Link } from 'react-router-dom';


import '../styles/_popup.scss'
import '../styles/_roundup.scss'


export class RoundUp extends Component {
  constructor(props) {
    super(props);

    this.updateBotonesMultiplicador = this.updateBotonesMultiplicador.bind(this);
    this.toggle = this.toggle.bind(this);

    this.state = {
      botones_multiplicador: {},
      siguiente_disabled: true,
      active: false
    }
  }
  toggle() {
    this.setState({ active: !this.state.active })
    // this.props.history.push('/roundup');
  }

  updateBotonesMultiplicador(newBotones) {

    this.setState({ botones_multiplicador: newBotones });

  }

  // send = () => {
  //   this.props.history.push('/roundup');
  // }

  render() {
    let multiplicadorpulsado = false
    let siguiente_disabled = this.state.siguiente_disabled
    for (const btn in this.state.botones_multiplicador) {
      // eslint-disable-next-line
      if (this.state.botones_multiplicador[btn].clicked == true) {
        multiplicadorpulsado = true
      }
    }
    if (multiplicadorpulsado) {
      siguiente_disabled = false
    }
    return (
      <div className="containerredondeo">
        <Encabezadocomun texto={'Redondeo de mis compras'} src={quesitoblanco} />
        <div className="redondeo">
          <p className="redondeo-txt"> Acelerador de solidaridad</p>
        </div>

        <div className="redondeo-btnmed">
          <Botoncuadradopeq valor={'x1'} state={this.state.botones_multiplicador} set_state={this.updateBotonesMultiplicador} btn_id={1} />
          <Botoncuadradopeq valor={'x2'} state={this.state.botones_multiplicador} set_state={this.updateBotonesMultiplicador} btn_id={2} />
          <Botoncuadradopeq valor={'x3'} state={this.state.botones_multiplicador} set_state={this.updateBotonesMultiplicador} btn_id={3} />
        </div>
        <div className="redondeo-txt-2">
          <p>Ejemplo: Si escoges x1 y compras un café de 0,80€ donarás 0,20€</p>
        </div>


        <Desplegableredondeo />

        <div >
          <p className="redondeo-txt">Tipo de donación</p>
        </div>

        <div className="desplegable1">
          <DesplegableOptions />

        </div>
        <div className="btnend">
          <Botonovalado func={this.toggle} texto={'Guardar'} color="btn-ovalado-pink" disabled={siguiente_disabled} />
          <Modal active={this.state.active} toggle={this.toggle}>
              <div className="modalconfig">
              <p className="popupmsg">Tu configuración se ha guardado y <span>activado</span> correctamente</p>
              <Link to='/home'><button>Ir a inicio</button></Link>

              </div>
          </Modal>

        </div>



        <Footer />

      </div>
    )
  }
}
export default RoundUp