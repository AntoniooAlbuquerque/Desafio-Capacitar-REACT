import './Delicias.css';

import boloImg from '../assets/bolo.png';
import geladoImg from '../assets/gelado.png';
import docesImg from '../assets/doces.png';

function Delicias() {
  return (
    <section className="delicias-container">
      <h2>Explore Nossas Delícias</h2>
      <div className="galeria">
        <div className="galeria-item">
          <img src={boloImg} alt="Bolo de chocolate" />
        </div>
        <div className="galeria-item">
          <img src={geladoImg} alt="Taça de sobremesa" />
        </div>
        <div className="galeria-item">
          <img src={docesImg} alt="Brigadeiros gourmet" />
        </div>
      </div>
    </section>
  );
}

export default Delicias;