import { useState, useEffect } from 'react'
import axios from 'axios'

const Plans = () => {

  const [plans, setPlans] = useState([])

  useEffect(() => {
    const getPlan = async() => {
      const response = await axios.get('http://localhost:3001/api/plan')
      setPlans(response.data)
      console.log(response)
    }
    getPlan()
  },[])

  const handleChange = (e) => {
    setPlans({...plans, [e.target.name]: e.target.value})
  }

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

  return (
    
    <div>
      {
    plans.map((plan) => (
      <div className="card m-5" style={{width: "36rem"}} key={plan._id}>
        <div className="card-body">
          <h5 className="card-title">{plan.resortName}</h5>
          <h5>{plan.date}</h5>
          <p className="card-text mt-4">{plan.comment}</p>
          <button className="btn btn-success me-2" id="updateButton" type="button" data-bs-toggle="modal" data-bs-target="#planModal" data-bs-whatever="@mdo">Update</button><button className="btn btn-danger ms-2" id="deleteButton" onClick={() => deletePlan(plan._id)}>Delete</button>
        </div>
      </div>
    ))
  }
      

      <div className="modal fade" id="planModal" tabIndex="-1"    aria-labelledby="planModalLabel" aria-hidden="true">
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
    </div>
  
  )
}

export default Plans
