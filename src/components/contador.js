
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';




export const Contador = ({ stock , counter, setCounter, handleAgregar}) => {

    

    const handleAdd = () => {
        if (counter < stock) {
            setCounter(counter + 1)


        }


    }




    const handleSubstract = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }

    }

    return (

        <div > 
            

            <hr />

            <Button onClick={handleSubstract} className="btn btn-outline-dark"> - </Button>
            <Badge className="mx-3"> {counter} </Badge>
            <Button onClick={handleAdd} className="btn btn-dark"> + </Button>
            <br></br>
            <button onClick={handleAgregar} ClassName="btn btn-success my-2" disabled= {stock<1 } > Añadir al carrito</button>








        </div>



    )


}







