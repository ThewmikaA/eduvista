import './HomeContainer1.css';
import { Link } from 'react-router-dom';

function HomeContainer1(){
    return(
        <div className="hcm1-cont">
            <div className="hc1-cont1"><img id='hcm1-img' src="./graduate.png" alt="" /></div>
            <div className="hc1-cont2">
                <div className="hc1-shape"><h3 className='hc1-h'>For Students</h3><p className='hc1-p'>Expand your knowledge with EduVista</p>
                <Link className='hc1-link' to='/Login'>Learn on EduVista</Link>
                </div>
                
                <div className="hc1-shape"><h3 className='hc1-h'>For Tutors</h3><p className='hc1-p'>Reach a large community of learners through EduVista</p>
                <Link className='hc1-link' to='/Login'>Teach on EduVista</Link>
                </div>
                
                <div className="hc1-shape"><h3 className='hc1-h'>For Parents</h3><p className='hc1-p'>Track your childs' performance</p>
                <Link className='hc1-link' to='/Login'>Join EduVista</Link>
                </div>
                
            </div>     
        </div>
    )    
}
export default HomeContainer1;