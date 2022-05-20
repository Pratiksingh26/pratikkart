import { Routes, Route } from "react-router";
import { Electronics } from "../Electronics/Electronics";
import { Home } from "../Home/Home";
import { Jewelery } from "../Jewelery/Jewelery";
import { Men } from "../Men/Men";
import { Women } from "../Women/Women";
import { ProductDetails } from "../ProductDetails/ProductDetails";
import { Cart } from "../Cart/Cart";
import { Checkout } from "../Checkout/Checkout";
import { Address } from "../Address/Address"
import { Payment } from "../Payment/Payment"
import { Sorting } from "../Sorting/Sorting";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/electronics" element={<Electronics/>} />
        <Route exact path="/jewelery" element={<Jewelery/>} />
        <Route exact path="/men" element={<Men/>} />
        <Route exact path="/women" element={<Women/>} />
        <Route exact path="/product/:id" element={<ProductDetails/>}/>
        <Route exact path="/cart" element={<Cart/>} />
        <Route exact path="/address" element={<Address />} />
        <Route exact path="/payment" element={<Payment />} />
        <Route exact path="/checkout" element={<Checkout/>} />
        <Route excat path="/sort" element={<Sorting />} />
      </Routes>
    </>
  );
};
