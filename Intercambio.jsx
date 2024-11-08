import React from 'react';
import './Intercambio.css';

const Intercambio = () => {
  return (
    
    <div className="exchange-opportunities-section">
      <div className="exchange-opportunities-sectioncontainer">
        <h2 className="exchange-opportunities-sectiontitle">
          Oportunidades de Intercâmbio ao redor do mundo
        </h2>
        <div className="exchange-opportunities-sectiontext">
          <p>
          Nosso site oferece preparação para intercâmbios estudantis e sugere diversos modelos de intercâmbio ao redor do mundo. Explore as opções e prepare-se para uma experiência enriquecedora!
          </p>
        <div className="globohome">
          <img
            src="./src/assets/globohome.gif"/>
        </div>
        <div className='aviaoglobo'><img
          src="./src/assets/aviaoglobohome.gif"/>
          </div>
        
        <div className='nuvemhome'>
          <img
          src="./src/assets/nuvemhome.gif"/>
          </div>
          <div className='nuvemhome1'>
          <img
          src="./src/assets/nuvemhome.gif"/>
          </div>
          <h2>
            Explore as opções e prepare-se para uma experiência enriquecedora!
          </h2>
        </div>

        <div className="exchange-opportunities-sectionoptions">

          <div className="exchange-opportunities-sectionoptions-item">
            <h3></h3>
          </div>
          <div className="exchange-opportunities-sectionoptions-item">
            <h3></h3>
          </div>
          <div className="exchange-opportunities-sectionoptions-item">
            <h3></h3>
          </div>
        </div>

        <div className="exchange-opportunities-sectioncta">
            <p>Conheça essas e outras oportunidades de intercambio acessando nossa plataforma </p>
          <a href="#"className="exchange-opportunities-section__cta-button"> Acesse já</a>
        </div>
      </div>
    </div>
  );
};

export default Intercambio;