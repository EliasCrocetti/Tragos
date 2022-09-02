import './barrabusqueda.css';
import { Checkbox } from 'pretty-checkbox-react';

function BarraCheckBox(props) {

    const { children } = props

    console.log(props, "BarraCheckBox")
    
    return (
        <div>
            <Checkbox title='barra de busqueda'  value="" {...props}>{children}</Checkbox>;
        </div>
      );
}
  
export default BarraCheckBox;