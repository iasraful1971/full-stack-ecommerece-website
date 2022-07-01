/* eslint-disable react-hooks/exhaustive-deps */
import { Button } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import MetaData from "../../more/MetaData";
import {
  clearErrors,
  deleteProduct,
  getAdminProduct
} from "../../redux/actions/ProductActions";
import { DELETE_PRODUCT_RESET } from "../../redux/constants/ProductConstant";
import "./AllProducts.css";
import SideBar from "./Sidebar";


const AllProducts = ({history}) => {

const dispatch = useDispatch();

const { error, products } = useSelector((state) => state.products);

const { error: deleteError, isDeleted } = useSelector(
    (state) => state.deleteProduct
  );

  const deleteProductHandler = (id) => {
    dispatch(deleteProduct(id));
  };

useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }
    if (deleteError) {
        toast.error(deleteError);
        dispatch(clearErrors());
      }
  
      if (isDeleted) {
        toast.success("Product Deleted Successfully");
        history.push("/dashboard");
        dispatch({ type: DELETE_PRODUCT_RESET });
      }
    dispatch(getAdminProduct());
  }, [dispatch, alert, error, history]);

const columns = [
    { field: "id", headerName: "Product ID", minWidth: 150, flex: 1 },

    {
      field: "name",
      headerName: "Name",
      minWidth: 150,
      flex: 1,
    },
 

    {
      field: "price",
      headerName: "Price",
      type: "number",
      minWidth: 150,
      flex: .3,
    },

    {
      field: "actions",
      flex: 1,
      headerName: "Actions",
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <Fragment>
            <Link to={`/edit/product/${params.getValue(params.id, "id")}`}>
              <EditIcon />
            </Link>

            <Button
            onClick={() =>
                deleteProductHandler(params.getValue(params.id, "id"))
              }
            >
              <DeleteIcon />
            </Button>
          </Fragment>
        );
      },
    },
  ];

  const rows = [];

  products &&
    products.forEach((item) => {
      rows.push({
        id: item._id,
        price: item.price,
        name: item.name,
      });
    });

    return (
       <Fragment>
      <MetaData title={`ALL PRODUCTS - Admin`} />

      <div className="dashboard">
        <SideBar />
        <div className="productListContainer">
          <h1 id="productListHeading">ALL PRODUCTS</h1>

          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="productListTable"
            autoHeight
          />
        </div>
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
    </Fragment>
    )
}

export default AllProducts
