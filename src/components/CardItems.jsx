import PropTypes from 'prop-types';

import logoRobot from '../../public/img/logoRobots.png';


function CardItems({
  image,
  imageAlt,
  title,
  description,
  buttonTitle,
  action, }) {
  
  return (
    <div className="cards-section">
    <article className="sombraContainer radiusImage" id="modelos">
          <div id="backgroundRobots"> 
        <img className="logoRoot" src={logoRobot} alt={imageAlt} />
        <img className="imgRadius" src={image} alt="Imagen de Robot"/>
          </div>
          <div>
            <h2>{title}</h2>
            <p>{description}</p>
            
            <button
              //Accionable 
              onClick={action}>
              {buttonTitle}
            </button>
          </div>
      </article>
    </div>

  )
}

CardItems.propTypes = {
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonTitle: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
}


export default CardItems;
