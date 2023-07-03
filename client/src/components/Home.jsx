import img from '../assets/heavenly-tahoe.jpg'
import img2 from '../assets/diamond-peak.jpg'
import img3 from '../assets/tahoe-ski-3.jpg'
import img4 from '../assets/tahoe-ski-4.jpg'

const Home = () => {
  return (
    <div className='home'>
        <div className='home-content-1 position-relative'>
            <h1 className='p-5 text-white'>CalSki</h1>
            <h2 className='text-white'>Welcome to CalSki! Plan your dream vacation at one of California's 26 ski resorts. </h2>
        </div>
        <div className='home-content-2 position-relative'>
            <h1 className='text-white'>Just make an account, search for a resort, make a plan, and boom! You're done.</h1>
            <h2 className=''></h2>
        </div>
    </div>
  )
}

export default Home