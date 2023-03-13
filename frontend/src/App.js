import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RestaurantDetails from "./pages/RestaurantDetails";
import Restaurants from "./pages/Restaurants";
import Book from "./pages/Book";
import { ToastContainer } from "react-toastify";
import BookDetails from "./pages/BookDetails";
import Notfound from "./pages/Notfound";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/restaurants" element={<Restaurants />} />
            <Route
              path="/restaurantsDetails/:id"
              element={<RestaurantDetails />}
            />
            <Route path="/book/:id" element={<Book />} />
            <Route path="/book/details" element={<BookDetails />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
          <Footer />
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
