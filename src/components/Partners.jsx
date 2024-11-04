import PropTypes from 'prop-types';
import PartnersItem from "./PartnersItem";


function Partners({ title, partners }) {

  //console.log('Partners:', partners);

  return (
    <div className="socios">
      <h2>{title}</h2>

      <div className="galeria-container">
        {partners.map((partner, index) => (
          <PartnersItem
            key={index}
            image={partner.image}
            alt={partner.alt}
            imageUrl={partner.imageUrl}/>
        ))}
      </div>
      
    </div>
  )
}


Partners.propTypes = {
  title: PropTypes.string.isRequired,
  partners: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default Partners;

