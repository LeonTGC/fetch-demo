import { useEffect, useState } from "react"

const App = () => {

  const [data, setData] = useState([])
  const [error, setError] = useState(null)

  const fetchHandler = async () => {
    
    try {
      // let response = await fetch(
      //   "https://api.nasa.gov/planetary/apod?api_key="
      //   + process.env.REACT_APP_API_KEY
        
      // )
      let response = await fetch('https://meowfacts.herokuapp.com/')
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      let data = await response.json()

      setData(data)
    } catch (err) {
      setError('could not fetch data')
      console.log(err.message)
    }

  }

  useEffect(() => {
    fetchHandler()
    console.log(data)
  }, [])


if(!data.data){
  return <p>loading...</p>
}
  return (
    <div>
      <h1>hello</h1>
      {/* <img src={data.image} /> */}
      <p>{data.data[0]}</p>
      <button onClick={fetchHandler}>fetch</button>
    </div>
  )
}

export default App