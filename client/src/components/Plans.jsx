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

  return plans ? (
    <div className="plansPage">
      <h1>Plans</h1>
      {
        plans.map((plan, key) => (
          <div className="container" key={plan._id}>
            <div className="table-responsive">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Resort</th>
                    <th>Date</th>
                    <th>Plan</th>
                    <th>Update and delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Test</td>
                    <td>Test</td>
                    <td>I want to go here</td>
                    <td><button class="btn btn-success" id="updateButton">Update</button><button class="btn btn-danger" id="deleteButton">Delete</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ))
      }
    </div>
  ) : (<h3>Looking for plans...</h3>)
}

export default Plans