import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [tours,setTour] = useState([])
  const [loading, setLoding] = useState(true)

  // making the not interested button to remove the object
  const removeTour = (id)=>{
    // if the tour id doent match then it will be in the newtour , if it matches then that is the tour object we are removing
    const newTour = tours.filter((tour)=>tour.id !== id)
    setTour(newTour)
  }

  // so that it returns loading when true 
  const fetchTours = async() =>{
    setLoding(true)
    try{
      const response = await fetch(url)
      const tours = await response.json()
      setLoding(false)
      setTour(tours)
    } catch (error){
      setLoding(false)
      console.log(error)
    }
  }
  useEffect(()=>{
    fetchTours()
  },[])
  if(loading){
    return <main>
      <Loading/>
    </main>
  }
  // condition for refreshing the objects after they have been removed
  if(tours.length === 0){
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <div className="underline"></div>
          <button className="btn" onClick={fetchTours}>
            refresh
          </button>
        </div>
      </main>
    );
  }
    return <main>
      <Tours tours = {tours} removeTour={removeTour}/>
    </main>
  
  return <>Tours Project Setup</>;
}




export default App;
