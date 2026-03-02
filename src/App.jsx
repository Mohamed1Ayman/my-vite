import { use, useRef, useState } from "react";
import { useEffect } from "react"; 
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Products from "./components/products/Products";
import Cart from "./components/products/Cart";
import Button from "./components/products/Button";
import { MoonLoader } from "react-spinners";





/*const App = () => {
  const links = [
      { name: 'Home', path: '/home' },
      { name: 'About', path: '/about' },
      { name: 'Contact', path: '/contact' },
      { name: 'Blog', path: '/blog' },
      { name: 'Services', path: '/services' },
    ];

    const text = (name)=>{
      console.log(`hello ${name}`)
    }
  return (
    <div className="App">
    <header>
      <Cart products={Products} />
      <Header />
      
      <Navbar links={links} />
    </header>
    <main>
      <Products />
      <Button text={text} />
      <Button text={text} />
      <Button text={text} />
      <Button text={text} />
    </main>
    </div>
  )
};
export default App; */



// const App = () => {
//   const [count, setCount] = useState(0) 
//   return (
//     <div style={{position:'absolute',top:'50%',left:'50%',transform:"translate(-50%, -50%)",textAlign:'center'}}>
//     <div style={{padding:'20px 0',fontSize:'30px'}}>Count: {count}</div>
//     <button onClick={() => setCount(count + 1)}>Increment</button>
//     <button onClick={() => count > 0 && setCount(count - 1)}>Decrement</button>
//     <button onClick={() => setCount(0)}>Reset</button>
//     </div>
//   )

// }

// const App = () => {
//   const [user, setUser] = useState({firstName:'Mohamed', lastName:'Ayman', email:'mohamed.ayman@example.com'}) 
//   return (
    
//     <div style={{position:'absolute',top:'50%',left:'50%',transform:"translate(-50%, -50%)",textAlign:'center'}}>
//     <div style={{padding:'20px 0',fontSize:'30px'}}>Name: {user.firstName} {user.lastName}</div>
//     <div style={{padding:'20px 0',fontSize:'30px'}}>Email: {user.email}</div>
//     <button onClick={() => setUser({...user, firstName:'Ahmed'})}>Change Name</button>
//     <button onClick={() => setUser({...user, email:'ahmed.ayman@example.com'})}>Change Email</button>
//     </div>
//   )}

// export default App




// const ShowPassword = () => {
//   const [password, setPassword] = useState('');
//   const [user, setUser] = useState('');
  
//   const handelLogin = (e) => {
//     if(user === '' || password === ''){
//       alert('username and password are required')
//       return;
//     }
//     if(password.length < 6){
//       alert('password must be at least 6 characters')
//       return;
//     }
//     if(user.length < 3){
//       alert('username must be at least 3 characters')
//       return;
//     }
    
//     e.preventDefault();
//     console.log({user, password}); 
    
//   }
  
//   return (
//     <div style={{position:'absolute',top:'50%',left:'50%',transform:"translate(-50%, -50%)",textAlign:'center'}}>
//     <form onSubmit={handelLogin}>
//       <label htmlFor="username" style={{display:'block'}}>username</label>
//       <input type="text" name="userName" id="username" onChange={(e)=> setUser(e.target.value)} value={user} />
//       <label htmlFor="password">password</label>
//       <input type="password" name="password" style={{display:'block'}} id="password" onChange={(e)=> setPassword(e.target.value)} value={password} />
//       <button type="submit">Submit</button>
//     </form>

//     </div>


//   )
// }

//https://jsonplaceholder.typicode.com/photos
// learn how to fetch data from an API and display it in a React component using useState and useEffect hooks.

// function App (){
// const [fetchData, setFetchData] = useState([]);
// const [loading, setLoading] = useState(false );

// useEffect( () => {
//   const api = async () => {
//     try {
//       setLoading(true)
//       const res = await fetch('https://jsonplaceholder.typicode.com/photos')
//       const data = await res.json()
//       if(res.status === 200){
//         setLoading(false);
//         setFetchData(data);
//       }
//     } catch (error) {
//       setLoading(false);
//       console.log(error)
//     }
//   }
//   api();
// }, [])
// return (
//   <div>
//     {loading ? (<MoonLoader size={50} color="#36D7B7" loading={loading} />) : fetchData.slice(0, 10).map((item)=>
//     <ul>
//       <li key={item.id}>{item.title}</li>
//     </ul>)}
//   </div>
// )
// }






const products = [
  { id: 1, title: 'Product 1', price: 400 ,image:'https://m.media-amazon.com/images/G/42/gno/sprites/nav-sprite-global-1x-reorg-privacy._CB546775727_.png',instadeOf:500,rate:4},
 { id: 2, title: 'Product 2', price: 500 ,image:'https://via.placeholder.com/150',instadeOf:600,rate:5},
  { id: 3, title: 'Product 3', price: 600 ,image:'https://via.placeholder.com/150',instadeOf:700,rate:3},
];


const App = () => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);
 useEffect(() => {

  const fetchProducts = async () => {
    try {
      setLoading(true);
      // Simulate an API call with a delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      setCart(products);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error('Error fetching products:', error);
    }
  };

  fetchProducts(); 
 }, [])
  return (
   <div>{loading ? <div>Loading...</div> : <Products products={cart} />}</div>
  )
}


export default App




