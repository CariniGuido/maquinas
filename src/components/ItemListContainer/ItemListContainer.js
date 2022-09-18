import { useEffect, useState } from "react";

import ItemList from "../ItemList/ItemList";

import { HashLoader } from 'react-spinners';
import '../../assets/styles/item.css';
import { useParams } from "react-router-dom";


import { collection, getDocs, getFirestore, Query,  where } from "firebase/firestore";
import { db } from "../../firebase/config";

const ItemListContainer = () => {
    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([])

    const { categoriaId } = useParams()




    useEffect( () => {
        
   
        const db = getFirestore()
    
        const productosRef = collection(db, 'items')
    
        if (categoriaId) { //Hacemos el if para comprobar si hay una categoria (la tomamos del useParams)
    
          const QueryCollectionFiltered = Query(QueryCollection, where('categoria', '==', categoriaId)) //Guardamos el filtrado en una constante
    
          getDocs(QueryCollection) //Traemos los docs de la query filtrada
    
          .then(response => setProductos(response.docs.map(producto => { //Seteamos el state
    
            return {id: producto.id,
    
              ...producto.data()
    
            }
    
          }))
    
          )
    
          .catch(err => console.log(err))
    
        } else {
    
          getDocs(QueryCollection)
    
          .then(response => setProductos(response.docs.map(film => { //Como ves aca repetimos codigo, podrias optimizar esto haciendo una funcion
    
                        return {id: producto.id,
    
                          ...producto.data()
    
                        }
    
          }))
    
          )
    
          .catch(err => console.log(err))
          
        }
 
        
      }, [categoriaId, setLoading, ])
    


    return (
        loading ? <HashLoader className="spinner" />

            :
            <div className="listas">


                <div className="items">

                    <ItemList productos={productos} />
                </div>
            </div>


    )
}

export default ItemListContainer

