import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    {name: 'Mobile', price: 15000},
    {name: 'Watch', price: 1900},
    {name: 'Smart Band', price: 1500},
    {name: 'Laptop', price: 120000},
    {name: 'Camera', price: 50000},
  ]
  return (
    <div className="App">
      { products.map(product => <Product name={product.name} price={product.price}></Product>) }
    </div>
  );
}

function Product(props){
  console.log(props)
  const productStyle = {
    border: '3px solid grey',
    borderRadius: '20px',
    padding: '15px'
  }
  const {name, price} = props;
  return(
    <div className="product" style={productStyle}>
      <h2>Name: {name}</h2>
      <h4>Price: {price}</h4>
    </div>
  )
}

export default App;
