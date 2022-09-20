import { useEffect, useState } from "react";

import ItemList from "../ItemList/ItemList";

import { HashLoader } from 'react-spinners';
import '../../assets/styles/item.css';
import { useParams } from "react-router-dom";
import { Container } from 'react-bootstrap';

import { collection, getDocs,  query,  where } from "firebase/firestore";
import { db } from "../../firebase/config";

const ItemListContainer = () => {
    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([])

    const {categoriaId } = useParams()




   
        
   

    useEffect(() => {
        setLoading(true)
        const productosRef = collection(db, 'productos')
        const q = categoriaId 
                    ? query(productosRef, where('categoria', '==', categoriaId) )
                    : productosRef
        getDocs(q)
            .then((resp) => {
                const productosDB = resp.docs.map( (doc) => ({id: doc.id, ...doc.data()}) )
                setProductos(productosDB)
            })
            .finally(() => {
                setLoading(false)
            })
    
       
        
      }, [categoriaId, setLoading, ])
    


    return (
        loading ? <HashLoader className="spinner" />

            :
            <Container className=" Container my-5">
            <div className="listas">


                <div className="items, mx-1">

                    <ItemList productos={productos} />
                </div>
            </div>

           </Container>
    )
}

export default ItemListContainer

