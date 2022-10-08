import { useState, useContext } from "react"
import { Navigate } from "react-router-dom"
import {  useCartContext } from "../CartContext/CartContext";
import { addDoc, collection, getDocs, writeBatch, query, where, documentId } from 'firebase/firestore'
import { db } from "../../firebase/config"
import { useForm } from "../UseForm/useForm"
import { LoginContext } from "../LoginContext/LoginContext"
;
import { useNavigate } from "react-router-dom";
import LoginScreen from "../LoginScreen/LoginScreen";
import Swal from "sweetalert2";

const Checkout = () => {

    const { cart, precioFinal, terminarCompra } = useCartContext()
    const { user} = useContext(LoginContext)
    const navigate = useNavigate() 
    const [orderId, setOrderId] = useState(null)

    const { values, handleInputChange } = useForm({
        nombre: '',
        email: '',
        direccion: '',
    })

    const handleSubmit = async (e) => {
        e.preventDefault()

        const orden = {
            comprador: values,
            items: cart,
            total: precioFinal()
        }
        

        if (values.nombre.length < 2) {
            alert("Nombre incorrecto")
            return
        }

        if (values.email.length < 2) { 
            alert("Email incorrecto")
            return 
        }

        const batch = writeBatch(db)
        const ordenesRef = collection(db, 'ordenes')
        const productosRef = collection(db, 'productos')
    
        const q = query(productosRef, where(documentId(), 'in', cart.map(item => item.id)))

        const productos = await getDocs(q)
       
        const outOfStock = []
            
        productos.docs.forEach((doc) => {
            const itemInCart = cart.find(item => item.id === doc.id)

            if (doc.data().stock >= itemInCart.cantidad) {
                batch.update(doc.ref, {
                    stock: doc.data().stock - itemInCart.cantidad
                })
            } else {
                outOfStock.push(itemInCart)
            }
        })

        if (outOfStock.length === 0) {
            batch.commit()
                .then(() => {
                    addDoc(ordenesRef, orden)
                        .then((doc) => {
                            
                            // terminarCompraConSwal(doc.id)
                            setOrderId(doc.id)
                            terminarCompra()
                        })
                })
        } else {
            
           Swal.fire ({

            text: `Hay items sin stock : ${outOfStock.map((item) => item.nombre)}`,
            icon: "warning",
            showCancelButton: false,
            confirmButtonColor: "#d33",
            confirmButtonText: "OK!",
             
        })
        navigate ("/cart") 
        }
        
    }

    if (orderId) {
        return (
            <div className="container my-5">
                <h2>Compra exitosa!</h2>
                <hr/>
                <p>Tu número de orden es: <strong>{orderId}</strong></p>
            </div>
        )
    }

    if (cart.length === 0) {
        return <Navigate to="/"/>
    }
   if (!user.logged) {
       return <LoginScreen/>
   }
    return (
        <div className="container my-5">
            <h2>Checkout</h2>
            <hr/>

            <form onSubmit={handleSubmit}>
                <input 
                    name="nombre"
                    onChange={handleInputChange}
                    value={values.nombre}
                    type={'text'} 
                    className="my-3 form-control" 
                    placeholder="Tu nombre"
                />

                <input 
                    name="email"
                    onChange={handleInputChange}
                    value={values.email}
                    type={'email'} 
                    className="my-3 form-control" 
                    placeholder="Email"
                />

                <input 
                    name="direccion"
                    onChange={handleInputChange}
                    value={values.direccion}
                    type={'text'} 
                    className="my-3 form-control" 
                    placeholder="Dirección"
                />

                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>

        </div>
    )
}

export default Checkout