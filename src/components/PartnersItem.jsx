import PropTypes from "prop-types";


function PartnersItem({ image, alt, imageUrl }) {
  return (
    <div className="partner-item">
      <a href={imageUrl} target="_blank"><img src={image} alt={alt} /></a>
    </div>
  )
}


PartnersItem.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};


export default PartnersItem;

