import "../index.css";
import { firstBathroom,lastBathroom,h4Bathroom } from "../DataBase";
function BathRoom(){
    return (
        <>
         <div className="bathroomMain">
             {h4Bathroom.map(info=>(
                           <h4 className="bathroomH4">{info.h4}</h4>
                       ))}
            <div className="bathroomAll12">
                 {firstBathroom.map(info=>(
                          <p className="p2">{info.num}</p>  
                       ))}
               
            </div>
             {lastBathroom.map(info=>(
                        <div className="bathroom3">{info.num}</div>
                       ))}
            
          </div>
          </>
    )
}
export default BathRoom;