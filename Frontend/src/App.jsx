import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(1)
  
  const [prodlst, setProdlst] = useState([])
  const [formData, setFormData] = useState({
    title: 'Iphone',
    desc: 'a',
    price: 100,
    _id:count
  })
const setProdToDelete= (prod)=>{

  alert("Are you sure to delete this product?")
  axios({
  
    method: 'delete',
  
    url: `/ads/delete/${prod._id}`,
  
    
  
  })
  
    .then(response => console.log(response.data))
  
    .catch(error => console.log(error));
}
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()



    console.log(formData)
  setCount(count+1)
    
  axios('/ads/post', {

    method: 'post',



    data: {

      "title": formData.title,
      "desc": formData.desc,
      "price": formData.price,
      "_id": prodlst[prodlst.length-1]?._id+1||1


    }

  })

    .then(response => console.log(response.data))

    .catch(error => console.log(error));
  console.log(formData)
}
// console.log(prodlst[prodlst.length-1])
useEffect(() => {
  axios({
  
    method: 'get',
  
    url: '/ads',
  
    
  
  })
  
    .then(response => setProdlst(response.data?.data))
  
    .catch(error => console.log(error));

  
}, [handleSubmit])


return (
  <>
    <h1>CH aur fA</h1>
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />

      <label htmlFor="description">Description:</label>
      <textarea
        id="desc"
        name="desc"
        value={formData.description}
        onChange={handleChange}
      />

      <label htmlFor="price">Price:</label>
      <input
        type="number"
        id="price"
        name="price"
        value={formData.price}
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
    </form>
    {
      prodlst?.map(

        prod => (
          <div key={prod._id}>
            <h1 onClick={() => {
              axios({

                method: 'put',

                url: `/ads/edit/${prod._id}`,  // URL to hit

                data: {

                  "title": formData.title!=null?formData.title:prod.title,
      "desc": formData.desc!=null?formData.title:prod.desc,
      "price": formData.price!=null?formData.price:prod.price,

                }

              })

                .then(response => console.log(response.data))

                .catch(error => console.log(error));
            }}>{prod.title}</h1>
            <button
            onClick={()=>{
              setProdToDelete(prod);
              
            }}
            >Delete Ad</button>
          </div>
        ))
    }
  </>
)
}

export default App