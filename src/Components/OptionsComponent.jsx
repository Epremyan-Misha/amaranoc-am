import "../index.css";
import ProductCard from "./ProductCards";
import { productsImg } from "../DataBase";
function Options(){
    return(
        <>
         <div className="divForOptions">
                  <div className="aranjnatner">
                    <img style={{ marginLeft: "25px" }} src="photo/nkar 1.png" />
                    <p style={{ borderBottom: "solid 3px rgb(255, 123, 0)" }}>
                      Առանձնատներ
                    </p>
                  </div>
                  {productsImg.map(info=>(
                  <ProductCard title={info.title} image={info.image} />
                  ))}
                </div>
        </>
    )
} 
export default Options;