import { Routes, Route } from "react-router-dom";
import Listings from "../views/Listings.jsx";
import ListingDetails from "../views/ListingDetails.jsx";
import Checkout from "../views/Checkout.jsx";
import NotFound from "../views/NotFoundPage.jsx";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Listings />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/listing/:id" element={<ListingDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        {/* ONLY MATCH THIS WHEN NO OTHER ROUTES IS VALID MATCH*/}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default Router;
