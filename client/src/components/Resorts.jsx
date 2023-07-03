import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Resorts = () => {
  const [resorts, setResorts] = useState([])
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const getResorts = async () => {
      await axios.get('http://localhost:3001/api/resort')
        .then(res => {
          console.log(res.data)
          setResorts(res.data)
        })
    }
    getResorts()
  }, [])

  const handleSearch = async(e) => {
    e.preventDefault()
    console.log(search)
    await axios.get(`http://localhost:3001/api/resort/search/${search}`)
  }

  const handleChange = (e) => {
    console.log(e.target.value)
    setSearch(e.target.value)
  }

  console.log(resorts)

  return (
    <div className='resorts'>
      <form className='search'>
        <input type='text' placeholder='Search for a resort' className='search-bar' onChange={handleChange} value={search}/>
        <button type='submit' onClick={handleSearch}>Search</button>
      </form>
      <div className='container'>
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3'>
          {
            resorts.map(resort => (
              <div className='col' key={resort._id}>
                <div className='card p-0'>
                  <img src={`${resort.image}`} alt={resort.resortName} className='resort-img' onClick={() => navigate(`/resorts/${resort._id}`)}/>
                  <div className='card-body text-start'>
                    <h6 className='card-title fw-bold'>{resort.resortName}</h6>
                    <p className='card-text'>{resort.region}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default Resorts