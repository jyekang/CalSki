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
    console.log('hi', search)
    await axios.get(`http://localhost:3001/api/resort?search=${search}`)
      .then(res => {
        console.log(res.data)
        setResorts(res.data)
      })
  }

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const showResort = (e) => {
    navigate(e)
  }

  return (
    <div className='resorts'>
      <div className='resorts-intro'>
        <p>California is home to numerous ski resorts that cater to winter sports enthusiasts of all skill levels. These resorts offer a variety of terrains, amenities, and natural beauty, making them popular destinations for locals and tourists alike.
     
          California ski resorts have excellent snow quality, as the state’s climate is diverse and has high elevation. Many resorts receive abundant snowfall that ensures great skiing conditions for a longer season.
      
          Though skiing and snowboarding are very popular, California ski resorts offer a number of additional winter activities, such as snowshoeing, snowmobiling, tubing, and ice skating.
 
          If outdoor activities are not for you, come enjoy the village areas that have plenty of lodges, restaurants, bars, and shops.
  
          Whether you’re a seasoned skier,  first-timer, or not an outdoor enthusiast as all, California offers a wide range of activities to suit everyone.
          <br/>
          <br/>
          Check out destination options below.
        </p>
      </div>
      <div className='container'>
        <div id="search" class="row justify-content-evenly">
          <div class="col-sm-4 col-10">
            <p class="m-2">By Region</p>
            <select id="form-state" class="form-select">
              <option value="" selected="">Region</option>
              <option disabled="">—</option>
              <option value="" selected="">Region</option>
            </select>
          </div>

          <div class="col-sm-4 col-10">
            <p class="m-2">By Program</p>
            <select id="form-topic" class="form-select">
              <option value="" selected="">Topic</option>
              <option disabled="">—</option>
            </select>
          </div>

          <div class="col-sm-4 col-10">
            <p class="m-2">By Number of Trails</p>
            <select id="form-area" class="form-select">
              <option value="" selected="">Area</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>

        </div>
      </div>


      <form className='search m-5'>
        <input type='text' placeholder='Search for a resort' className='search-bar' onChange={handleChange} value={search} />
        <button type='submit' onClick={handleSearch}>Search</button>
      </form>
      <h1>California Ski Resorts</h1>
      <div className='result-list'>
        <div className='result-grid'>
          {
            resorts.map(resort => (
              <div className='result-item' key={resort._id}>
                <div className='item-card' onClick={() => { showResort(resort._id) }}>
                  <img src={`${resort.image}`} alt={resort.resortName} className='item-img' />
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