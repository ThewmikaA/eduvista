import './HeaderLog.css'
import { Link } from 'react-router-dom';
function HeaderLog() {
  return (
    <header className='LoginHeader'>
      <div className="lognav-link">
        <Link to='/' style={{color: "black"}} className='log-link'>Back to Home</Link>
      </div>
      <img className="lognav-img" src="./EduVista.png" alt="EduVista_logo"></img>
    </header>
  )
}

export default HeaderLog
