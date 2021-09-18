import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';

function App() {
  
  return (
 

    <div className="App">
      <Counter></Counter>
      <ExternalUsers></ExternalUsers>
    </div>
  
  );
}

function ExternalUsers () {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])

  return (
    <div>
      <h2>External Users</h2>
      {users.map(user => <User name={user.name} email={user.email}></User>)}
    </div>
  )
}

function User (props){
  const userStyle = {backgroundColor:'lightblue', padding: '20px', margin: '20px', border: '3px solid grey', borderRadius: '15px'}
  return(
    <div style={userStyle} >
      <h3>Name:{props.name}</h3>
      <p>Email:{props.email}</p>
    </div>
  )
}




function Counter (){
  const [count, setCount] = useState(10);
  const increaseHandler = () => setCount(count + 1);
  const decreaseHandler = () => setCount(count - 1);


  return(
    <div style={{backgroundColor:'lightblue', padding: '20px', margin: '20px', border: '3px solid grey', borderRadius: '15px'}}>
      <h3>Count:{count}</h3>
      <button style={{padding: '5px', margin: '15px'}} onClick={increaseHandler}>Increase</button>
      <button style={{padding: '5px', margin: '15px'}} onClick={decreaseHandler}>Decrease</button>
    </div>
  )
}



/*
const products = [
    {name: 'Mobile', price: 15000},
    {name: 'Watch', price: 1900},
    {name: 'Smart Band', price: 1500},
    {name: 'Laptop', price: 120000},
    {name: 'Camera', price: 50000},
    {name: 'Car', price: 800000}
  ]
*/

/*
{ products.map(product => <Product name={product.name} price={product.price}></Product>) }
*/

  //function Product(props){
  //   console.log(props)
  //   const productStyle = {
  //     border: '3px solid grey',
  //     borderRadius: '20px',
  //     padding: '15px'
  //   }
  //   const {name, price} = props;
  //   return(
  //     <div className="product" style={productStyle}>
  //       <h2>Name: {name}</h2>
  //       <h4>Price: {price}</h4>
  //     </div>
  //   )
  // }

  /*
function Counter(){
  const [count, setCount] = useState(5);
  const handleCountIncrease = () => setCount(count + 1);
  const handleCountDecrease = () => setCount(count - 1);
  return (
    <div>
      <h1>Count: {count} </h1>
      <button onClick={handleCountIncrease}>Increase</button> 
      <button onClick={handleCountDecrease}>Decrease</button>
    </div>
  )
}
  */

export default App;

/*
function ExternalUsers(){
  const [users, setUsers] = useState([]);
  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return(
    <div>
      <h3>External Users</h3>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}

function User (props) {
  return(
    <div className="product">
      <h2>Name: {props.name}</h2>
      <p>Email: {props.email}</p>
    </div>
  )
}

*/
