import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className='home'>
      <div className='home-content-1 d-flex justify-content-end'>
        <div className="text-wrapper d-flex flex-column">
          <h1 className='text-white'>Welcome to CalSki!</h1>
          <h3 className='text-white p-4 pt-0 lh-base'>We provide everything you should know to plan your perfect trip to one of the 26 world-renowned ski resorts in California.</h3>
          <h3 className="text-white fs-5"><Link to='/resorts' className='text-white icon-link link-offset-1 link-underline-light link-underline-opacity-0 link-underline-opacity-100-hover'>Find a Resort<i className="bi bi-chevron-right"></i></Link></h3>
        </div>

      </div>
      <div className='home-content-2 d-flex flex-column'>
        <h1 className='text-white fs-1'>Personalize your Experience</h1>
        <h3 className='text-white ps-3 pe-3 lh-base'>All you have to do is to make an account. Just make an ideal plan and enjoy your advanturous vacation! </h3>
        <h3 className="text-white mt-1 fs-5"><Link to='/login' className='text-white icon-link link-underline-light link-underline-opacity-0 link-underline-opacity-100-hover'><span>Login or Register</span><i className="bi bi-chevron-right"></i></Link></h3>
      </div>
    </div>
  )
}

export default Home