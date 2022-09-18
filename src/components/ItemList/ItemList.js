import Item from "../Item/Item"

import { Container } from 'react-bootstrap';

const ItemList = ({ productos = [] }) => { 


    return (
        <div className="Productos">

            <h2> Productos</h2>

            <hr />
            
           <Container className="row">
            {productos.map((prod) =>

                <Item producto={prod} key={prod.id} />

            )}
            </Container>
        </div>





    )
}

export default ItemList

