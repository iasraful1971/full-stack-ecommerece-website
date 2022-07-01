/* eslint-disable react-hooks/exhaustive-deps */
import Typography from "@material-ui/core/Typography";
import { useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import { useDispatch, useSelector } from "react-redux";
import BottomTab from "../../more/BottomTab";
import Footer from "../../more/Footer";
import Loading from "../../more/Loading";
import MetaData from "../../more/MetaData";
import { clearErrors, getProduct } from "../../redux/actions/ProductActions";
import Header from "../Home/Header";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import "./Product.css";
import ProductCard from "./ProductCard";
const categories = [
  "Personal",
  "cloth",
  "Ladies Cloth",
  "Gift",
  "Food",
  "Electronics",
  "Sports",
  "Others",
];

const Products = ({ match }) => {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);

  const [category, setCategory] = useState("");

  const { products, loading, error, productsCount, resultPerPage } =
    useSelector((state) => state.products);

  const keyword = match.params.keyword;

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct(keyword, currentPage, category));
  }, [dispatch, keyword, currentPage, category, alert, error]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <MetaData title="Products" />
          <Header />

          <div className="mobile-category-filter">
            <div>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography style={{ fontSize: "1.2vmax", padding: "5px" }}>Filter Product</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography style={{ fontSize: "1vmax" }}>
                  CHOOSE CATEGORIES
                </Typography>
                <ul className="categoryBox">
                  {categories.map((category) => (
                    <li
                      className="category-link-mobile"
                      key={category}
                      onClick={() => setCategory(category)}
                      type="checkbox"
                    >
                      {category}
                    </li>
                  ))}
                </ul>
                </AccordionDetails>
              </Accordion>
          
            </div>
          </div>
          <div>
            {products.length === 0 ? (
              ""
            ) : (
              <h2
                style={{
                  textAlign: "center",
                  borderBottom: "1px solid rgba(21,21,21,0.5)",
                  width: "20vmax",
                  fontSize: "1.4vmax",
                  fontFamily: "Poppins,sans-serif",
                  margin: "3vmax auto",
                  color: "rgb(0, 0, 0, 0.7)",
                }}
              >
                Featured Products
              </h2>
            )}
            <div
              className="sidebar__product"
              style={{
                display: "flex",
                flex: 1,
              }}
            >
              <div
                className="sidebar__products"
                style={{
                  border: "1px solid #999",
                  margin: "1vmax",
                  flex: ".177",
                }}
              >
                <Typography style={{ fontSize: "1.2vmax", padding: "5px" }}>
                  CHOOSE CATEGORIES
                </Typography>
                <ul className="categoryBox">
                  {categories.map((category) => (
                    <li
                      className="category-link"
                      key={category}
                      onClick={() => setCategory(category)}
                      type="checkbox"
                    >
                      {category}
                    </li>
                  ))}
                </ul>
                <Typography style={{ fontSize: "1.2vmax", padding: "5px" }}>
                  QUICK LINKS
                </Typography>
                <li className="category-link">My Carts</li>
                <li className="category-link">Favourites Items</li>
                <li className="category-link">Go to Checkout</li>
              </div>

              {products.length === 0 ? (
                <span
                  style={{
                    display: "block",
                    padding: "30px 0",
                    fontSize: "1.5rem",
                    flex: ".9",
                    textAlign: "center",
                  }}
                >
                  No Product Found ....
                </span>
              ) : (
                <div
                  className="products"
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gridGap: "15px",
                    justifyContent: "center",
                    flex: ".9",
                  }}
                >
                  {products &&
                    products.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                </div>
              )}
            </div>

            <div
              className="pagination__box"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "6vmax",
              }}
            >
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="First"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
          </div>
          <Footer />
          <BottomTab />
        </>
      )}
    </>
  );
};

export default Products;
