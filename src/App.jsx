import React, { useState } from 'react';

const Amor = () => {
  const [mostrarMensaje, setMostrarMensaje] = useState(false);
  const [mostrarImagen, setMostrarImagen] = useState(false);
  const [hoverNo, setHoverNo] = useState(false);
  const [posicionNo, setPosicionNo] = useState({
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  });

  const [posicionSi, setPosicionSi] = useState({
    top: '70%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  });

  const manejarClick = () => {
    setMostrarMensaje(true);
    setMostrarImagen(true);

    setTimeout(() => {
      setMostrarMensaje(false);
      setMostrarImagen(false);
    }, 5000); // Ocultar el mensaje e imagen después de 5000 milisegundos (5 segundos)
  };

  const manejarNoHover = () => {
    if (!hoverNo) {
      const nuevaPosicion = {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      };

      setPosicionNo(nuevaPosicion);
      setPosicionSi(nuevaPosicion);
    }
  };

  const manejarNoClick = () => {
    setHoverNo(true);

    const nuevaPosicion = {
      top: Math.random() * 100 + '%',
      left: Math.random() * 100 + '%',
      transform: 'translate(-50%, -50%)',
    };

    setPosicionNo(nuevaPosicion);
    setPosicionSi(nuevaPosicion);
  };

  return (
    <div style={containerStyle}>
      <section style={sectionStyle}>
        <h1 style={tituloStyle}>SI me dices que sí ahora </h1>
        <br />
        <h1 style={tituloStyle}> yo te haré feliz </h1>
        <br />
        <h1 style={tituloStyle}>para toda la vida.</h1>
        <br />
        <h1 style={tituloStyle}> Eso te propongo</h1>
        <p> </p>
        <div style={buttonContainerStyle}>
          <button
            style={{
              ...siButtonStyle,
              ...posicionSi,
            }}
            onClick={manejarClick}
          >
            Sí
          </button>
          <br /> <br /> <br />
          <button
            style={{
              ...noButtonStyle,
              position: 'absolute',
              ...posicionNo,
            }}
            onMouseOver={manejarNoHover}
            onClick={manejarNoClick}
          >
            No
          </button>
        </div>
        {mostrarMensaje && (
          <div style={mensajeStyle}>
            <h2>¡Sabía que ibas a decir que sí!</h2>
            <p>❤️</p>
          </div>
        )}
        {mostrarImagen && (
          <img
            src="milk.png"
            alt="Imagen"
            style={{ width: '200px', height: '200px', marginTop: '10px' }}
          />
        )}
      </section>
    </div>
  );
};

const containerStyle = {
  background: 'linear-gradient(to right, #ff6699, #ff3399)',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const sectionStyle = {
  textAlign: 'center',
  fontFamily: 'cursive',
};

const tituloStyle = {
  color: 'white',
  marginTop: '-20px',
};

const buttonContainerStyle = {
  position: 'relative',
};

const siButtonStyle = {
  backgroundColor: '#FF0000',
  border: 'none',
  color: 'white',
  padding: '15px 32px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '16px',
  margin: '10px',
  cursor: 'pointer',
  borderRadius: '8px',
};

const noButtonStyle = {
  backgroundColor: '#0000FF',
  border: 'none',
  color: 'white',
  padding: '15px 32px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '16px',
  margin: '10px',
  cursor: 'pointer',
  borderRadius: '8px',
};

const mensajeStyle = {
  color: 'white',
  fontFamily: 'cursive',
  marginTop: '10px',
};

export default Amor;
