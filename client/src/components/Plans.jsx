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

  return (
    <div className="card m-5" style={{width: "36rem"}}>
    <div className="card-body">
      <h5 className="card-title">Alpine Resort <h5>August 5th, 2023</h5></h5>
      <p className="card-text mt-4">My family and I would love to go here sometime. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto eligendi assumenda itaque quia possimus velit accusamus quis obcaecati doloribus illum veritatis enim voluptatum quisquam reprehenderit minus, nihil nostrum provident consequuntur! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, incidunt magnam officia iusto illum laudantium dolore natus temporibus aspernatur dolores perspiciatis, totam reiciendis, et voluptatibus laborum. Expedita, eum amet necessitatibus recusandae ea sequi ratione labore aspernatur quaerat repellendus quasi rerum repudiandae ut minima at ducimus, iure quo minus dolorem quidem!</p>
      <button className="btn btn-success me-2" id="updateButton">Update</button><button className="btn btn-danger ms-2" id="deleteButton">Delete</button>
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
