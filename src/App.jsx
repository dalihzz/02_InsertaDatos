const persona ={ 
 nombre : 'Dalia Itzel Antonio Hernandez',
 edad : '22',
 profesion: 'Universitario',
 pasatiempos: ['Hacer ejercicio', 'Salir de paseo', 'Estar con mis mascotas'],
 lugarnacimiento: 'Tuxtepec, Oaxaca',
 cumpleaños: '12 de Octubre',
 
}

function App() {
  
  return (
    <div>
      <h1>Información personal</h1>
      <hr />
    <ul>
      <li>Nombre completo: {persona.nombre}</li>
      <li>Edad: {persona.edad}</li>
      <li>Profesión: {persona.profesion}</li>
      <li>Pasatiempos: </li>
        <ul>
          {
            persona.pasatiempos.map((pasatiempos) =>{
              return <li key={pasatiempos}>{pasatiempos}</li>
            })
          }
        </ul>
      <li>Lugar de nacimiento: {persona.lugarnacimiento}</li>
      <li>Cumpleaños: {persona.cumpleaños}</li>
      </ul> 
    </div>
  )
}

export default App
