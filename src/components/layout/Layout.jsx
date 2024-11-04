import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';
import logo from '../../../public/img/logoRobots.png'; 
import { navLinks } from '../../data';
import { networks } from '../../data';

const Layout = ({ children }) => {
  return (
    <>
      <Header
        imageSrc={logo} 
        brandUrl="#"
        imageAlt="Logo Eternity"
        navLinks={navLinks} 
      />
      <main>{children}</main>
      <Footer 
        title="Privacidad | Legal | Actualizar el consentimiento de cookies | No vender ni compartir información | © Eternity LM Derechos reservados." 
        socials={networks} 
      />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

