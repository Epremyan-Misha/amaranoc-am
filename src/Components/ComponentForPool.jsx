import "../index.css";
import { firstTextPool,secondTextPool,lastTextPool,h4ForPool } from "../DataBase";
function Pool(){
    return (
        <>
         <div className="poolMain">
            {h4ForPool.map(info=>(
                <h4 className="poolH4">{info.h4}</h4>
            ))}
                <div className="allAndOpen">
                {firstTextPool.map(info=>(
                     <p className="openPool">{info.text}</p>
                ))}
            </div>
            <div className="closeAndHeatedPools">
                {secondTextPool.map(info=>(
                    <p className="closePool">{info.text}</p>
                ))}
            </div>
            {lastTextPool.map(info=>(
                <div className="withoutAPool">{info.text}</div>
            ))}
          </div>
        </>
    )
}
export default Pool;