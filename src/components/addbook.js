import axios from "axios";
import React, { useState } from "react";
import {useNavigate } from "react-router-dom";

function Addbook({ myStorage }) {
  let navigate = useNavigate();
  let user = myStorage.getItem("user");

  const [category, setCategory] = useState("comics");
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [msg, setMsg] = useState("");
  const [booklink, setBooklink] = useState("");

  
  let handleSubmit = async (e) => {
    e.preventDefault();
    let res = await axios.post(`${URL}addbook`, {
      category: category,
      author: author,
      title: title,
      createdBy: user,
      booklink: booklink,
    });
    if (res.data.statuscode === 200) {
      navigate("/books");
    } else {
      setMsg(res.data.message);
    }
  };
  return (
    <div className="details">
      <div className="card-body">
        <div className="text-center">
          <h3 className="display-4 text-info">Add Book</h3>
        </div>
        <div className="p-3">
          <form onSubmit={handleSubmit}>
            <div className="mb-2 ">
              <label className="form-label" htmlFor="name">
                Category
              </label>

              <select
                className="form-control"
                type="text"
                id="name"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="comics">Comics</option>
                <option value="history">History</option>
                <option value="politics">Politics</option>
              </select>
            </div>
            <div className="mb-2 ">
              <label className="form-label" htmlFor="email">
                Author
              </label>
              <input
                className="form-control"
                type="text"
                id="email"
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Enter the Author name"
                required
              />
            </div>
            <div className="mb-2 ">
              <label className="form-label" htmlFor="password">
                Title
              </label>
              <input
                className="form-control"
                type="text"
                id="password"
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter the Book name"
                required
              />
            </div>
            <div className="mb-2 ">
              <label className="form-label" htmlFor="password">
                Book Link
              </label>
              <input
                className="form-control"
                type="url"
                id="password"
                onChange={(e) => setBooklink(e.target.value)}
                placeholder="Enter the PDF link"
                required
              />
            </div>
            <p className="text-danger">{msg}</p>
            <div className="">
              <button className="btn btn-outline-info" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Addbook;
