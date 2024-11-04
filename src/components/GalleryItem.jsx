import PropTypes from 'prop-types';


function GalleryItem({imageSrc}) {
  return (
    <article>
      <img src={imageSrc} alt="" />
    </article>
  )
}

GalleryItem.propTypes = {
  
  imageSrc: PropTypes.string.isRequired,
}


export default GalleryItem;
