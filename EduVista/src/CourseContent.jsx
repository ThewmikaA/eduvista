import { useState,useEffect } from "react";
import './CourseContent.css';



export default function CourseContent (){



    const [opened1,setopened1] = useState(false);
    const [opened2,setopened2] = useState(false);
    const [opened3,setopened3] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 700);


    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 700);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);






    function toggledropdown1 (){
        setopened1(!opened1);
    };
    function toggledropdown2 (){
        setopened2(!opened2);
    };
    function toggledropdown3 (){
        setopened3(!opened3);
    };

    return(
        <div className={`CourseContentPage ${isMobile ? 'column' : ''}`}>
            <div className="CourseContentPage-Details">
                <img id="CourseContentPage-Details-img" src="./graphic_design.png" alt="Image" />
                <h1 className="CourseContentpage-Title">Title</h1>
                <p className="CourseContentpage-description">Description</p>
            </div>
            <div className="CourseContentpage-Container">
                
                <div className="CourseContentpage-Container-Title">
                    <h1>Title</h1>
                    <p>Course Description</p>
                </div>
                <div className="CourseContainerpage-buttons">
                    <button className="CoursContentpage-button" onClick={toggledropdown1}>Lecture Vidoes</button>
                    {opened1 && (
                        <div className="CourseContentpage-Dropdown">
                        <ul className="CourseContentpage-Dropdown-list">
                            <li>vid 1</li>
                            <li>vid 2</li>
                            <li>vid 3</li>
                        </ul>
                        </div>
                    )}
                    <button className="CoursContentpage-button" onClick={toggledropdown2}>Lecture Content</button>
                    {opened2 && (
                        <div className="CourseContentpage-Dropdown">
                        <ul className="CourseContentpage-Dropdown-list">
                            <li>File 1</li>
                            <li>File 2</li>
                            <li>File 3</li>
                        </ul>
                        </div>
                    )}
                    <button className="CoursContentpage-button" onClick={toggledropdown3}>Course Assessments</button>
                    {opened3 && (
                        <div className="CourseContentpage-Dropdown">
                        <ul className="CourseContentpage-Dropdown-list">
                            <li>Assessment 1</li>
                            <li>Assessment 2</li>
                            <li>Assessment 3</li>
                        </ul>
                        </div>
                    )}
                </div>
                 
            </div>

        </div>
    );


}



