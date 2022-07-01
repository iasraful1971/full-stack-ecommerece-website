import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import WebFont from "webfontloader";
import './App.css';
import AllOrder from './components/Admin/AllOrder';
import AllProducts from './components/Admin/AllProducts';
import AllReviews from './components/Admin/AllReviews';
import AllUsers from './components/Admin/AllUsers';
import CreateProduct from './components/Admin/CreateProduct';
import Dashboard from './components/Admin/Dashboard';
import EditProduct from "./components/Admin/EditProduct";
import UpdateOrder from './components/Admin/UpdateOrder';
import UpdateUser from './components/Admin/UpdateUser';
import LoginSignup from './components/Authentication/LoginSingUp';
import Cart from "./components/cart/Cart";
import ConfirmOrder from "./components/cart/ConfirmOrder";
import Favourites from "./components/cart/Favourites";
import Payment from "./components/cart/Payment";
import Shipping from "./components/cart/Shipping";
import Success from './components/cart/Success';
import Home from "./components/Home/Home";
import ProductDetails from "./components/Product/ProductDetails";
import Products from "./components/Product/Products";
import Search from "./components/Product/Search";
import EditProfile from "./components/user/EditProfile";
import ForgotPassword from './components/user/ForgotPassword';
import MoreOption from "./components/user/MoreOption";
import MyOrder from './components/user/MyOrder';
import MyOrderDetails from './components/user/MyOrderDetails';
import Profile from "./components/user/Profile";
import ResetPassword from './components/user/ResetPassword';
import UpdatePassword from "./components/user/UpdatePassword";
import CommingSoon from './more/ComingSoon';
import Contact from './more/Contact';
import Notfound from './more/NotFound';
import Rules from './more/Rule';
import Support from "./more/Support";
import UserData from "./more/UserData";
import About from "./pages/About";
import { loadUser } from "./redux/actions/userAction";
import Store from "./redux/store";
import ProtectedRoute from "./route/ProtectedRoute";
function App() {

  const [stripeApiKey, setStripeApiKey] = useState("");
  const {isAuthenticated,user} = useSelector((state) =>state.user);

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v2/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
   Store.dispatch(loadUser())
   getStripeApiKey();
  }, []);
 
  return (
     
     <BrowserRouter>
      {isAuthenticated && <UserData user={user} />}
      {stripeApiKey && (
        <Elements stripe={loadStripe(stripeApiKey)}>
          <ProtectedRoute exact path="/process/payment" component={Payment} />
        </Elements>
      )}
     
       <Switch>
         <Route exact path="/" component={Home} />  
         <Route exact path="/product/:id" component={ProductDetails} />
         <Route exact path="/login" component={LoginSignup} />
         <Route exact path="/about" component={About} />
         <Route exact path="/products" component={Products} />
         <Route exact path="/search" component={Search} />
         <Route exact path="/products/:keyword" component={Products} />
         <Route exact path="/support" component={Support} />
         <Route exact path="/cart" component={Cart} />
         <Route exact path="/favourites" component={Favourites} />
         <Route exact path="/more" component={MoreOption} />
         <Route exact path="/password/forgot" component={ForgotPassword} />
         <Route exact path="/password/reset/:token" component={ResetPassword} />
         <Route exact path="/faq" component={Rules} />
         <Route exact path="/creator" component={CommingSoon} />
         <Route exact path="/contact" component={Contact} />
         {/* protected routes  */}
         <ProtectedRoute exact path="/me" component={Profile} />
          <ProtectedRoute exact path="/me/update" component={UpdatePassword} />
         <ProtectedRoute exact path="/me/update/info" component={EditProfile} />
         <ProtectedRoute exact path="/shipping" component={Shipping} />
         <ProtectedRoute exact path="/order/confirm" component={ConfirmOrder} />
         <ProtectedRoute exact path="/success" component={Success} />
         <ProtectedRoute exact path="/orders" component={MyOrder} />
         <ProtectedRoute exact path="/order/:id" component={MyOrderDetails} />
        {/* admin  */}
        <ProtectedRoute isAdmin={true} exact path="/dashboard" component={Dashboard} />
        <ProtectedRoute isAdmin={true} exact path="/admin/product" component={CreateProduct} />
       <ProtectedRoute isAdmin={true} exact path="/admin/products" component={AllProducts} />
             <ProtectedRoute isAdmin={true} exact path="/edit/product/:id" component={EditProduct} />
       <ProtectedRoute isAdmin={true} exact path="/admin/orders" component={AllOrder} />
         <ProtectedRoute isAdmin={true} exact path="/admin/order/:id" component={UpdateOrder} />
          <ProtectedRoute isAdmin={true} exact path="/admin/users" component={AllUsers} />
         <ProtectedRoute isAdmin={true} exact path="/admin/user/:id" component={UpdateUser} />
   <ProtectedRoute isAdmin={true} exact path="/admin/reviews" component={AllReviews} />
    <Route component={
           window.location.pathname === "/process/payment" ? null : Notfound
           } />

       </Switch>
     </BrowserRouter>

  );
}

export default App;



