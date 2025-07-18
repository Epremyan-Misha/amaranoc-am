import "../index.css";
import { infoHouseForBody } from "../DataBase";
function BodyInfo(){
    return (
        <>
         <h3 className="h3">Տարածաշրջան</h3>
        <div className="forCitys">
            <div className="city">
             {infoHouseForBody.map(info => (
    <p key={info.id}>{info.name}</p>
))}
            </div>
            </div>
        </>
    )
}
export default BodyInfo;