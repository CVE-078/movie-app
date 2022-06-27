import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/HomePage";
import MovieDetailPage from "./pages/MovieDetailPage";

import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-gray-800 text-white max-w-7xl mx-auto py-20">
      <Header />

      <Routes>
        <Route exact path="/" element={<HomePage />} />

        <Route path="movie">
          <Route path=":id" element={<MovieDetailPage />} />
        </Route>
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
