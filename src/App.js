import BigNumber from 'bignumber.js'
import {useState} from "react"
import React from 'react';

function App() { 


  const [inputA, setInputA] = useState("")
  const [inputB, setInputB] = useState("")
  const [inputC, setInputC] = useState("")
  const [inputD, setInputD] = useState("")
  const [inputE, setInputE] = useState("")
  const [inputF, setInputF] = useState("")  
  const [inputG, setInputG] = useState("")
  const [inputH, setInputH] = useState("")
  const [inputI, setInputI] = useState("")
  const [inputJ, setInputJ] = useState("")
  const [inputK, setInputK] = useState("")
 
 
  const aChange = (event) => { 
    setInputA(event.target.value); 
    setInputB(new BigNumber(event.target.value).multipliedBy(10**-3).toFixed()); 
    setInputC(new BigNumber(event.target.value).multipliedBy(10**-6).toFixed());
    setInputD(new BigNumber(event.target.value).multipliedBy(10**-9).toFixed());
    setInputE(new BigNumber(event.target.value).multipliedBy(10**-12).toFixed());
    setInputF(new BigNumber(event.target.value).multipliedBy(10**-15).toFixed());
    setInputG(new BigNumber(event.target.value).multipliedBy(10**-18).toFixed());
    setInputH(new BigNumber(event.target.value).multipliedBy(10**-21).toFixed());
    setInputI(new BigNumber(event.target.value).multipliedBy(10**-24).toFixed());
    setInputJ(new BigNumber(event.target.value).multipliedBy(10**-27).toFixed());
    setInputK(new BigNumber(event.target.value).multipliedBy(10**-30).toFixed());
    
  }
  
  const bChange = (event) => { 
    setInputB(event.target.value)
    setInputA(new BigNumber(event.target.value).multipliedBy(10**3).toFixed()); 
    setInputC(new BigNumber(event.target.value).multipliedBy(10**-3).toFixed());
    setInputD(new BigNumber(event.target.value).multipliedBy(10**-6).toFixed());
    setInputE(new BigNumber(event.target.value).multipliedBy(10**-9).toFixed());
    setInputF(new BigNumber(event.target.value).multipliedBy(10**-12).toFixed());
    setInputG(new BigNumber(event.target.value).multipliedBy(10**-15).toFixed());
    setInputH(new BigNumber(event.target.value).multipliedBy(10**-18).toFixed());
    setInputI(new BigNumber(event.target.value).multipliedBy(10**-21).toFixed());
    setInputJ(new BigNumber(event.target.value).multipliedBy(10**-24).toFixed());
    setInputK(new BigNumber(event.target.value).multipliedBy(10**-27).toFixed());
  }
  const cChange = (event) => { 
    setInputC(event.target.value)
    setInputA(new BigNumber(event.target.value).multipliedBy(10**6).toFixed()); 
    setInputB(new BigNumber(event.target.value).multipliedBy(10**3).toFixed());
    setInputD(new BigNumber(event.target.value).multipliedBy(10**-3).toFixed());
    setInputE(new BigNumber(event.target.value).multipliedBy(10**-6).toFixed());
    setInputF(new BigNumber(event.target.value).multipliedBy(10**-9).toFixed());
    setInputG(new BigNumber(event.target.value).multipliedBy(10**-12).toFixed());
    setInputH(new BigNumber(event.target.value).multipliedBy(10**-15).toFixed());
    setInputI(new BigNumber(event.target.value).multipliedBy(10**-18).toFixed());
    setInputJ(new BigNumber(event.target.value).multipliedBy(10**-21).toFixed());
    setInputK(new BigNumber(event.target.value).multipliedBy(10**-24).toFixed());
  }
  const dChange = (event) => { 
    setInputD(event.target.value)
    setInputA(new BigNumber(event.target.value).multipliedBy(10**9).toFixed()); 
    setInputB(new BigNumber(event.target.value).multipliedBy(10**6).toFixed());
    setInputC(new BigNumber(event.target.value).multipliedBy(10**3).toFixed());
    setInputE(new BigNumber(event.target.value).multipliedBy(10**-3).toFixed());
    setInputF(new BigNumber(event.target.value).multipliedBy(10**-6).toFixed());
    setInputG(new BigNumber(event.target.value).multipliedBy(10**-9).toFixed());
    setInputH(new BigNumber(event.target.value).multipliedBy(10**-12).toFixed());
    setInputI(new BigNumber(event.target.value).multipliedBy(10**-15).toFixed());
    setInputJ(new BigNumber(event.target.value).multipliedBy(10**-18).toFixed());
    setInputK(new BigNumber(event.target.value).multipliedBy(10**-21).toFixed());
  }
  const eChange = (event) => { 
    setInputE(event.target.value)
    setInputA(new BigNumber(event.target.value).multipliedBy(10**12).toFixed()); 
    setInputB(new BigNumber(event.target.value).multipliedBy(10**9).toFixed());
    setInputC(new BigNumber(event.target.value).multipliedBy(10**6).toFixed());
    setInputD(new BigNumber(event.target.value).multipliedBy(10**3).toFixed());
    setInputF(new BigNumber(event.target.value).multipliedBy(10**-3).toFixed());
    setInputG(new BigNumber(event.target.value).multipliedBy(10**-6).toFixed());
    setInputH(new BigNumber(event.target.value).multipliedBy(10**-9).toFixed());
    setInputI(new BigNumber(event.target.value).multipliedBy(10**-12).toFixed());
    setInputJ(new BigNumber(event.target.value).multipliedBy(10**-15).toFixed());
    setInputK(new BigNumber(event.target.value).multipliedBy(10**-18).toFixed());
  }
  const fChange = (event) => { 
    setInputF(event.target.value)
    setInputA(new BigNumber(event.target.value).multipliedBy(10**15).toFixed()); 
    setInputB(new BigNumber(event.target.value).multipliedBy(10**12).toFixed());
    setInputC(new BigNumber(event.target.value).multipliedBy(10**9).toFixed());
    setInputD(new BigNumber(event.target.value).multipliedBy(10**6).toFixed());
    setInputE(new BigNumber(event.target.value).multipliedBy(10**3).toFixed());
    setInputG(new BigNumber(event.target.value).multipliedBy(10**-3).toFixed());
    setInputH(new BigNumber(event.target.value).multipliedBy(10**-6).toFixed());
    setInputI(new BigNumber(event.target.value).multipliedBy(10**-9).toFixed());
    setInputJ(new BigNumber(event.target.value).multipliedBy(10**-12).toFixed());
    setInputK(new BigNumber(event.target.value).multipliedBy(10**-15).toFixed());
  }
  const gChange = (event) => { 
    setInputG(event.target.value)
    setInputA(new BigNumber(event.target.value).multipliedBy(10**18).toFixed()); 
    setInputB(new BigNumber(event.target.value).multipliedBy(10**15).toFixed());
    setInputC(new BigNumber(event.target.value).multipliedBy(10**12).toFixed());
    setInputD(new BigNumber(event.target.value).multipliedBy(10**9).toFixed());
    setInputE(new BigNumber(event.target.value).multipliedBy(10**6).toFixed());
    setInputF(new BigNumber(event.target.value).multipliedBy(10**3).toFixed());
    setInputH(new BigNumber(event.target.value).multipliedBy(10**-3).toFixed());
    setInputI(new BigNumber(event.target.value).multipliedBy(10**-6).toFixed());
    setInputJ(new BigNumber(event.target.value).multipliedBy(10**-9).toFixed());
    setInputK(new BigNumber(event.target.value).multipliedBy(10**-12).toFixed());
  }
  const hChange = (event) => { 
    setInputH(event.target.value)
    setInputA(new BigNumber(event.target.value).multipliedBy(10**21).toFixed()); 
    setInputB(new BigNumber(event.target.value).multipliedBy(10**18).toFixed());
    setInputC(new BigNumber(event.target.value).multipliedBy(10**15).toFixed());
    setInputD(new BigNumber(event.target.value).multipliedBy(10**12).toFixed());
    setInputE(new BigNumber(event.target.value).multipliedBy(10**9).toFixed());
    setInputF(new BigNumber(event.target.value).multipliedBy(10**6).toFixed());
    setInputG(new BigNumber(event.target.value).multipliedBy(10**3).toFixed());
    setInputI(new BigNumber(event.target.value).multipliedBy(10**-3).toFixed());
    setInputJ(new BigNumber(event.target.value).multipliedBy(10**-6).toFixed());
    setInputK(new BigNumber(event.target.value).multipliedBy(10**-9).toFixed());
  }
  const iChange = (event) => { 
    setInputI(event.target.value)
    setInputA(new BigNumber(event.target.value).multipliedBy(10**24).toFixed()); 
    setInputB(new BigNumber(event.target.value).multipliedBy(10**21).toFixed());
    setInputC(new BigNumber(event.target.value).multipliedBy(10**18).toFixed());
    setInputD(new BigNumber(event.target.value).multipliedBy(10**15).toFixed());
    setInputE(new BigNumber(event.target.value).multipliedBy(10**12).toFixed());
    setInputF(new BigNumber(event.target.value).multipliedBy(10**9).toFixed());
    setInputG(new BigNumber(event.target.value).multipliedBy(10**6).toFixed());
    setInputH(new BigNumber(event.target.value).multipliedBy(10**3).toFixed());
    setInputJ(new BigNumber(event.target.value).multipliedBy(10**-3).toFixed());
    setInputK(new BigNumber(event.target.value).multipliedBy(10**-6).toFixed());
  }
  const jChange = (event) => { 
    setInputJ(event.target.value)
    setInputA(new BigNumber(event.target.value).multipliedBy(10**27).toFixed()); 
    setInputB(new BigNumber(event.target.value).multipliedBy(10**24).toFixed());
    setInputC(new BigNumber(event.target.value).multipliedBy(10**21).toFixed());
    setInputD(new BigNumber(event.target.value).multipliedBy(10**18).toFixed());
    setInputE(new BigNumber(event.target.value).multipliedBy(10**15).toFixed());
    setInputF(new BigNumber(event.target.value).multipliedBy(10**12).toFixed());
    setInputG(new BigNumber(event.target.value).multipliedBy(10**9).toFixed());
    setInputH(new BigNumber(event.target.value).multipliedBy(10**6).toFixed());
    setInputI(new BigNumber(event.target.value).multipliedBy(10**3).toFixed());
    setInputK(new BigNumber(event.target.value).multipliedBy(10**-3).toFixed());
  }
  const kChange = (event) => { 
    setInputK(event.target.value)
    setInputA(new BigNumber(event.target.value).multipliedBy(10**30).toFixed()); 
    setInputB(new BigNumber(event.target.value).multipliedBy(10**27).toFixed());
    setInputC(new BigNumber(event.target.value).multipliedBy(10**24).toFixed());
    setInputD(new BigNumber(event.target.value).multipliedBy(10**21).toFixed());
    setInputE(new BigNumber(event.target.value).multipliedBy(10**18).toFixed());
    setInputF(new BigNumber(event.target.value).multipliedBy(10**15).toFixed());
    setInputG(new BigNumber(event.target.value).multipliedBy(10**12).toFixed());
    setInputH(new BigNumber(event.target.value).multipliedBy(10**9).toFixed());
    setInputI(new BigNumber(event.target.value).multipliedBy(10**6).toFixed());
    setInputJ(new BigNumber(event.target.value).multipliedBy(10**3).toFixed());
  }




  return (
    <div className="container">
      <h1 className='display-4'> Ethereum unit Converter</h1>
      <header className="App-header">

        <p> Wei (factor: 0): <input 
        className= 'form-control'
                  placeholder="Wei"
                  value={inputA}
                  onChange={aChange}
                  type="number" 
                  min = "0" >
                  </input>
                  </p>
        <p> Kwei/ Babbage/ Femtoether (factor: 3): <input
        className= 'form-control' 
                  placeholder="Kwei"
                  value={inputB}
                  onChange={bChange}
                  type="number" 
                  min = "0" >
                  </input>
                  </p>
        <p> Mwei/ Lovelace/ Picoether (factor: 6): <input 
        className= 'form-control'
                  placeholder="Mwei"
                  value={inputC}
                  onChange={cChange}
                  type="number" 
                  min = "0" >
                  </input>
                  </p>         
        <p> Gwei/ Shannon/ Nanoether/ Nano (factor: 9)<input 
        className= 'form-control'
                  placeholder="Gwei"
                  value={inputD}
                  onChange={dChange}
                  type="number"
                  ></input></p>
       <p> Szabo /Microether/ Micro (factor: 12):     <input 
       className= 'form-control'
                  placeholder="Szabo"
                  value={inputE}
                  onChange={eChange}
                  type="number" 
                  min = "0" >
                  </input>
                  </p>
        <p> Finney / Milliether/ Milli (factor: 15): <input 
        className= 'form-control'
                  placeholder="Finney"
                  value={inputF}
                  onChange={fChange}
                  type="number" 
                  min = "0" >
                  </input>
                  </p> 
        <p> Ether (factor: 18 )                      <input 
        className= 'form-control'
                  placeholder="Ether"
                  value={inputG}
                  onChange={gChange}
                  type="number"
                  ></input></p>
        <p> Kether (factor: 21):                     <input 
        className= 'form-control'
                  placeholder="Kether"
                  value={inputH}
                  onChange={hChange}
                  type="number" 
                  min = "0" >
                  </input>
                  </p>
        <p> Mether (factor: 24): <input 
        className= 'form-control'
                  placeholder="Mether"
                  value={inputI}
                  onChange={iChange}
                  type="number" 
                  min = "0" >
                  </input>
                  </p>
        <p> Gether (factor: 27): <input 
        className= 'form-control'
                  placeholder="Gether"
                  value={inputJ}
                  onChange={jChange}
                  type="number" 
                  min = "0" >
                  </input>
                  </p> 
        <p> Tether (factor: 30): <input 
        className= 'form-control'
                  placeholder="Tether"
                  value={inputK}
                  onChange={kChange}
                  type="number" 
                  min = "0" >
                  </input>
                  </p>
              
        <a
          className="App-link"
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
    
  )

}

export default App;