import "./index.css"
function Head(){
    return(
        <>
        <div className="headDiv">
            <img className="iconImg" src="photo/icon.png"/>
            <h4 className="forYellowBorder">Գլխավոր</h4>
            <h4 className="text1">Զեղչեր</h4>
            <h4 className="text2">Ծառայություններ</h4>
            <h4 className="text3">Մեր մասին</h4>
            <img className="globusIcon" src="photo/globus.png"/>
            <img className="peopleIcon" src="photo/people.png"/>
            <input className="input" type="text" placeholder="Որոնում"/>
        </div>
        </>
    )
}
export default Head;