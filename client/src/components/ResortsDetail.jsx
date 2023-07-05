import { useParams, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"


const ResortsDetail = () => {
  const { id } = useParams()
  const [resort, setResort] = useState({})
  useEffect(() => {
    const getResort = async () => {
      await axios.get(`http://localhost:3001/api/resort/${id}`)
        .then(res => {
          console.log(res.data.resort)
          setResort(res.data.resort)
        })
        .catch(err => console.log(err))
    }
    getResort()
  }, [])

  console.log(resort)

  return (
    <div className="resort-detail" style={{ backgroundColor: 'rgb(248,249,250)' }}>
      <div className="hero">
        <div className="detail-head">
          <div className="detail-head-grid">
            <button className="detail-head-back">
              <Link to='/resorts'><h1><i class="bi bi-arrow-left-short"></i></h1></Link>
            </button>
            <div className="detail-head-name">
              <h1>{resort.resortName}</h1>
            </div>
          </div>
        </div>
        <div className="detail-hero-img">
          <img src={resort.image} alt="" className="w-50" />
        </div>
      </div>

      <div className="summary m-5">
        <div className="container">
        <h6 className="text-start mb-5"><span className="fw-bold lh-lg">Description:</span> <br/>{resort.description}</h6>
          <div className="row">
            <div className="col-6">
              <div className="item-card mb-4 p-3 text-start">
                <h5 className="fw-bold lh-lg">Ticket:</h5>
                <h6>Child Price: {resort.ticketChild}</h6>
                {/* <h6>Young Price: {resort.ticketYoung}</h6> */}
                <h6>Adult Price: {resort.ticketAdult}</h6>
                <h6>Senior Price: {resort.ticketSenior}</h6>
              </div>
            </div>

            <div className="col-6">
              <div className="item-card mb-4 p-3 text-start">
              <h5 className="fw-bold lh-lg">Elevation:</h5>
                <h6 className="">Base Elevation: {resort.baseElevation} feet</h6>
                <h6>Summit Elevation: {resort.summitElevation} feet</h6>
                <h6>Vertical Rise: {resort.verticalRise}</h6>
              </div>
            </div>

            <div className="col-6">
              <div className="item-card mb-5 p-3">
                <h4 className="summary-title">{resort.contactAddress}</h4>
              </div>
            </div>
          </div>
        </div>



      </div>

      {/* <iframe allowfullscreen="" frameborder="" height="600" src="https://fatmap.com/activity/pistes/@37.6621558,-119.6629259" width="100%"></iframe> */}
    </div>
  )
}

export default ResortsDetail