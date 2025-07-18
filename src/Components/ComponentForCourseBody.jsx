import "../index.css";
import { courses } from "../DataBase";
function Course(){
    return(
        <>
            <div className="divForCourse">
              <h4>Արժեք</h4>
              {courses.map(info => (
                  <p className="euro" key={info.id}>{info.title}</p>
              ))}
            </div>
        </>
    )
}
export default Course;