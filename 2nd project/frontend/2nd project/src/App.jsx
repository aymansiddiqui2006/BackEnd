import { useEffect, useState } from 'react'
import './App.css'
import aixos from 'axios'

function App() {
  const [joke, setjokes] = useState([])

  useEffect(() => {
    aixos.get('http://localhost:3000/jokes')
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
        joke.map((joke) => {
          <div><h3>{joke.name}</h3>
            <p key={joke.id}></p>
          </div>
        })
      }
    </>
  )
}

export default App
