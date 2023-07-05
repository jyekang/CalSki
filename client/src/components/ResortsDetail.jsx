import { useParams, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"


const ResortsDetail = () => {
  const { id } = useParams()
  const [resort, setResort] = useState({})
  const [plan, setPlan] = useState({})
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

  const handleChange = (e) => {
    setPlan({...plan, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
  }

  return (
    <div className="resort-detail" style={{ backgroundColor: 'rgb(248,249,250)' }}>
      <div className="hero">
        <div className="detail-head">
          <div className="detail-head-grid">
            <button className="detail-head-back">
              <Link to='/resorts'><h1><i className="bi bi-arrow-left-short"></i></h1></Link>
            </button>
            <div className="detail-head-name">
              <h1>{resort.resortName}</h1>
            </div>
          </div>
        </div>
        <div className="detail-hero-img">
          <img src={resort.image} alt="" className="w-75" />
        </div>
        <button type="button" className="btn btn-primary mt-4" data-bs-toggle="modal" data-bs-target="#planModal" data-bs-whatever="@mdo">Create a Plan</button>
      </div>

      <div className="summary m-5">
        <div className="container">
          <p className="text-start mb-5 lh-base"><span className="fw-bold lh-lg">Description:</span> <br />{resort.description}</p>
          <div className="row">
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="item-card mb-4 p-3 text-start">
                <h5 className="fw-bold lh-lg">Ticket:</h5>
                <h6>Child Price: {resort.ticketChild}</h6>
                {/* <h6>Young Price: {resort.ticketYoung}</h6> */}
                <h6>Adult Price: {resort.ticketAdult}</h6>
                <h6>Senior Price: {resort.ticketSenior}</h6>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-4">
              <div className="item-card mb-4 p-3 text-start">
                <h5 className="fw-bold lh-lg">Elevation:</h5>
                <h6 className="">Base Elevation: {resort.baseElevation} feet</h6>
                <h6>Summit Elevation: {resort.summitElevation} feet</h6>
                <h6>Vertical Rise: {resort.verticalRise}</h6>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-4">
              <div className="item-card mb-5 p-3">
                <h4 className="summary-title">{resort.contactAddress}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="planModal" tabIndex="-1" aria-labelledby="planModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" style={{translate:'0px -5vh'}}>
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="planModalLabel">Create Plan</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className="text-start">
                <div className="mb-3">
                  <label htmlFor="plan-name" className="col-form-label">Plan Name:</label>
                  <input type="text" className="form-control" id="plan-name" onChange={handleChange}/>
                </div>
                <div className="mb-3">
                  <label htmlFor="plan-date" className="col-form-label">Date:</label>
                  <input className="form-control" id="plan-date" onChange={handleChange}></input>
                </div>
                <div className="mb-3">
                  <label htmlFor="plan-note" className="col-form-label">Note:</label>
                  <input className="form-control" id="plan-note" onChange={handleChange}></input>
                </div>
                <div className="mb-3">
                  <label htmlFor="plan-activity" className="col-form-label">Activity:</label>
                  <input className="form-control" id="plan-activity" onChange={handleChange}></input>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-primary">Create Plan</button>
            </div>
          </div>
        </div>
      </div>

      {/* <iframe allowfullscreen="" frameborder="" height="600" src="https://fatmap.com/activity/pistes/@37.6621558,-119.6629259" width="100%"></iframe> */}
    </div>
  )
}

export default ResortsDetail