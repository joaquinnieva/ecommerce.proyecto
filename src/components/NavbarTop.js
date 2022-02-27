import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/NavbarTop.css';
import CarritoIcon from './CarritoIcon';
import Images from './Images';

function NavbarTop({ busqueda, productos }) {
  const handleChange = (e) => {
    busqueda = e.target.value;
  };

  return (
    <>
      <div className="cont-logoecommerce">
        <Link to="/">
          <img className="logoecommerce1" src={Images.logoecommerce1} alt="logo" />
          <img className="logoecommerce2" src={Images.logoecommerce2} alt="logo" />
        </Link>
      </div>
      <div className="navbartop">
        <div className="framefix"></div>

        <div className="buscador">
          <div className="buscador-ico-cont">
            <img className="buscador-ico" src={Images.buscador} alt="buscador" />
            <input placeholder="Buscar" type="text" className="buscar-input" onChange={handleChange}></input>
          </div>
        </div>

        <div className="carrito">
          <CarritoIcon />
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  productos: state.productos,
  busqueda: state.busqueda,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(NavbarTop);