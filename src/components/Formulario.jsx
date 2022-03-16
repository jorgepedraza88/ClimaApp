import {useState} from 'react'
import useClima from "../hooks/useClima"


const Formulario = () => {
    const [alerta, setAlerta] = useState('')
    const { busqueda, datosBusqueda, consultarClima } = useClima()

    const {ciudad, pais} = busqueda

    const handleSubmit = (e) => {
        e.preventDefault()
        
        //* Validación - Sí la pasamos, ejecuta consultarClima() más abajo
        if(Object.values(busqueda).includes('')){
            setAlerta('Todos los campos son obligatorios')
            return
        }

        consultarClima(busqueda)
    }

  return (
    <div className="contenedor">
        {alerta && <p>{alerta}</p>}
        <form
            onSubmit={handleSubmit}
        >
            <div className="campo">
                <label htmlFor='ciudad'>Ciudad</label>
                <input 
                    onChange={datosBusqueda}
                    value={ciudad}
                    type='text' id='ciudad' name="ciudad"/>
            </div>
            <div className="campo">
                <label htmlFor='pais'>País</label>
                <select
                    id='pais'
                    name='pais'
                    onChange={datosBusqueda}
                    value={pais}
                >
                    <option value="">Selecciona país</option>
                    <option value="US">Estados unidos</option>
                    <option value="ES">España</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    
                </select>
            </div>
            <input type='submit' value="Consultar Clima"/>
        </form>
    </div>
  )
}

export default Formulario