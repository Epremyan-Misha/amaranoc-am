import "../index.css";
import { firstPeopleRooms,secondPeopleRooms,lastPeopleRooms,h4PeopleRooms } from "../DataBase";
function PeopleRooms(){
    return(
        <>
          <div className="peopleRoomMain">
            {h4PeopleRooms.map(info=>(
                <h4 className="peopleRoomH4">{info.h4}</h4>
            ))}
            <div className="peopleRoomAll12">
                {firstPeopleRooms.map(info=>(
                    <p className="p1">{info.num}</p>
                ))}
            </div>
            <div className="peopleRoom345">
                 {secondPeopleRooms.map(info=>(
                    <p className="p5">{info.num}</p>
                ))}
            </div>
            {lastPeopleRooms.map(info=>(
                <div className="peopleRoom6AndMore">{info.num}</div>
            ))}
          </div>
        </>
    )
}
export default PeopleRooms;