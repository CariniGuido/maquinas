import Item from "../Item/Item"



const ItemList = ({ productos = [] }) => { 


    return (
        <div className="Productos">

            <h2> Productos</h2>

            <hr />
            
           <container className="row">
            {productos.map((prod) =>

                <Item producto={prod} key={prod.id} />

            )}
            </container>
        </div>





    )
}

export default ItemList

