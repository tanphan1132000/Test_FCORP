import { useState } from 'react'

const Books = ({ title, author, publishedDate, description, price }) => {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>{title}</h1>
      <h2>{author}</h2>
      <h2>{publishedDate}</h2>
      <p>{description}</p>
      <p>{price}$</p>
    </>
  )
}

export default Books;
