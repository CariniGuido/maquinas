import { useEffect } from "react"
import { useState } from "react"

import { useParams } from 'react-router-dom'
import '../../assets/styles/item.css'
import ItemDetail from "../ItemDetail/ItemDetail"
import { HashLoader } from 'react-spinners'
import { db } from "../../firebase/config"
import { doc, getDoc } from "firebase/firestore"

export const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(true)
    const { itemId } = useParams()


    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, 'productos', itemId)
        

        getDoc(docRef)

            .then((doc) => {

                setItem({ id: doc.id, ...doc.data() })
            })
            
            .finally(() => {
                setLoading(false)

            })

             
    }, [itemId, setLoading])
    
    return (

        <div>

            {loading ? <HashLoader className="spinner" />
                :
                <ItemDetail Item={item} />}

        </div>
    )
}