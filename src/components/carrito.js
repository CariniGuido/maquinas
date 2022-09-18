import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import './../assets/styles/item.css'
import { useContext } from "react";

import { CartContext } from "./CartContext/CartContext";
export const IconoCarrito = () => {
    
    const {cartQuantity} = useContext (CartContext)
    return (

<Link to="/cart">
        < FontAwesomeIcon className="icono"  icon={faShoppingCart}  />


   <span className="btn btn-dark mx-2">{cartQuantity()}</span>

        </Link>
    )
}

