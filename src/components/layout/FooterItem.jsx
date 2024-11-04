import PropTypes from "prop-types";


function FooterItem({ image, imageUrl }) {
  return (
    
      <a href={imageUrl} target="_blank"><i className={image}></i></a>
    
  )
}


FooterItem.propTypes = {
  image: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};


export default FooterItem;