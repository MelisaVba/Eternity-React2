import PropTypes from 'prop-types';
import FooterItem from "./FooterItem";

const Footer = ({ title, socials = [] }) => {
  return (
    <footer>
      <div>
        <h3 className="footer">
          {title }
        </h3>


        <div className="social-container">
        {socials.map((social, index) => (
          <FooterItem
            key={index}
            image={social.image}
            imageUrl={social.imageUrl}/>
        ))}
        </div>
        </div>
    </footer>      
  );
};


Footer.propTypes = {
  title: PropTypes.string.isRequired,
  socials: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default Footer;