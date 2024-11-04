import PropTypes from 'prop-types';


function CarouselItem({ imageSrc, imageAlt, itemTittle, itemDescription, active}) {
  return (
    <div className={`carousel-item ${active ? "active" : ""} `}>
      <img src= {imageSrc} className="d-block w-100" alt= {imageAlt} />
        <div className="carousel-caption d-none d-md-block">
          <h5> {itemTittle} </h5>
          <p> {itemDescription} </p>
        </div>
    </div>
  );
}


CarouselItem.propTypes = {
  //interval: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  itemTittle: PropTypes.string.isRequired,
  itemDescription: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};




export default CarouselItem;

