import "../index.css";
import { advanatagesH4,advanatagesText } from "../DataBase";
function AdvantagesMain(){
    return (
        <>
        <div className="advantagesMain">
            {advanatagesH4.map(info=>(
                <h4 className="advantagesH4">{info.h4}</h4>
            ))}
                    <div className="advantages">
                       {advanatagesText.map(info=>(
                        <p>{info.text}</p>
                       ))}
                    </div>
                  </div>
        </>
    )
}
export default AdvantagesMain;