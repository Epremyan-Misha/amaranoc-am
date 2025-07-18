import Course from "./ComponentForCourseBody";
import CourseInputs from "./ComponentForCourseInput";
import "../index.css";
function CourseInputsAndPrace(){
    return(
        <>
         <div className="divForPrace">
            <Course />
            <CourseInputs />
          </div>
        </>
    )
}
export default CourseInputsAndPrace;