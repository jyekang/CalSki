import { Link } from 'react-router-dom'

const Footer = () => {

  return (
    <div className="footer d-flex align-items-center justify-content-center" style={{backgroundColor:'rgb(248,249,250)'}}>
        <div >
          <h6 className="mr-3"><i class="bi bi-envelope"></i> info@calski.com</h6>
          <h6><i class="bi bi-telephone"></i> 555.555.5555</h6>
        </div>
   
        <div class="w-100"></div>

        <div>
            <h6 className="m-0">© J.E.X</h6>
        </div>
        
        <div>
        <h6 className="m-0">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook"></i></a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
        </h6>
        </div>
    </div>
  )
}

export default Footer