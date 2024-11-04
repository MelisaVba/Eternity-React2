import PropTypes from 'prop-types';

import CardItems from './CardItems';


function Card({ cards }) {
    
  

  return (
      <section className="cards-section">
          {cards.map((cardItems, index) => (
            <CardItems
              key={index}
              image={cardItems.image}
              imageAlt={cardItems.imageAlt}
              title={cardItems.title}
              description={cardItems.description}
              buttonTitle={cardItems.buttonTitle}
              action={cardItems.action}
            />

          ))}
      </section>
    
  )
}

Card.propTypes = {

  cards: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    buttonTitle: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
  })).isRequired,
};


export default Card;

                                                                                        


