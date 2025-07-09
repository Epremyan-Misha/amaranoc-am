import "./index.css"
function ProductCard({title,image}){
    return(
        <>
        <div className="divForCards">
        <img className="productCardImg" src={image} alt={title}/>
        <p style={{
            marginTop: "15px"
        }}>{title}</p>
        </div>
        </>
    )
}
export default ProductCard;