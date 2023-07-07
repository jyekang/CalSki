import { useState, useEffect } from 'react'
import axios from 'axios'

const Plans = () => {

  const [plans, setPlans] = useState([])
  const [plan, setPlan] = useState({date: '', comment: ''})

  useEffect(() => {
    const getPlan = async () => {
      const response = await axios.get('http://localhost:3001/api/plan')
      setPlans(response.data)
      console.log(response)
    }
    getPlan()
  }, [plan])

  const deletePlan = async (plan) => {
    axios.delete(`http://localhost:3001/api/plan/${plan}`)
      .then(res => {
        console.log(res)
        window.location.reload()
      })
      .catch(error => {
        console.log(error)
      })
  }

  const openModal = (modalPlan) => {
    setPlan(modalPlan)
  }

  const handleChange = (e) => {
    setPlan({ ...plan, [e.target.name]: e.target.value })
    console.log(plan)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.put(`http://localhost:3001/api/plan/${plan._id}`, plan)
    .then(res => {
      console.log(res)
      window.location.reload()
    })
    .catch(err => console.log(err))
  }

  return (

    
    <div className='plans'>
      <div className='result-list'>
        <h1 className='plans-h1'>Plan Your Winter Getaway</h1>
        <div className='result-grid'>
          
          {
            plans.map((plan) => (
              <div className="item-card" key={plan._id}>
                <div className="item-content d-flex flex-column align-items-center" style={{ height: '260px' }}>
                  <h5 className="m-3">{plan.resortName}</h5>
                  <h5 className='mb-3'>{plan.date}</h5>
                  <p className="card-text">{plan.comment}</p>
                  <div className='button-wrapper mt-auto w-100'>
                    <div className='d-flex justify-content-evenly'>
                      <button className="btn btn-light btn-sm" id="updateButton" type="button" data-bs-toggle="modal" data-bs-target="#planModal" onClick={() => openModal(plan)}> Edit </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>

      <div className="modal fade" id="planModal" tabIndex="-1" aria-labelledby="planModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" style={{ translate: '0px -5vh' }}>
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="planModalLabel">Create Plan</h1>
              <button type="button" className="btn-close" name="" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className="text-start">
                {/* <div className="mb-3">
                  <label htmlFor="plan-name" className="col-form-label">Plan Name:</label>
                  <input type="text" className="form-control" id="plan-name" onChange={handleChange}/>
                </div> */}
                <div className="mb-3">
                  <label htmlFor="plan-date" className="col-form-label">Date:</label>
                  <input className="form-control" type="date" name="date" id="plan-date" value={plan.date} onChange={handleChange}></input>
                </div>
                <div className="mb-3">
                  <label htmlFor="plan-comment" className="col-form-label">Note:</label>
                  <input className="form-control" name="comment" id="plan-comment"  value={plan.comment} onChange={handleChange}></input>
                </div>
                {/* <div className="mb-3">
                  <label htmlFor="plan-activity" className="col-form-label">Activity:</label>
                  <input className="form-control" id="plan-activity" onChange={handleChange}></input>
                </div> */}
              </form>
            </div>
            <div className="modal-footer">
            <button className="btn btn-danger me-auto" id="deleteButton" onClick={() => deletePlan(plan._id)}> Delete </button>
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#confirmModal" onClick={handleSubmit}>Save Plan</button>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="modal fade" id="planModal" tabIndex="-1" aria-labelledby="planModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" style={{ translate: '0px -5vh' }}>
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="planModalLabel">Create Plan</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className="text-start">
                <div className="mb-3">
                  <label htmlFor="plan-name" className="col-form-label">Plan Name:</label>
                  <input type="text" className="form-control" id="plan-name" onChange={handleChange} />
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
      </div> */}
    </div>

  )
}

export default Plans
