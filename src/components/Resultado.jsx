import useClima from "../hooks/useClima"

const Resultado = () => {

    const {resultado, noResultado} = useClima()

    const {name, main} = resultado

    // Grados Kelvin
    const Kelvin = 273.15

  return (
    <>
    {noResultado === '' ?  <div className="contenedor clima">
        <h2>El clima de {name} es:</h2>
        <p>{parseInt(main.temp - Kelvin)} <span>&#x2103;</span></p>
        <div className="temp_min_max">
            <p>Mínima: {parseInt(main.temp_min - Kelvin)} <span>&#x2103;</span></p>
            <p>Máxima: {parseInt(main.temp_max - Kelvin)} <span>&#x2103;</span></p>
        </div>
    </div> : noResultado}
    </>
   
  )
}

export default Resultado