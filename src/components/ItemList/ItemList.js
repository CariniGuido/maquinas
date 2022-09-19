import Item from "../Item/Item"

import { Container } from 'react-bootstrap';

const ItemList = ({ productos = [] }) => { 


    return (
        <div className="Productos , Container my-5"> 

            <h2> Productos</h2>

            <hr />
              
           <Container className="row">
            {productos.map((prod, index) =>

                <Item producto={prod} key={index} />

            )}
            </Container>
        </div>





    )
}

export default ItemList

