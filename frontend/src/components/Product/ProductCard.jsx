import { Rating } from "@material-ui/lab";
import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };
  
  return (
    <>
  
      <Link className="ProductCard" to={`/product/${product._id}`}>
            <img
              src={product.images[0].url}
              alt={product.name}
              className="ProductImg"
            />
            <p className="productName">{product.name}</p>
            <div style={{display: "flex" , justifyContent: "space-between"}}>
            <Rating {...options} />
              <span >({product.numOfReviews}Reviews)</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div className="offerPriceBox">
                <h1
                  className="discountPrice"
                  style={{
                
                    fontSize: ".9vmax",
                    paddingBottom: "0",
                  }}
                >
                  {product.offerPrice > 0 ? `-${product.offerPrice}% off` : ""}
                </h1>
                <span className="p__Price">{`$${product.price}`}</span>
              </div>
            </div>
            <div className="stock-price">stock {product.Stock}</div>
      </Link>

    </>
  );
};

export default ProductCard;