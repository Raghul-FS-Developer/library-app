import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Update({myStorage}) {

   let user = myStorage.getItem('user') 
  let navigate = useNavigate();
  

  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [age, setAge] = useState("");
  const [msg, setMsg] = useState("");
  const [book, setBook] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let res = await axios.get(`${URL}getuser/${user}`);
    
    setAuthor(res.data.data.author);
    setAge(res.data.data.age);
    setName(res.data.data.nickname);
    setNumber(res.data.data.number);
    setEmail(res.data.data.email)
    setBook(res.data.data.book)
  };

  const updatebook = async (e) => {
    e.preventDefault();
    let res = await axios.put(`${URL}updateuser/${user}`,{
      age:age,
      author: author,
      nickname:name,
      number:number,
      email:email,
      book:book   
    });
     
    if (res.data.statuscode === 200) {
      navigate("/profile");
    }else{
      setMsg(res.data.message)
    }
  };

  return (
    <div className="details">
      <div className="card-body">
        <div className="text-center">
          <h3 className="display-4 text-info">Update Profile</h3>
        </div>
        <div className="p-3">
          <form onSubmit={updatebook}>
            <div className="mb-2 ">
              <label className="form-label" htmlFor="name">
               Nick Name
              </label>

              <input
                className="form-control"
                type="text"
                id="name"
                onChange={(e) => setName(e.target.value)}
                placeholder='Enter your nick name'
                value={name}
              >
               
              </input>
            </div>
            <div className="mb-2 ">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input
                className="form-control"
                type="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-2 ">
              <label className="form-label" htmlFor="Age">
                Age
              </label>
              <input
                className="form-control"
                type="number"
                id="Age"
                onChange={(e) => setAge(e.target.value)}
                value={age}
                placeholder="Enter your age"
                required
              />
            </div>
            <div className="mb-2 ">
              <label className="form-label" htmlFor="number">
                Mobile Number
              </label>
              <input
                className="form-control"
                type="text"
                id="number"
                onChange={(e) => setNumber(e.target.value)}
                value={number}
                placeholder="Enter your mobile number"
                maxLength={10}
                required
              />
                    </div>
                    <div className="mb-2 ">
              <label className="form-label" htmlFor="author">
              Fav Author
              </label>
              <input
                className="form-control"
                type="text"
                id="author"
                onChange={(e) => setAuthor(e.target.value)}
                value={author}
                placeholder="Enter your favourite author name"
                required
                />
              </div>
              <div className="mb-2 ">
              <label className="form-label" htmlFor="Book">
                Fav Book
              </label>
              <input
                    className="form-control"
                    type="text"
                    id="Book"
                    onChange={(e) => setBook(e.target.value)}
                    value={book}
                    placeholder="Enter you favourite book name"
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

export default Update;
