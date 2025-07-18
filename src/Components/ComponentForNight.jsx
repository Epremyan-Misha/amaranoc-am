import "../index.css";
function Night(){
    return(
        <>
        
          <div className="nightMain">
            <h4 className="nightH4">Գիշերակացի առկայություն</h4>
            <div className="night">
                <div className="nigthYes">
                    <p className="allPeople">Բոլորը</p>
                    <p className="noPeople">Ոչ</p>
                </div>
                <div className="nigthNo">
                    <p className="yesPeople">Այո</p>
                </div>
            </div>
          </div>
        </>
    )
}
export default Night;