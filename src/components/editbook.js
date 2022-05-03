import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Editbook() {
  let navigate = useNavigate();
  let params = useParams();

  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [msg, setMsg] = useState("");
  const [booklink, setBooklink] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let res = await axios.get(`${URL}editbooks/${params.id}`);
    setAuthor(res.data.data.author);
    setTitle(res.data.data.title);
    setCategory(res.data.data.category);
    setBooklink(res.data.data.booklink);
  };

  const updatebook = async (e) => {
    e.preventDefault();
    let res = await axios.put(`${URL}updatebook/${params.id}`, {
      category: category,
      author: author,
      title: title,
      booklink: booklink,
    });

    if (res.data.statuscode === 200) {
      navigate("/mybooks");
    }
  };

  return (
    <div className="details">
      <div className="card-body">
        <div className="text-center">
          <h3 className="display-4 text-info">Update Book</h3>
        </div>
        <div className="p-3">
          <form onSubmit={updatebook}>
            <div className="mb-2 ">
              <label className="form-label" htmlFor="name">
                Category
              </label>

              <select
                className="form-control"
                type="text"
                id="name"
                onChange={(e) => setCategory(e.target.value)}
                value={category}
              >
                <option value="comics">comics</option>
                <option value="history">history</option>
                <option value="politics">politics</option>
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
                value={author}
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
                value={title}
                placeholder="Enter the Title name"
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
                value={booklink}
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

export default Editbook;
