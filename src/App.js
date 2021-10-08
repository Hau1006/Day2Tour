
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'


function App() {
  const [tours, settours] = useState([]);
  const [loading, setloading] = useState(true); //loading
  // remove item tour 
  const removeTour = (id) => {
    const newTours = tours.filter((tour)=> tour.id !== id) 
    settours(newTours)
  }
  const getdata = async () => { 
    setloading(true)
    try {
      const rest = await axios.get('https://course-api.com/react-tours-project');
      if(rest.status === 200){ // check success
        // console.log(rest.data);
        setloading(false)
        settours(rest.data);
      }
      
    } catch (error) {
      setloading(false);
      console.log(error);
      
    }
  }
  useEffect(() => {
    getdata();
  }, [])
  if(loading){
    return(
      <main>
        <Loading/>
      </main>
    )
  }
  if( tours.length === 0 ) {
    return (
      <main>
        <div className="title">
          <h2>No tours Left</h2>
          <button className="btn" onClick={()=>getdata()}>
            refresh
          </button>
        </div>
      </main>
    )
  }
  
 
  return (
    <>
      <main>
        <Tours tours={tours} removeTour={removeTour} />
      </main>

    </>
  )
}
export default App
