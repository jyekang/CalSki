import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const Resorts = () => {
  const [resorts, setResorts] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const getResorts = async() => {
      
    }
  }, [resorts])

  return (
    <div>Resorts</div>
  )
}

export default Resorts