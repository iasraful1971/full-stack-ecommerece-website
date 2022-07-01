import { Link } from "react-router-dom"
import cloth from "../../images/cloth.webp"
import food from "../../images/food.webp"
import gaget from "../../images/gajet.webp"
import life from "../../images/lifestyle.webp"
import skin from "../../images/skin.webp"
import snks from "../../images/snks.webp"
import "./category.css"
function Category() {
  return (
    <div className="categories">
         <h2 className="homeHeading">Top Categories</h2>
         <div className="category-items">
            <Link to="/products" className="category-item">
                <img src={skin} alt="" />
                <h2>Skin Care</h2>
            </Link>
            <Link to="/products" className="category-item">
                <img src={cloth} alt="" />
                <h2>Cloths and Dress</h2>
            </Link>
            <Link to="/products" className="category-item">
                <img src={food} alt="" />
                <h2>Vagtable</h2>
            </Link>
            <Link to="/products" className="category-item">
                <img src={gaget} alt="" />
                <h2>Electronics</h2>
            </Link>
            <Link to="/products" className="category-item">
                <img src={life} alt="" />
                <h2> life style</h2>
            </Link>
            <Link to="/products" className="category-item">
                <img src={snks} alt="" />
                <h2> Junk food</h2>
            </Link>
         </div>
    </div>
  )
}

export default Category