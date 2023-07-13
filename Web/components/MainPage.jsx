import { useEffect, useState } from 'react'
import axios from 'axios'

const MainPage = () => {
  const [data, setData] = useState({})

  useEffect(() => {
    axios.get('localhost:3000/books')
    .then(res => {
      const d = res.data
      console.log(data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  return (
    <>
      <h1>Books here</h1>
    </>
  )
}

export default MainPage;
