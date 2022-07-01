import AddIcon from "@material-ui/icons/Add";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PeopleIcon from "@material-ui/icons/People";
import PostAddIcon from "@material-ui/icons/PostAdd";
import RateReviewIcon from "@material-ui/icons/RateReview";
import MenuIcon from '@mui/icons-material/Menu';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const button = () => {
    let items = document.querySelectorAll(".Dashboard__item");
  };
 
  return (
    <>
      <div className="sidebar">
      <Link to="/">
        <img
          src="http://localhost:3000/static/media/logo1.c7e7bcb491d3d801611b.png"
          alt="Ecommerce"
        />
      </Link>
      <Link to="/dashboard">
        <p className="Dashboard__item" onClick={button}>
          <DashboardIcon /> Dashboard
        </p>
      </Link>
      <Link to="/admin/products">
        <p className="Dashboard__item">
          <PostAddIcon /> All Products
        </p>
      </Link>

      <Link to="/admin/product">
        <p>
          <AddIcon />
          Create Product
        </p>
      </Link>

      <Link to="/admin/orders">
        <p>
          <ListAltIcon />
          Orders
        </p>
      </Link>
      <Link to="/admin/users">
        <p>
          <PeopleIcon /> Users
        </p>
      </Link>
      <Link to="/admin/reviews">
        <p>
          <RateReviewIcon />
          Reviews
        </p>
      </Link>
    </div>
    <div className="mobile-sidebar">
    <Accordion>
        <AccordionSummary
          expandIcon={<MenuIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
           <div>
        <img className="mobile-image"
          src="http://localhost:3000/static/media/logo1.c7e7bcb491d3d801611b.png"
          alt="Ecommerce"
        />
      </div>
        </AccordionSummary>
        <AccordionDetails>
        <div className="m-sidebar">
   
      <Link to="/dashboard">
        <p className="Dashboard__item" onClick={button}>
          <DashboardIcon /> Dashboard
        </p>
      </Link>
      <Link to="/admin/products">
        <p className="Dashboard__item">
          <PostAddIcon /> All Products
        </p>
      </Link>

      <Link to="/admin/product">
        <p>
          <AddIcon />
          Create Product
        </p>
      </Link>

      <Link to="/admin/orders">
        <p>
          <ListAltIcon />
          Orders
        </p>
      </Link>
      <Link to="/admin/users">
        <p>
          <PeopleIcon /> Users
        </p>
      </Link>
      <Link to="/admin/reviews">
        <p>
          <RateReviewIcon />
          Reviews
        </p>
      </Link>
    </div>
        </AccordionDetails>
      </Accordion>
     
   
    </div>
    </>
  );
};

export default Sidebar;
