/* eslint-disable jsx-a11y/alt-text */
import { useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import bg from "../../images/background.jpg";
import bg2 from "../../images/background2.jpg";
import "./Hero.css";

import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { clearErrors, getProduct } from "../../redux/actions/ProductActions";
//import Loading from "../../more/Loader";
import Loading from "../../more/Loading";
import MetaData from "../../more/MetaData";
import ProductCard from "../Product/ProductCard";
import Category from "./Category";
//import Header from "./Header";

const Hero = () => {
  const dispatch = useDispatch();
  const { products, error, loading } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error]);

  return (
    <>
    <MetaData title="Home"/>
      {loading ? (
        <Loading />
      ) : (
        <>
          {/* Carousel */}
          <div className="banner">
            <Carousel>
              <img src={bg} className="bgImg" />
              <img src={bg2} className="bgImg" />
            </Carousel>
            <div className="home__content">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <h2
                  style={{
                    fontFamily: "Segoe Script",
                    fontSize: "3em",
                    fontWeight: "500",
                  }}
                >
                  Buy 2 Get
                </h2>
                <span
                  style={{
                    padding: "10px",
                    backgroundColor: "#fff",
                    margin: "0px 10px",
                    textAlign: "center",
                    width: "150px",
                    height: "40px",
                    color: "#26c",
                    fontFamily: "Segoe Script",
                    fontSize: "2.4em",
                    display: "flex",
                    justifyContent: "center",
                    lineHeight: ".7",
                    alignItems: "center",
                  }}
                >
                  1 Free
                </span>
              </div>
              <div>
                <h2
                  style={{
                    fontSize: "4.5em",
                    fontFamily: "Poppins,sans-serif",
                    color: "#fff",
                  }}
                >
                  Fashionable
                </h2>
              </div>
              <div>
                <h2
                  style={{
                    fontSize: "4.5em",
                    fontWeight: "400",
                    fontFamily: "Poppins,sans-serif",
                    color: "#fff",
                    lineHeight: ".7",
                  }}
                >
                  Collection
                </h2>
              </div>
              <div>
                <h2
                  style={{
                    fontWeight: "400",
                    fontFamily: "Poppins,sans-serif",
                    color: "#fff",
                    fontSize: "1em",
                    paddingTop: "10px",
                  }}
                >
                  Get Free Shipping on all orders over $99.00
                </h2>
              </div>
              <div>
                <a href="#container">
                  <button
                    type="submit"
                    style={{
                      width: "135px",
                      height: "50px",
                      border: "none",
                      background: "#3BB77E",
                      margin: "10px 0",
                      fontSize: "1.2vmax",
                      color: "#fff",
                      cursor: "pointer",
                    }}
                    className="Home__button"
                  >
                    SHOP NOW
                  </button>
                </a>
              </div>
            </div>
          </div>
          <Category/>

          <h2 className="homeHeading">Featured Products</h2>


          
          <div id="container" className="main-product">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>




          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
      
        </>
      )}
    </>
  );
};

export default Hero;
