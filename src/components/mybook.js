import React, { useEffect, useState } from "react";
import axios from "axios";
import URL from "../db";
import { useNavigate} from "react-router-dom";

function Mybooks({myStorage}) {
  
  const navigate = useNavigate()

 
  const [data, setData] = useState([]);

  let user = myStorage.getItem('user')
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let res = await axios.post(`${URL}mybooks`,{user:user});
   
    setData(res.data.data);
  };

const handleDelete=async(id)=>{
  let res = await axios.delete(`${URL}deletebook/${id}`)
  if(res.data.statuscode === 200)
  {
      getData()
  }
}


  return (
    <>
      <h1 className="table display-2 text-info">My Books</h1>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Category</th>
                  <th scope="col">Author</th>
                  <th scope="col">Book Name</th>
                  <th scope="col">Book</th>
                  <th scope="col">CreatedBy</th>
                  <th scope="col">Options</th>
                </tr>
              </thead>
              <tbody>
                {data.map((e, i) => (
                  <tr key={i}>
                    <th scope="row">{i + 1}</th>
                    <td className="use">{e.category}</td>
                    <td className="use2">{e.author}</td>
                    <td className="use2">{e.title}</td>
                    <td className='use2'><a href={e.booklink} target='_'>View Book</a></td>
                    <td>{new Date(e.createdAt).toLocaleDateString()}</td>
                    <td className="use2">
                      <button className="btn btn-info" onClick={()=>navigate(`/edit-book/${e._id}`)}>Edit</button>
                      &nbsp;&nbsp;&nbsp;<button className="btn btn-danger" onClick={()=>handleDelete(e._id)}>Delete</button></td>
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

export default Mybooks;
