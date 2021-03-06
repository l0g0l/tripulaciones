import React from 'react'
import Footer from '../components/Footer';
import wifi from '../images/wifi.svg';
import graficomedia from '../images/graficomedia.svg';
import metododonacion from '../images/metododonacion.svg';
import { useHistory, Link } from 'react-router-dom';
import botondonar from '../images/botondonar.png'

import '../styles/_community.scss'




function Community() {
    let history = useHistory();
    const sendonedonation = () => {
      history.push("/onedonation");
    }
    return (
        <div className="containercommunity">
            <div className="encabezadocomun1" >
                <img className="encabezadocomun1-wifi" src={wifi} alt="wifi" />

                <div className="encabezadocomun1com" >
                    <p className="encabezadocomun1txt-1">La Comunidad</p>
                </div>

                <div className="encabezadocomun1txt2">
                    <Link to="./community"  className="encabezadocomun1txt2-2"><p>Gente como tú</p></Link>
                    <Link to="./challenges" className="encabezadocomun1txt2-1"><p>Challenges</p></Link>
                    <Link to="./ranking"className="encabezadocomun1txt2-1"><p>Ranking</p></Link>
                </div>

            </div>

            <div className="redondeo-txt-comunnity">
        <p>Estadísticas de gente de la comunidad con tus mismas carácterísticas (edad, hijos, ingresos, gastos...)</p>
      </div>
      <div className="grafico1">
        <img src={graficomedia} alt="graficomedia"/>
        </div>
        <div className="grafico2"> 
               <img  src={metododonacion} alt="metododonacion"/>
      </div>


      <div className="footerhome">
        <div className="footerhome-1">
          <img onClick={sendonedonation} className="footerhome-img" src={botondonar} alt="botondonar" />

        </div>

      </div>

      <Footer />

    </div>
    )
}

export default Community
