import { useEffect, useState } from 'react'
import './App.css'
import Header from './Component/Header/Header'
import HeroSec from './Component/HeroSec/HeroSec'


export const PORT = 'http://localhost:8000'
function App() {

  const [data, setdata] = useState('')
  const [search, setSearch] = useState()
  const [find, setfind] = useState()
  const [error, seterror] = useState('unable to fetch Data')

  // console.log(search)


  useEffect(() => {
    try {

      const fetch_data = async () => {
        const url = await fetch(PORT)
        const json = await url.json()
        // console.log(json[1].name)
        setdata(json)
        // setSearch(json)
        setfind(json)
        // console.log(data)


      }
      fetch_data()
    } catch {
      console.log(error)
    }
  }, [])


  const searchFood = (e) => {
    setSearch(e.target.value)
    const filtered = data?.filter((price) => {
      return price.name.toLowerCase().includes(search.toLowerCase())
    })
    
    {console.log(filtered)}

    setfind(filtered)
  }

  
  return (
    <>
      <div className='container'>

        <Header find={find} setfind={setfind} searchFood={searchFood} search={search} setSearch={setSearch} />
        <HeroSec data={find} setdata={setfind} />
      </div>
    </>
  )
}

export default App
