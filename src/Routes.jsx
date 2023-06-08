import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import App from "./App";

import Home from "./pages/home/Home";
import PropertyDetails from "./components/propertyDetails";
import Cart from "./pages/cart/Cart";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />

      <Route path="/property/:id" element={<PropertyDetails />} />
      <Route path="/cart" element={<Cart />} />
    </Route>
  )
);
export default router;
