
import'./Slider.css'



function Slider(){

    return (
        <div className="slider">
            <div className="list">
                <div className="item">
                    <img src="./Graphic Design.png" alt="content-img1" className="slider-image" />
                </div>
                <div className="item">
                    <img src="./Finance.png" alt="content-img2" className="slider-image" />
                </div>
                <div className="item">
                    <img src="./Graphic Design.png" alt="content-img3" className="slider-image" />
                </div>
                <div className="item">
                    <img src="./Finance.png" alt="content-img4" className="slider-image" />
                </div>
                <div className="item">
                    <img src="./Graphic Design.png" alt="content-img5" className="slider-image" />
                </div>
            </div>
            <div className="buttons">
                    <button id='prev'>&lt;</button>
                    <button id='next' >&gt;</button>
            </div>
        </div>
    );
}

export default Slider