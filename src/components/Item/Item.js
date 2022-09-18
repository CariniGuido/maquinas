
 import '../../assets/styles/item.css'

import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';


const Item = ({producto}) => {


const  {imagen, nombre, precio , stock, id} = producto

    return (
       <container className= "col-4" >
        <div className='container d-flex h-100'>
           
            <Card style={{ width: '18rem' }}>
        
      <Card.Img variant="top" src= {imagen} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>
        <small className='StockTarjeta'>Stock disp: {stock}</small>
          
        </Card.Text>
        <Link className='links1'  to= {`/item/${id}`} variant="dark"> Ver Mas</Link>
        <p>{precio}</p>
      </Card.Body>
    </Card>

        </div>

</container>



    )

} 

export default Item 