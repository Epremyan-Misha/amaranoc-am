import "../index.css";
function Footer(){
    return(
        <div className="footerMain"  style={{ backgroundImage: "url('/photo/footer1.png')" }}>
            <div className="footerForReport">
                <h1 className="h1ForFooter">-------- Տեղադրել Հայտարարություն --------</h1>
                <p className="pForFooter">Մուտքագրեք Ձեր տվյալները նշված դաշտերում և մենք կկապնվենք Ձեզ հետ</p>
                <div className="divForFooterInputs">
                    <input className="inputForReport1" type="text" placeholder="Անուն Ազգանուն" />     
                    <input className="inputForReport2"  type="text" placeholder="Հեռախոսահամար" />                           
                    <input className="inputForReport3"  type="text" placeholder="Էլ․ հասցե" />
                    <button className="footerBtn">Ուղարկել</button>
                </div>
            </div>
        </div>
    )
}
export default Footer;