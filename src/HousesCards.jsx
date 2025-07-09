import "./index.css"
function HouseCards({title,image,prace,people}){
    return(
        <>
        <div className="houseMainDiv">
        <div className="divForHousesMain">
        <img className="productHousesImg" src={image} alt={title}/>
        <div className="titleAndPeople">
          <p className="houseTitle">{title}</p>
          <img className="iconPeople" src="photo/iconPeople.png"/>
          <p className="housePeople">{people}</p>  
        </div>
        <p className="housePrace">{prace}</p>
        </div>
        </div>
        </>
    )
}
export default HouseCards;