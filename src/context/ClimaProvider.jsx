import { useState, createContext } from 'react'
import axios from 'axios'

const ClimaContext = createContext()

const ClimaProvider = ({children}) => {



    const [busqueda, setBusqueda] = useState({
        ciudad: '',
        pais: '',
    })
    const [resultado, setResultado] = useState({})
    const [noResultado, setNoResultado] = useState('')

    const datosBusqueda = e => {
        setBusqueda({
            ...busqueda, [e.target.name] : e.target.value
        })
    }

    // Api
    const consultarClima = async (datos) => {
        setNoResultado('')
        try {
            const {ciudad, pais} = datos

            const appId = import.meta.env.VITE_API_KEY

            const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${appId}`

            const {data} = await axios(url)
            const { lat, lon } = data[0]

            const urlClima = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`

            const {data: clima} = await axios(urlClima)
            setResultado(clima)
       
        } catch (error) {
            setNoResultado('No hay resultados')
        }
    }

    return (
        <ClimaContext.Provider
            value={{
                busqueda,
                datosBusqueda,
                consultarClima,
                resultado,
                noResultado
            }}
        >
            {children}
        </ClimaContext.Provider>
    ) 
}

export {
    ClimaProvider
}
export default ClimaContext