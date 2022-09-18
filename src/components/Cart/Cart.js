import { useContext } from "react"
import { Button } from "react-bootstrap"
import { CartContext } from "../CartContext/CartContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Card from 'react-bootstrap/Card';
import '../../assets/styles/item.css'

import {faTrash} from   '@fortawesome/free-solid-svg-icons'
export const Cart = () => {

    const { cart, precioFinal , vaciarCarrito, removeItem    } = useContext(CartContext)


    return (
       
       <div className="container my-5">

            <h2>

                Mi Carrito
            </h2>

            <hr></hr>
            
            {cart.map((Item) => (

                <div key={Item.id}>
                    <h3>{Item.nombre}</h3>
                    <p>{Item.precio}</p>
                    <p>{Item.cantidad}</p>
                    <Card.Img className="imagenEnCarro" variant="top" src={Item.imagen} />
                    <Button onClick= {()=> removeItem ( Item.id) } className="btn btn-danger mx-2">   < FontAwesomeIcon icon={faTrash} />  </Button>
                </div>
            ))}

            <h4> Total: $ {precioFinal ()} </h4>
            <Button onClick={vaciarCarrito} className="btn btn-dark"> Vaciar Carrito</Button>
           
        </div>

    )
}