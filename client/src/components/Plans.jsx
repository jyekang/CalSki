import { useState, useEffect } from 'react'
import axios from 'axios'

const Plans = () => {

  const [plans, setPlan] = useState()

  useEffect(() => {
    const getPlan = async() => {
      const response = await axios.get('http://localhost:3001/api/plans')
      setPlan(response.data)
      console.log(response)
    }
    getPlan()
  },[])

  const handleChange = (e) => {
    setPlan({...plan, [e.target.name]: e.target.value})
  }

  return (
    <div>
      <div className="card m-5" style={{width: "36rem"}}>
        <div className="card-body">
          <h5 className="card-title">Alpine Resort <h5>August 5th, 2023</h5></h5>
          <p className="card-text mt-4">My family and I would love to go here sometime. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto eligendi assumenda itaque quia possimus velit accusamus quis obcaecati doloribus illum veritatis enim voluptatum quisquam reprehenderit minus, nihil nostrum provident consequuntur! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, incidunt magnam officia iusto illum laudantium dolore natus temporibus aspernatur dolores perspiciatis, totam reiciendis, et voluptatibus laborum. Expedita, eum amet necessitatibus recusandae ea sequi ratione labore aspernatur quaerat repellendus quasi rerum repudiandae ut minima at ducimus, iure quo minus dolorem quidem!</p>
          <button className="btn btn-success me-2" id="updateButton" type="button" data-bs-toggle="modal" data-bs-target="#planModal" data-bs-whatever="@mdo">Update</button><button className="btn btn-danger ms-2" id="deleteButton">Delete</button>
        </div>
      </div>

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


//   return (
//     <div className="plansPage">
//       <h1>Plans</h1>
//       {
//         plans.map((plan, key) => (
//           <div className="container">
//             <div className="table-responsive">
//               <table className="table table-hover">
//                 <thead>
//                   <tr>
//                     <th>Resort</th>
//                     <th>Date</th>
//                     <th>Plan</th>
//                     <th>Update and delete</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td>Test</td>
//                     <td>Test</td>
//                     <td>I want to go here</td>
//                     <td><button className="btn btn-success" id="updateButton">Update</button><button className="btn btn-danger" id="deleteButton">Delete</button></td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         ))
//       }
//     </div>
//   ) 


// card:
// <h2>ResortName, - date</h2>
// <p>plan</p>
// buttons
