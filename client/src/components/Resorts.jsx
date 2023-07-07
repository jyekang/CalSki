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

  const handleSearch = async (e) => {
    e.preventDefault()
    console.log(search)
    await axios.get(`http://localhost:3001/api/resort/search/${search}`)
  }

  const handleChange = (e) => {
    console.log(e.target.value)
    setSearch(e.target.value)
  }

  const showResort = (e) => {
    navigate(e)
  }

  return (
    <div className='resorts'>
      {/* <form className='search'>
        <input type='text' placeholder='Search for a resort' className='search-bar' onChange={handleChange} value={search}/>
        <button type='submit' onClick={handleSearch}>Search</button>
      </form> */}
      <div className='result-list'>
        <div className='result-grid'>
          {
            resorts.map(resort => (
              <div className='result-item' key={resort._id}>
                <div className='item-card' onClick={() => { showResort(resort._id) }}>
                  <img src={`${resort.image}`} alt={resort.resortName} className='item-img'/>
                  <div className='item-content text-start'>
                    <h6 className=''>{resort.resortName}</h6>
                    <p className='p-0 m-0'>{resort.contactAddress}</p>
                    <p className='p-0 mt-auto mb-0'>{resort.region}</p>
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