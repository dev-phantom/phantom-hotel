import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";

import App from "./App";
import Home from "./pages/home/Home";
import PropertyDetails from "./components/propertyDetails";
import Cart from "./pages/cart/Cart";
import Tenant from "./pages/tenant/tenant";
import Landlord from "./pages/landlord/landlord";
import ErrorPage from "./pages/error/pageNotFound";
import Propertie from "./pages/properties/properties";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      <Route errorElement={<ErrorPage />} />
      <Route index element={<Home />} />

      <Route path="/property/:id" element={<PropertyDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/tenants" element={<Tenant />} />
      <Route path="/landlord" element={<Landlord />} />
      <Route path="/properties" element={<Propertie />} />

      {/* Redirect /home to / */}
      <Route path="/home" element={<Navigate to="/" />} />
    </Route>
  )
);

export default router;
