import React from "react";
import { useNavigate } from "react-router-dom";
function Category() {
  let navigate = useNavigate();
  return (
    <div className="category ">
      <h2 className="display-3 text-secondary">Category</h2>
      <button
        className="btn btn-outline-info mt-3 mr-3"
        onClick={() => navigate("/category/comics")}
      >
        Comics
      </button>
      <button
        className="btn btn-outline-info mr-3 mt-3"
        onClick={() => navigate("/category/history")}
      >
        History
      </button>
      <button
        className="btn btn-outline-info mr-3 mt-3"
        onClick={() => navigate("/category/politics")}
      >
        Politics
      </button>
    </div>
  );
}

export default Category;
