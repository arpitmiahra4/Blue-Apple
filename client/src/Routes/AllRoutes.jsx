import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Components/Admin/Dashboard";
import MyProfile from "../Components/Admin/MyProfile";
import NewProduct from "../Components/Admin/NewProduct";
import OrderTable from "../Components/Admin/OrderTable";
import ProductTable from "../Components/Admin/ProductTable";
import ReviewsTable from "../Components/Admin/ReviewsTable";
import UserTable from "../Components/Admin/UserTable";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import Home from "../Pages/Home";
import Ipad from "../Pages/Ipad";
import Iphone from "../Pages/Iphone";
import Mac from "../Pages/Mac";
import Store from "../Pages/Store";
import Support from "../Pages/Support";
import Watch from "../Pages/Watch";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/store" element={<Store />}></Route>
      <Route path="/ipad" element={<Ipad />}></Route>
      <Route path="/iphone" element={<Iphone />}></Route>
      <Route path="/mac" element={<Mac />}></Route>
      <Route path="/watch" element={<Watch />}></Route>
      <Route path="/test" element={<Home />}></Route>
      <Route path="*" element={<h1>Hello</h1>}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/support" element={<Support />}></Route>
      <Route path="/admin" element={<Dashboard />}></Route>
      <Route path="/productTable" element={<ProductTable />}></Route>
      <Route path="/usertable" element={<UserTable />}></Route>
      <Route path="/ordertable" element={<OrderTable />}></Route>
      <Route path="/newProduct" element={<NewProduct />}></Route>
      <Route path="/myProfile" element={<MyProfile />}></Route>
      <Route path="/reviewsTable" element={<ReviewsTable />}></Route>
    </Routes>
  );
};

export default AllRoutes;
