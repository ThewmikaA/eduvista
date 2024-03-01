import './Card.css';
import { Link } from 'react-router-dom';


function Card({title, description, link}){
    return(
        <div className="Card">
            <img src="" alt="Card-Image" />
            <h2>{title}</h2>
            <p>{description}</p>
            <Link to={link}>View Course</Link>
        </div>
    );
}

export default Card;