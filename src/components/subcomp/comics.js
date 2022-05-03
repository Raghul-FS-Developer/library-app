import React, { useEffect, useState } from "react";
import axios from "axios";
import URL from "../../db";

function Comics() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  let getData = async () => {
    let res = await axios.get(`${URL}comics`);
    setData(res.data.data);
  };

  return (
    <>
      <h1 className="table display-2 text-info">comics</h1>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Category</th>
                  <th scope="col">Author</th>
                  <th scope="col">Title</th>
                  <th scope="col">Book</th>
                  <th scope="col">CreatedBy</th>
                  <th scope="col">CreatedAt</th>
                </tr>
              </thead>
              <tbody>
                {data.map((e, i) => (
                  <tr key={i}>
                    <th scope="row">{i + 1}</th>
                    <td className="use">{e.category}</td>
                    <td className="use2">{e.author}</td>
                    <td className="use2">{e.title}</td>
                    <td className="use2">
                      <a href={e.booklink} target="_">
                        View Book
                      </a>
                    </td>
                    <td className="use2">{e.createdBy}</td>
                    <td>{new Date(e.createdAt).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Comics;
