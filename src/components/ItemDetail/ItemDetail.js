

import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Contador } from '../contador';
import ListGroup from 'react-bootstrap/ListGroup';

import { Link } from 'react-router-dom';

import { useContext, useState } from 'react';
import { CartContext } from '../CartContext/CartContext';

const ItemDetail = ({ Item }) => {

  const {  addToCart, IsInCart } = useContext(CartContext)
  const [cantidad, setCantidad] = useState(1)
  const handleAgregar = () => {
    
    const agregarAlCarro = {
      id: Item.id,
      nombre: Item.nombre,
      precio: Item.precio,
      cantidad,
      imagen: Item.imagen
    }



     
    addToCart(agregarAlCarro)
    console.log (IsInCart)

  }
  return (
    <container className=" container my-5">
      <div className='container my-5'>



        <Card style={{ width: '18rem' }}>

          <Card.Img variant="top" src={Item.imagen} />
          <Card.Body>
            <Card.Title>{Item.nombre}</Card.Title>
            <Card.Text>

              <small className='StockTarjeta'>Stock disp: {Item.stock}</small>
              <p> {Item.precio}</p>
            </Card.Text>



            <small> {Item.descripcion} </small>


          </Card.Body>
        </Card>
        <hr></hr>
        <ListGroup variant="flush">
          <ListGroup.Item>Estado:{Item.estado}</ListGroup.Item>
          <ListGroup.Item>Año:{Item.año}</ListGroup.Item>
        </ListGroup>
        { IsInCart(Item.id) ? 
       
       <Link to="/cart" className="btn btn-dark my-2

       ">Finalizar Compra</Link>
          
          :<Contador
            stock={Item.stock}
            counter={cantidad}
            setCounter={setCantidad}
            handleAgregar={handleAgregar} />
        }
       
      </div>
     
    </container>



  )
}


export default ItemDetail