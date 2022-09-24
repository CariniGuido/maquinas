import { createContext, useContext } from "react";

import { useState } from "react";
import Swal from "sweetalert2";
export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const addToCart = (Item) => {

        setCart([...cart, Item])
    }
 
   
  const removeItem = (id) => {
   
        Swal.fire({
            title: 'Desea eliminar el producto del carrito?',
            
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'si, estoy seguro!'
          }).then((result) => {
            if (result.isConfirmed) {
                setCart (cart.filter((Item) => Item.id !== id  ))
              
            }
          })
       

    }

    const IsInCart = (id) => {

        return cart.some((Item) => Item.id === id)
    }

    const cartQuantity = () => {
        return cart.reduce((acc, Item) => acc + Item.cantidad, 0)
    }

    const precioFinal = () => {

        return cart.reduce((acc, Item) => acc + Item.cantidad * Item.precio, 0)
    }

    const vaciarCarrito =() => {

        Swal.fire({
            title: 'Desea vaciar su carrito?',
            text: "No podrás revertir esto.!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'si, estoy seguro!'
          }).then((result) => {
            if (result.isConfirmed) {
                setCart ([])
              
            }
          })

        
    }


    return (
       
        <CartContext.Provider value={{
            cart,
            addToCart,
            IsInCart,
            cartQuantity,
            precioFinal,
            
            vaciarCarrito,
            removeItem,
        }}> 

            {children}
        </CartContext.Provider>
    )


} 

export const useCartContext = () => {

    return useContext (CartContext)
}




