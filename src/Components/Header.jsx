import '../index.css';
import HeaderInfo from './ComponentForHeaderInfo';
function Head(){
    return(
        <>
        <div className="headDiv">
            <img className="iconImg" src="photo/icon.png"/>
            <h4 className="forYellowBorder">Գլխավոր</h4>
            <HeaderInfo />
            <input className="input" type="text" placeholder="Որոնում"/>
        </div>
        </>
    )
}
export default Head;