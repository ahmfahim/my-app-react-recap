import react, { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, []);

  return (
    <div className="App">
      {
        users.map(user => <User name={user.name} email={user.email} phone={user.phone}></User>)
      }
    </div>
  );
}

function User(props) {
  const userStyle = {
    boxShadow: "1px 1px 10px gray",
    background: "#660443ff",
    color: "white",
    padding: "20px",
    width: "500px",
    margin: "auto",
    marginTop: "20px"
  }
  return (
    <div style={userStyle}>
      <h2>Name: {props.name}</h2>
      <p><strong> Email: </strong>{props.email}</p>
      <p><strong>Phone:</strong>{props.phone}</p>
    </div>
  )
}

export default App;
