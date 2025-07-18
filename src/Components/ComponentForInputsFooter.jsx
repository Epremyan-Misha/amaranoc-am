import { inputsForFotter } from "../DataBase";
import "../index.css";
function Inputs(){
    return(
        <>
        <div className="divForFooterInputs">
        {inputsForFotter.map(info=>(
        <input className="inputForReport1" type={info.type} placeholder={info.placeHolder} />     
        ))}
        <button className="footerBtn">Ուղարկել</button>
        </div>
        </>
    )
}
export default Inputs;