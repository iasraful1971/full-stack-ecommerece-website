import { Typography } from "@material-ui/core";
import { useEffect } from "react";

import { Link } from "react-router-dom";
import "./dashboard.css";
import Sidebar from "./Sidebar.js";
// eslint-disable-next-line
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../more/Loading";
import MetaData from "../../more/MetaData";
import { getAllOrders } from "../../redux/actions/orderAction";
import { getAdminProduct } from "../../redux/actions/ProductActions";
import { getAllUsers } from "../../redux/actions/userAction";

const Dashboard = () => {
  const dispatch = useDispatch();

  const { products, loading } = useSelector((state) => state.products);

  const { orders } = useSelector((state) => state.AllOrders);

  const { users } = useSelector((state) => state.allUsers);

  let outOfStock = 0;

  products &&
    products.forEach((item) => {
      if (item.Stock === 0) {
        outOfStock += 1;
      }
    });

  useEffect(() => {
    dispatch(getAdminProduct());
    dispatch(getAllOrders());
    dispatch(getAllUsers());
  }, [dispatch]);

  let totalAmount = 0;
  orders &&
    orders.forEach((item) => {
      totalAmount += item.totalPrice;
    });

  // const  = {
  //     labels: ["Initial Amount", "Amount Earned"],
  //     datasets: [
  //       {
  //         label: "TOTAL AMOUNT",
  //         backgroundColor: ["#3BB77E"],
  //         hoverBackgroundColor: ["#3BB77E"],
  //         data: [0, totalAmount],
  //       },
  //     ],
  //   };

  // const chartOptions = {
  //   series: [
  //     {
  //       name: "Sucikathan datas list",
  //       data: [12 , 20, 30],
  //     },
  //   ],
  //   options: {
  //     title: {
  //       text: "Sucikathan datas list",
  //     },
  //     color: ["#6100D4", "6100D4"],
  //     chart: {
  //       background: "transparent",
  //     },
  //     dataLabels: {
  //       enabled: false,
  //     },
  //     stroke: {
  //       curve: "smooth",
  //     },
  //     xaxis: {
  //       categories: [
  //         "Users",
  //         "Products",
  //         "Orders",
         
  //       ],
  //     },
  //     legend: {
  //       position: "top",
  //     },
  //     grid: {
  //       show: "false",
  //     },
  //   },
  // };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="dashboard">
          <MetaData title="Dashboard" />
          <Sidebar />

          <div className="dashboardContainer">
            <Typography component="h1">Dashboard</Typography>

            <div className="dashboardSummary">
              <div>
                <p>
                  Total Amount <br /> ${totalAmount}
                </p>
              </div>
              <div className="dashboardSummaryBox2">
                <Link to="/admin/products">
                  <p>Product</p>
                  <p>{products && products.length}</p>
                </Link>
                <Link to="/admin/orders">
                  <p>Orders</p>
                  <p>{orders && orders.length}</p>
                </Link>
                <Link to="/admin/users">
                  <p>Users</p>
                  <p>{users && users.length}</p>
                </Link>
              </div>
            </div>

            {/* <div className="lineChart">
              <Chart
                options={chartOptions.options}
                series={chartOptions.series}
                type="bar"
                height="100%"
                width="100%"
              />
            </div>

            <div className="doughnutChart">
              <Chart
                type="pie"
                series={[outOfStock, products.length - outOfStock]}
                options={{
                  title: {
                    text: "all stock calculation",
                  },
                  labels: ["Out of Stock", "Stock"],
                }}
              />
            </div> */}
          </div>
        </div>
      )}
    </>
  );
};
export default Dashboard;
