import React,{useState ,useEffect} from 'react';
import axios from 'axios'

function Profile({myStorage}) {
  
  let user = myStorage.getItem('user') 

  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [age, setAge] = useState("");
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
  return (
    <div className="details">
      <div className="card-body">
        <div className="text-center">
          <h3 className="display-4 text-info">My Profile</h3>
        </div>
        <div className="p-3">
          <form >
            <div className="mb-2 ">
              <label className="form-label" htmlFor="name">
               Nick Name
              </label>
              <p><strong><u>{name}</u></strong></p>
              
            </div>
            <div className="mb-2 ">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <p><strong><u>{email}</u></strong></p>
            </div>
            <div className="mb-2 ">
              <label className="form-label" htmlFor="Age">
                Age
              </label>
              <p><strong><u>{age}</u></strong></p>
            </div>
            <div className="mb-2 ">
              <label className="form-label" htmlFor="number">
                Mobile Number
              </label>
              <p><strong><u>{number}</u></strong></p>
               </div>
                 <div className="mb-2 ">
              <label className="form-label" htmlFor="author">
              Fav Author
              </label>
              <p><strong><u>{author}</u></strong></p>
              </div>
              <div className="mb-2 ">
              <label className="form-label" htmlFor="Book">
                Fav Book
              </label>
              <p><strong><u>{book}</u></strong></p>
              </div>            
          </form>
        </div>
      </div>
    </div>
  )
}

export default Profile