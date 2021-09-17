import logo from './logo.svg';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <Product name="Mobile" price="15000"></Product>
      <Product name="Laptop" price="150000"></Product>
      
    </div>
  );
}

function Product(props){
  
  
  return(
    <div className="product">
      <h2>Name: {name}</h2>
      <h4>Price: {price}</h4>
    </div>
  )
}

export default App;
