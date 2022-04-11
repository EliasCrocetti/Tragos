import axios from 'axios';
import { useState , useEffect} from 'react';
import {serverUrl} from '../../constants/filterapi'
import './conexionApi.css'; 

function Api() {

    const [loading, setLoading] = useState(false)
    const [DrinksData, setDrinksData] = useState([])
    const [nombreTrago, setnombreTrago] = useState([])

    
    const handleChange = (event) => {
        console.log('is changing')
        setnombreTrago(event.target.value)
      }
  
    const getDrink = async () => {
        setLoading(true)
        const response = await axios.get(serverUrl+nombreTrago)
        // drinks podria estar en null.
        //chinar
        setDrinksData(response.data.drinks)
        console.log('respuesta del servidor: DrinksData',  response)
        setLoading(false)
                
      }
      
    useEffect(() => {
        getDrink()
    }, [])

    return (
            <div>
                    <div className='fondo text-center'>
                        <input  className="placeholder-wave ajustarInput" placeholder="Escriba nombre del trago..." onChange={handleChange}/>
                        &nbsp;
                        <button type="button" className=" ajustarBoton" onClick={getDrink}> {
                                    loading ? (
                                    <div className="spinner-border" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                    ) : (
                                    <span>
                                        Buscar Trago
                                    </span>
                                    )
                                }</button>
                    </div>
                    
                    <div className='fondo text-center'>
                         {DrinksData.map(drink => {
                                            return (
                                                
                                            <div  className='ordernarDiv'>

                                            <span>
                                                <img  src={drink.strDrinkThumb} height='300px;'></img>
                                                <p>{drink.strDrink}</p>
                                                <details>
                                                <summary>Instrucciones en ingles:</summary>
                                                <p>{drink.strInstructions}</p>
                                                </details>

                                            </span>
                                            </div>)
                                        })}
                                   
                                
                        </div>
                        </div>
    );


}
  

export default Api;
  