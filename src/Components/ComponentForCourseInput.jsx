import "../index.css";
function CourseInputs(){
    return (
        <>
        <div className="divForInputs">
              <input
                className="inputForStartPrace"
                type="number"
                placeholder="Սկսած"
              />
              <input
                className="inputForEndingPrace"
                type="number"
                placeholder="Մինչև"
              />
            </div>
        </>
    )
}
export default CourseInputs