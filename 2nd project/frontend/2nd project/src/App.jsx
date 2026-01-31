import { useEffect, useState } from 'react'
import './App.css'
import aixos from 'axios'

function App() {
  const [joke, setjokes] = useState([])

  useEffect(() => {
    aixos.get('/api/jokes')
      .then((res) => {
        setjokes(res.data) 
      })
      .catch((err) => {
        console.log(err)
      })
  })

  return (
    <>
      <p>jokes:{joke.length}</p>

      {
        joke.map((joke) => (
          <div key={joke.id}>

            <h3>{joke.name}</h3>
          </div>
        ))
      }
    </>
  )
}

export default App
