import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTractor } from '@fortawesome/free-solid-svg-icons'
import { IconoCarrito } from './carrito';
import { Link } from 'react-router-dom';
import '../assets/styles/item.css';


export const Navegador = () => {

  return (


    <section>


      <Navbar bg="dark" variant="dark">
        <Container>
 
          <Navbar.Brand href="/"> <FontAwesomeIcon icon={faTractor} /> </Navbar.Brand>
          <Navbar.Brand href="/">AGRONLINE</Navbar.Brand>
          <Nav className="me-auto">
           
            <Link className="btn btn-dark" to="/">
                    Home
                </Link>
                <Link className="btn btn-dark" to="/productos/Tractores">
                    Tractores
                </Link>
                <Link className="btn btn-dark" to="/productos/Cosechadoras">
                    Cosechadoras
                </Link>
                <Link className="btn btn-dark" to="/productos/Sembradoras">
                    Sembradoras
                </Link>
          
           


          </Nav>
          <Navbar.Brand href="#home"> <IconoCarrito />   </Navbar.Brand>
        </Container>
      </Navbar>





    </section>

  )



}

export default Navegador
