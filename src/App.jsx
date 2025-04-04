import { useEffect, useState } from 'react'
import Card from './components/Card.jsx'
import RandomColor from './components/Colors.jsx'
import './App.css'



function App() {
  const arrClr = [
    {color: 'red',
      isLock: 'unLock'
    },
    {color: 'orange',
      isLock: 'unLock'
    },
    {color: 'green',
      isLock: 'unLock'
    },
    {color: 'blue',
      isLock: 'unLock'
    },
    {color: 'purple',
      isLock: 'unLock'
    },
]


const initialColors = arrClr.map(item => ({
  color: item.isLock === 'unLock' ? RandomColor() : item.color,
  isLock: item.isLock
}))
const [currentObjColor, setCurrentObjColor] = useState(initialColors)

 

  return (
    <>
    <main>
      <section>
      <ul className="crds">
          {
         currentObjColor.map((i, index, arr)=> (

            <li className='list' key={index}>
              <Card color={i.color} isLock={i.isLock} obj={arr} newState={setCurrentObjColor} index={index} ></Card>
            </li>
          ))}
      </ul> 

      </section>
    </main>
    </>
  )
}

export default App
