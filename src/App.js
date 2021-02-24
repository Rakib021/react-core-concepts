import React , {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const products =[
    {name :'photoshop',price : '$90.00'},
    {name:'Illustrator' , price : '$70.00'},
    {name : 'PDF Reader',price:'$50.34'},
    {name : 'Adobe designer',price:'$20.34'}
  ]
const productNames = products.map(product => product);

   

  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(pd =><Product product = {pd}></Product>)
        }
        <Counter></Counter>
        <Users></Users>
        
  </header>
    </div>
  );
}

function Counter (){
  const [count,setCount]= useState(10);
  const handleIncrease = ()=>{
    const newCount = count + 1;
    setCount(newCount);
  }
  return(
    <div>
      <h1>Count : {count}</h1>
      <button onClick ={handleIncrease}>Increase</button>
      <button onClick={()=>setCount(count-1)}>Decrease</button>
    </div>
  )
}
function Users(){
  const [users,setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data=> setUsers(data))
  }, []);
  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>

      {
        users.map(user => <li>{user.phone}</li>)
      }
      </ul>
    </div>
  )
}
function Product(props){
  const productStyle ={
    border:'2px solid gray',
    borderRadius :'9px',
    
    height:'230px',
    width:'400px',
    float: 'left'
  }
const {name ,price} = props.product;

  return (
    <div style ={productStyle}>
<h2 >{name}</h2>
<h4>Price :{price}</h4>
<button>Buy Now</button>
    </div>
  )
}



export default App;
