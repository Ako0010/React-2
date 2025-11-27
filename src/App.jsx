import Card from './components/Card'
import { useState, useEffect } from 'react'
import Loading from './components/Loading'

const App = () => {
  const [loading, setLoading] = useState(false)
  const [searchterm, setSearchterm] = useState("")
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    try {
      setLoading(true)
      const res = await fetch(searchterm.length >= 3 ? `https://ilkinibadov.com/api/v1/search?searchterm=${searchterm}` : `https://ilkinibadov.com/api/v1/products` )
      if (res.ok){

        const data = await res.json()
        setProducts(searchterm.length >=3 ? data.content : data.products)
      }

    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getProducts()
  }, [searchterm])

  return (
    <div className="w-full min-h-screen flex flex-col items-center p-10 gap-10">
      <div className="w-full flex justify-center">
        <input
          type="text"
          className="border px-4 py-3 w-1/2 rounded-lg text-lg shadow-md"
          placeholder="Search product..."
          value={searchterm}
          onChange={(e) => setSearchterm(e.target.value)}
        />
      </div>

      {
        loading ? <Loading/> : <div className='w-full min-h-screen h-fit grid grid-cols-4 gap-5 p-5'>
          {products?.length ? products.map(product => <Card key={product._id} product={product}/>) : "No Products Found"}</div>
      }
   </div>  
  )
}

export default App
