import '../index.css';
import { infoForHeader, imgForHeader } from "../DataBase";

function HeaderInfo() {
    return (
        <>
            {infoForHeader.map((info, index) => (
                <h4 key={index} className="text1">{info.title}</h4>
            ))}
            {imgForHeader.map((img, index) => (
                <img key={index} className='globusIcon' src={img.img} alt="icon"/>
            ))}
        </>
    );
}

export default HeaderInfo;
