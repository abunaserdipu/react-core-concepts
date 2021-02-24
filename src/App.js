import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const caliphs = [
    "Abu Bakr (As-Siddiq)",
    "Umar ibn al-Khattab",
    "Uthman ibn Affan",
    "Ali ibn Abi Talib",
  ];
  const products = [
    { name: "Photoshop", price: "$90.99" },
    { name: "Illustrator", price: "$60.70" },
    { name: "PDF Reader", price: "$20.30" },
    { name: "Premier Pro", price: "$150" },
    { name: "Acrobat", price: "$50" },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Person
          name="Prophet Muhammad (PBUH)"
          position="Leader of every Muslims"
        ></Person>
        <ul>
          {caliphs.map((caliph) => (
            <Person name={caliph}></Person>
          ))}
        </ul>
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
        <ul>
          {products.map((product) => (
            <li>{product.name}</li>
          ))}
        </ul>
        <Counter></Counter>
        <Users></Users>
      </header>
    </div>
  );
}
function Person(props) {
  return (
    <div
      style={{
        border: "3px solid green",
        margin: "10px",
        padding: "5px",
        backgroundColor: "salmon",
        boxShadow: "5px 5px 10px gray",
      }}
    >
      <h1>{props.name}</h1>
      <h3>{props.position}</h3>
    </div>
  );
}
function Product(props) {
  const productsStyle = {
    backgroundColor: "gray",
    // border: "1px solid gray",
    borderRadius: "5px",
    width: "200px",
    height: "200px",
    margin: "20px",
    float: "left",
  };
  const { name, price } = props.product;
  return (
    <div style={productsStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy now</button>
    </div>
  );
}
function Counter() {
  const [count, setCount] = useState(10);
  // const handleIncrease = () => setCount(count + 1);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
function Users() {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
      {
        users.map(user => <li>{user.name}</li>)
      }
      </ul>
    </div>
  );
}

export default App;
