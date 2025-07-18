import "../index.css";
import homeImages from "../DataBase";
function Houses(){
    return (
 <>
 <div className="aranjnatnerMain">
  {homeImages.map((img) => (
    <div className="houseMainDiv">
      <div className="divForHousesMain">
        <img className="productHousesImg" src={img.image} alt={img.title} />
        <div className="titleAndPeople">
          <p className="houseTitle">{img.title}</p>
          <img className="iconPeople" src="photo/iconPeople.png" />
          <p className="housePeople">{img.people}</p>
        </div>
        <p className="housePrace">{img.prace}</p>
      </div>
    </div>
  ))}
</div>
</>
    )
}
 export default Houses;