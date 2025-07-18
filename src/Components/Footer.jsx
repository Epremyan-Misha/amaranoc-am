import "../index.css";
import Inputs from "./ComponentForInputsFooter";
import { InfoH1Footer,InfoPFooter } from "./InfoForFooter";
function Footer(){
    return(
        <div className="footerMain"  style={{ backgroundImage: "url('/photo/footer1.png')" }}>
            <div className="footerForReport">
               <InfoH1Footer />
               <InfoPFooter />
                <Inputs />
            </div>
        </div>
    )
}
export default Footer;